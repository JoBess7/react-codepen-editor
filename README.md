# react-codepen-editor

>  

[![NPM](https://img.shields.io/npm/v/react-codepen-editor.svg)](https://www.npmjs.com/package/react-codepen-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-codepen-editor
```

## Usage

```jsx
import React from 'react'

import CodepenEditor from "react-codepen-editor";
import "react-codepen-editor/dist/index.css"

class Example extends Component {
  render() {
    return <CodepenEditor 
      CSS={CSS}
      HTML={HTML}
      JS={JS}
      initial="CSS"
      theme={theme}
      mobileQuery={800}
      height={300}
      themeTransitionSpeed={150}/>
  }
}
```


## Demo

See it on [Github Pages](https://jobess7.github.io/react-codepen-editor/).

## Props
All of the props are __optional__ and will not throw an error if not provided.

|Prop| Type | Default | Description|
|-----|--|--|--|
|`HTML`|string|`""` (an empty string)|The HTML code block that will be generated in the 'HTML' textarea.|
|`CSS`|string|`""` (an empty string)|The CSS code block that will be generated in the 'CSS' textarea.|
|`JS`|string|`""` (an empty string)|The HTML code block that will be generated in the 'HTML' textarea.|
|`initial`|string|`"HTML"`|Editor that will be displayed first to the user (possible values: "HTML", "CSS", "JS").|
|`theme`|string|`"dark"`|The color theme of the component.|
|`themeTransitionSpeed`|number|`0`|How fast (in milliseconds) colors should switch from one theme to another.|
|`resettable`|bool|`true`|How fast (in milliseconds) colors should switch from one theme to another.|
|`mobileQuery`|number|`0`|The number (in pixels) at which the component should display for mobile.|

## Contributing

We welcome your contribution! Fork the repo, make some changes, submit a pull-request!

## Maintainers

[jobess7](https://github.com/jobess7)

Would gladly accept a new maintainer to help out!


## License

MIT © [JoBess7](https://github.com/JoBess7)
