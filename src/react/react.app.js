import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ReactApp from './root.component.js';

// Specify the location we want single-spa to mount our application
function domElementGetter() {
  return document.getElementById("react")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactApp,
  domElementGetter,
});
export const bootstrap = (props) => {
  console.log('react app bootstrap');
  return reactLifecycles.bootstrap(props);
}
export const mount = (props) => {
  console.log('react app mount');
  return reactLifecycles.mount(props);
}
export const unmount = (props) => {
  console.log('react app unmount');
  return reactLifecycles.unmount(props);
}