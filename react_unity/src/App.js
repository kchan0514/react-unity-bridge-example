import logo from './logo.svg';
import './App.css';

import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "UnityBuild/webgl_app.loader.js",
  dataUrl: "UnityBuild/webgl_app.data",
  frameworkUrl: "UnityBuild/webgl_app.framework.js",
  codeUrl: "UnityBuild/webgl_app.wasm",
  
});



function App() {
  function moveRight() {
    unityContext.send("Sphere", "MoveRight", 10);
  }
  function moveLeft() {
    unityContext.send("Sphere", "MoveLeft", 10);
  }

  return (
    <div>
      <button onClick={moveRight}>MoveRight</button>
      <button onClick={moveLeft}>MoveLeft</button>
      
      <Unity unityContext={unityContext} 
        style={{
          height: "100%",
          width: 400,
          border: "2px solid black",
          background: "grey",
        }}/>
    </div>
  );
}
export default App;



/*


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

*/