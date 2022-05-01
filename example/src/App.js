import React from 'react'

import CodepenEditor from "react-codepen-editor";
import "react-codepen-editor/dist/index.css"
import { useState } from "react";

const App = () => {

  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const CSS = `button {\n    font-size: 40px;\n    margin: 10px;\n}`;

  const HTML = `<button onclick="foo()" id="btn">\n    Click me!\n</button>`;

  const JS = `function foo() {
    let btn = document.getElementById("btn");
    btn.innerHTML = "I've been clicked!";\n}`;

  return (
    <div className="container">
      <div className="head">
        <h1>react-codepen-editor <span role="img" aria-label='#'>✨🧙‍♂️</span></h1>
        <button onClick={() => switchTheme()}>Toggle theme</button>    
      </div>

      <CodepenEditor 
      CSS={CSS}
      HTML={HTML}
      JS={JS}
      initial="CSS"
      theme={theme}
      mobileQuery={800}
      height={300}
      themeTransitionSpeed={150}/>
    </div>)
}

export default App
