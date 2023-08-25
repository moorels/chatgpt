import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'
const HelperPage = () => {
  const [passcode, setPasscode] = useState('')
  const [decodedString, setDecodedString] = useState('')

  const decodeString = () => {
    // Example passcode and decoded string mapping
    const passcodeMapping = {
      'Yellow10@':
        'Yellow@5788793@1234567890Yellow@5788793@1234567890Green10@@@White10@@@',
      // You can add more mappings here
    }

    // eslint-disable-next-line no-prototype-builtins
    if (passcodeMapping.hasOwnProperty(passcode)) {
      setDecodedString(passcodeMapping[passcode])
    } else {
      setDecodedString('Invalid passcode. Please enter a valid passcode.')
    }
  }

  return (
    <>
      <MetaTags title="Helper" description="Helper page" />

      <label htmlFor="passcodeInput">.</label>
      <input
        type="text"
        id="passcodeInput"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button onClick={decodeString}>.</button>
      <p>{decodedString}</p>
    </>
  )
}

export default HelperPage
