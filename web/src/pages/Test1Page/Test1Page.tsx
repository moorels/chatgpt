import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
const Test1Page = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [input2, setInput2] = useState('')
  const [output2, setOutput2] = useState('')

  //---------------------------------------------------------------------------------------
  const shiftChar = (char, shift) => {
    const ascii = char.charCodeAt(0)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      return String.fromCharCode(ascii + shift)
    } else if (ascii >= 48 && ascii <= 57) {
      return String.fromCharCode(((ascii - 48 + shift) % 10) + 48)
    } else {
      return String.fromCharCode(ascii + shift)
    }
  }

  const shiftString = (str, shift) => {
    let shiftedStr = ''
    for (let i = 0; i < str.length; i++) {
      shiftedStr += shiftChar(str[i], shift)
    }
    return shiftedStr
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    setOutput(shiftString(e.target.value, 2))
  }

  //---------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------
  const shiftCharBack = (char, shift) => {
    const ascii = char.charCodeAt(0)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      return String.fromCharCode(ascii - shift)
    } else if (ascii >= 48 && ascii <= 57) {
      return String.fromCharCode(((ascii - 48 - shift + 10) % 10) + 48)
    } else {
      return String.fromCharCode(ascii - shift)
    }
  }

  const shiftStringback = (str, shift) => {
    let shiftedStr = ''
    for (let i = 0; i < str.length; i++) {
      shiftedStr += shiftCharBack(str[i], shift)
    }
    return shiftedStr
  }

  const handleChangeback = (e) => {
    setInput2(e.target.value)
    setOutput2(shiftStringback(e.target.value, 2))
  }

  //---------------------------------------------------------------------------------------
  return (
    <>
      <MetaTags title="Test1" description="Test1 page" />

      <h1>Test1Page</h1>
      <p>
        Find me in <code>./web/src/pages/Test1Page/Test1Page.tsx</code>
      </p>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <p>{output}</p>
      </div>
      <div>
        <input type="text" value={input2} onChange={handleChangeback} />
        <p>{output2}</p>
      </div>
      <p>
        My default route is named <code>test1</code>, link to me with `
        <Link to={routes.test1()}>Test1</Link>`
      </p>
    </>
  )
}

export default Test1Page
