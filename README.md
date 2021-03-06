# react-codepen-editor

>  

[![NPM](https://img.shields.io/npm/v/react-codepen-editor.svg)](https://www.npmjs.com/package/react-codepen-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-codepen-editor
```

## Features
- Excellent mobile support 📱
- Dark & light themes 🌗
- Smooth transitions between themes 🌊
- Resettable codepen 🔄
- Code highlighting (more colors coming soon) 🏳️‍🌈

## Usage

```jsx
import React from 'react'

import CodepenEditor from "react-codepen-editor";
import "react-codepen-editor/dist/index.css"

const App = () => {

  const CSS = `button {\n    font-size: 40px;\n    margin: 10px;\n}`;

  const HTML = `<button onclick="foo()" id="btn">\n    Click me!\n</button>`;

  const JS = `function foo() {
    let btn = document.getElementById("btn");
    btn.innerHTML = "I've been clicked!";\n}`;

  render() {
    return <CodepenEditor 
      CSS={CSS}
      HTML={HTML}
      JS={JS}
      initial="CSS"
      mobileQuery={800}
      height="400px"
      themeTransitionSpeed={150}/>
  }
}
```


## Demo

See it on [Github Pages](https://jobess7.github.io/react-codepen-editor/).

## Props

All of the props are __optional__.

|Prop| Type | Default | Description|
|-----|--|--|--|
|`HTML`|string|`""`|The HTML code block that will be generated in the 'HTML' textarea.|
|`CSS`|string|`""`|The CSS code block that will be generated in the 'CSS' textarea.|
|`JS`|string|`""`|The JavaScript code block that will be generated in the 'JS' textarea.|
|`initial`|string|`"HTML"`|Editor that will be displayed first to the user. Possible values: `"HTML"`, `"CSS"`, `"JS"`.|
|`theme`|string|`"dark"`|The color theme of the component. Possible values: `"light"`, `"dark"`.|
|`themeTransitionSpeed`|number|`0`|How fast (in milliseconds) colors should switch from one theme to another.|
|`resettable`|bool|`true`|If the codepen is resettable or not.|
|`mobileQuery`|number|`0`|The number (in pixels) at which the component should display for mobile. If the value `800` is provided, the component will be in mobile view from `0px` to `800px`.|
|`height`|string|`"350px"`|Height (in pixels) of the container.|

## Styling

By default, the component will take 100% of its parent width. Height can be changed via the `height` prop. For mobile support, see the `mobileQuery` prop. 

## Contributing

We welcome your contribution! Fork the repo, make some changes, submit a pull-request! If there are any issues with the component, let us know via `Issues`.

## Maintainers

[jobess7](https://github.com/jobess7)

Would gladly accept a new maintainer to help out!


## License

MIT © [JoBess7](https://github.com/JoBess7)
