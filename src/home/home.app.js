import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from "single-spa-react";
import Home from "./root.component.js";

function domElementGetter() {
  return document.getElementById("home")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter
});

// Correctly defining the lifecycle functions
export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return new Promise((resolve, reject) => {
    reactLifecycles.mount(props)
      .then(resolve) // Resolve if mounting succeeds
      .catch(error => {
        // Reject with an Error object
        reject(new Error('Failed to mount: ' + error.message));
      });
  });
}

export function unmount(props) {
  return new Promise((resolve, reject) => {
    reactLifecycles.unmount(props)
      .then(resolve) // Resolve if unmounting succeeds
      .catch(error => {
        // Reject with an Error object
        reject(new Error('Failed to unmount: ' + error.message));
      });
  });
}
