import ContactSave from './containers/contact-save'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from './store/commonStore';

 
ReactDOM.render(
<Provider store={store}>
    <ContactSave />
  </Provider>, document.getElementById("app"));

