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

Notes:

- The tooltip sets `type: dark` `place: top` `effect: float` as **default** attributes. You don't have to add these options if you don't want to change the defaults
- The option you set on `<ReactTooltip />` component will be implemented on every tooltip in a same page: `<ReactTooltip effect="solid" />`
- The option you set on a specific element, for example: `<a data-type="warning"></a>` will only affect this specific tooltip

|Props| Type | Default | Description|
|-----|--|--|--|
|HTML|string|""|The HTML code block that will be generated in the 'HTML' textarea.|
|CSS|string|""|The CSS code block that will be generated in the 'CSS' textarea.|
|JS|string|""|The HTML code block that will be generated in the 'HTML' textarea.|

## Contributing

We welcome your contribution! Fork the repo, make some changes, submit a pull-request!

## Maintainers

[jobess7](https://github.com/jobess7)

Would gladly accept a new maintainer to help out!


## License

MIT © [JoBess7](https://github.com/JoBess7)
