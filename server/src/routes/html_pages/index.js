const router = require('express').Router({mergeParams: true})
const precond = require('precond')
// cache headers
router.use((req, res, next) => {
  res.header('cache-control', 'no-cache, no-store, must-revalidate') // HTTP 1.1.
  res.header('pragma', 'no-cache') // HTTP 1.0.
  res.header('expires', '0') // Proxies.
  next()
})

router.use('/', require('./pages'))

/**
 * Error handler on "/api/*" routes.
*/
router.use((err, req, res, next) => {
  if (err instanceof precond.IllegalArgumentError) {
    return res.status(400).json(new ApiResponse(false, err.message, null, 'bad_request').json())
  }
 // return res.status(500).json({'ok': false, 'error': 'internal_server_error', 'msg': 'something broke internally'})
})

module.exports = router
