/*
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
*/
/*
function sir(){
  const container=document.createElement("div");
  container.innerHTML="Hello Sir";
  container.style.color="#cc99ff";
  container.style.fontSize="35px";
  container.style.fontFamily="monospace"
  container.style.fontWeight="700"
  container.style.textAlign="center"
  container.style.backgroundColor="#e6ccff"
  return container;
}

function App(){
  return <div> Hello </div>
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render( <React.StrictMode>
  <App />
</React.StrictMode>
);

reportWebVitals();
*/

//root.render(App())

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import reportWebVitals from "./reportWebVitals";

 
const root= ReactDOM.createRoot(document.getElementById("root"))

 
root.render(<App />)


//reportWebVitals();