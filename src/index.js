import React, { useEffect, useState } from 'react'
import { highlight, languages } from 'prismjs'
import uuid from 'react-uuid'
import Editor from 'react-simple-code-editor'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { setTheme } from './colors'
import { createGlobalStyle } from 'styled-components'
import './styles.css'

const CreateDynamicStyles = (themeTransitionSpeed, mobileQuery) =>
  createGlobalStyle`
    .td {
        transition: background-color ${themeTransitionSpeed || 0}ms;
    }
    @media screen and (max-width: ${mobileQuery || 0}px) {
        .codepen-display {
            flex-direction: column;
        }
        .codepen-editors {
            width: 100%;
            margin: 0;
        }
        .codepen-textareas {
            margin-bottom: 10px;
        } 
        .codepen-results {
            width: 100%;
            padding: 10px 10px 6px 10px;
            box-sizing: border-box;
        }
        .codepen-display {
            height: fit-content !important;
        }
        .codepen-iframe-container {
            height: fit-content;
            padding: 0;
        }
        .codepen-results-title {
            padding: 10px 0px;
        }
    }
`

export default function CodepenEditor({
  HTML,
  CSS,
  JS,
  initial,
  theme,
  resettable,
  height,
  themeTransitionSpeed,
  mobileQuery
}) {
  const DynamicStyles = CreateDynamicStyles(themeTransitionSpeed, mobileQuery)

  // determines if the user can reset the editor
  // eslint-disable-next-line no-unneeded-ternary
  const _resettable = resettable !== undefined ? resettable : true

  // save initial state of the editor
  const [_HTML, setHTML] = useState(HTML || '')
  const [_CSS, setCSS] = useState(CSS || '')
  const [_JS, setJS] = useState(JS || '')

  // if no default language is passed, set html as visible
  const [selected, setSelected] = useState(initial || 'HTML')

  // generate unique id for this iframe
  const iFrameId = uuid()
  const [iFrame, setIFrame] = useState(null)

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  useEffect(() => {
    if (document) {
      const frame = document.getElementById('codepen-iframe-' + iFrameId)
        .contentWindow.document

      setIFrame(frame)
      writeInFrame(frame, _HTML, _CSS, _JS)
    }
  }, [])

  const resetIFrame = () => {
    const resetButton = document.getElementById('codepen-reset-' + iFrameId)

    resetButton.classList.add('codepen-reset-active')
    setTimeout(() => {
      resetButton.classList.remove('codepen-reset-active')
    }, 400)

    setHTML(HTML || '')
    setCSS(CSS || '')
    setJS(JS || '')

    writeInFrame(iFrame, HTML, CSS, JS)

    checkForUndefined(iFrame)
  }

  const checkForUndefined = () => {
    const frame = document.getElementById('codepen-iframe-' + iFrameId)
      .contentWindow.document

    if (frame.body.innerHTML.includes('undefined')) {
      frame.body.innerHTML = ''
    }
  }

  const writeInFrame = (frame, HTML, CSS, JS) => {
    frame.open()
    frame.writeln(
      HTML + '<style>' + CSS + '</style>' + '<script>' + JS + '</script>'
    )
    frame.close()
  }

  const updateTextArea = (type, val) => {
    let tmpHTML = _HTML
    let tmpCSS = _CSS
    let tmpJS = _JS

    if (type === 'HTML') {
      setHTML(val)
      tmpHTML = val
    } else if (type === 'CSS') {
      setCSS(val)
      tmpCSS = val
    } else if (type === 'JS') {
      setJS(val)
      tmpJS = val
    }

    writeInFrame(iFrame, tmpHTML, tmpCSS, tmpJS)
  }

  return (
    <div className='codepen'>
      <DynamicStyles />
      <div className='codepen-title-flex td'>
        <span className='codepen-title td'>Code playground</span>
        {_resettable && (
          <BsArrowCounterclockwise
            id={'codepen-reset-' + iFrameId}
            title='Reset code'
            onClick={resetIFrame}
            className='codepen-reset'
            size={23}
          />
        )}
      </div>

      <div style={{ height: height || '350px' }} className='codepen-display td'>
        <div className='codepen-editors'>
          <div className='codepen-editor-picker td'>
            {
              <button
                className={`td ${
                  selected === 'HTML' ? 'codepen-title-selected ' : ''
                }`}
                onClick={() => setSelected('HTML')}
              >
                HTML
              </button>
            }

            {
              <button
                className={`td ${
                  selected === 'CSS' ? 'codepen-title-selected ' : ''
                }`}
                onClick={() => setSelected('CSS')}
              >
                CSS
              </button>
            }

            {
              <button
                className={`td ${
                  selected === 'JS' ? 'codepen-title-selected ' : ''
                }`}
                onClick={() => setSelected('JS')}
              >
                JS
              </button>
            }
          </div>
          <div className='codepen-textareas td'>
            <div
              className={`codepen-editor td ${
                selected === 'CSS' ? '' : 'codepen-editor-inactive'
              }`}
            >
              {selected === 'CSS' && (
                <Editor
                  value={_CSS}
                  onValueChange={(newVal) => updateTextArea('CSS', newVal)}
                  highlight={(code) => highlight(code, languages.css)}
                />
              )}
            </div>

            <div
              className={`codepen-editor td ${
                selected === 'HTML' ? '' : 'codepen-editor-inactive'
              }`}
            >
              {selected === 'HTML' && (
                <Editor
                  value={_HTML}
                  onValueChange={(newVal) => updateTextArea('HTML', newVal)}
                  highlight={(code) => highlight(code, languages.html, 'html')}
                />
              )}
            </div>

            <div
              className={`codepen-editor td ${
                selected === 'JS' ? '' : 'codepen-editor-inactive'
              }`}
            >
              {selected === 'JS' && (
                <Editor
                  value={_JS}
                  onValueChange={(newVal) => updateTextArea('JS', newVal)}
                  highlight={(code) => highlight(code, languages.js, 'js')}
                />
              )}
            </div>
          </div>
        </div>

        <div className='codepen-results td'>
          <div className='codepen-results-title td'>Results</div>
          <div className='codepen-iframe-container td'>
            <iframe
              scrolling='yes'
              title='react-codepen-editor'
              marginWidth='0'
              marginHeight='0'
              className='td'
              id={'codepen-iframe-' + iFrameId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
