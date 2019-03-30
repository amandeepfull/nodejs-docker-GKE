import ContactSave from './components/contact-save'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from './store/commonStore';

 
ReactDOM.render(
<Provider store={store}>
    <ContactSave />
  </Provider>, document.getElementById("app"));

