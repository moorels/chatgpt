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
      setDecodedString('')
    }
  }

  return (
    <>
      <body className="h-[1220px] bg-slate-700">
        <div>
          <MetaTags title="Helper" description="Helper page" />

          <label htmlFor="passcodeInput">.</label>
          <input
            className=" rounded-md border-none  bg-slate-700 px-1 py-0 text-slate-700 focus:outline-0 focus:ring-0"
            type="text"
            id="passcodeInput"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button onClick={decodeString} className="text-slate-600">
            .
          </button>
          <p className="text-slate-700">{decodedString}</p>
        </div>
      </body>
    </>
  )
}

export default HelperPage
