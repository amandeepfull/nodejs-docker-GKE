import ContactSave from "./react/containers/contact-save"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from "./react/store/commonStore";
import './App.css'
 
ReactDOM.render(
<Provider store={store}>
    <ContactSave />
  </Provider>, document.getElementById("app"));