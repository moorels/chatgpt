import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

const rx3 = ($Hc) => {
  const $_$ = $Hc.charCodeAt(0)
  const _0_a$_l = $Hc >= 'a' ? 97 : 65
  const _0_d$_ = 48
  const _0_a_r = 26
  const _0_d_r = 10
  const _1_A_1 = ($Hc >= 'a' && $Hc <= 'z') || ($Hc >= 'A' && $Hc <= 'Z')
  const _1_D_1 = $Hc >= '0' && $Hc <= '9'
  let _$t$_ = $_$
  let _F$_ = 0
  _F$_ = _1_A_1
    ? $_$ -
      _0_a$_l -
      (_1_A_1 ? 12 : 0) +
      (_1_A_1 ? _0_a_r : 0) +
      (_1_A_1 ? 0 : _0_d_r)
    : $_$ - _0_d$_ - (_1_D_1 ? 3 : 0) + (_1_D_1 ? _0_d_r : 0)
  _$t$_ = (_F$_ % (_1_A_1 ? _0_a_r : _0_d_r)) + (_1_A_1 ? _0_a$_l : _0_d$_)
  let tx1 = String.fromCharCode(_$t$_)
  if (tx1 === '6') {
    tx1 = '@'
  }

  return tx1
}

const h1 = (() => {
  const _0x12c6_1 = [
    '\x4B\x71\x78\x78\x61\x69\x40',
    '\x38\x30\x31\x31\x30\x32\x36\x40',
    '\x34\x35\x36\x37\x38\x39\x30\x31\x32\x33',
  ]
  const _0x12c6_2 = [
    '\x4B\x71\x78\x78\x61\x69\x40',
    '\x38\x30\x31\x31\x30\x32\x36\x40',
    '\x34\x35\x36\x37\x38\x39\x30\x31\x32\x33',
  ]
  const _0x12c6_3 = [
    '\x53\x64\x71\x71\x7A\x34\x33\x40\x40\x49\x74\x75\x66\x71',
    '\x34\x33\x40\x40',
  ]
  const rx = _0x12c6_1.join('') + _0x12c6_2.join('') + _0x12c6_3.join('')

  return rx
})()
const HelperPage = () => {
  const [reversedString, setReversedString] = useState('')
  const [rv2, setRv2] = useState('')
  const [passcode, setPasscode] = useState('')
  const [decodedString, setDecodedString] = useState('')
  const _0x12c6_1 = '\x4B'
  const _0x12c6_2 = '\x71'
  const _0x12c6_3 = '\x78'
  const _0x12c6_4 = '\x78'
  const _0x12c6_5 = '\x61'
  const _0x12c6_6 = '\x69'
  const _0x12c6_7 = '\x34'
  const _0x12c6_8 = '\x33'
  const _0x12c6_9 = '\x40'
  const _0x12c6_A = _0x12c6_1 + _0x12c6_2 + _0x12c6_3 + _0x12c6_4
  const _0x12c6_B = _0x12c6_5 + _0x12c6_6 + _0x12c6_7 + _0x12c6_8
  const _0x12c6_C = _0x12c6_A + _0x12c6_B
  const _0x12c6_D = _0x12c6_C + _0x12c6_9

  const h2 = (() => {
    const _0x12c6 = [_0x12c6_D]
    return _0x12c6[0]
  })()

  const reverseHardcodedString = () => {
    const r1 = h1.split('').map(rx3).join('')
    const f1 = r1.split('5@7').join('567')

    setReversedString(f1)
  }

  const r2 = () => {
    const reversed = h2.split('').map(rx3).join('')
    setRv2(reversed)
  }
  const decodeString = () => {
    const passcodeMapping = {
      [rv2]: reversedString,
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

        <div className=" justify-right flex flex-col items-end px-12">
          <button onClick={reverseHardcodedString} className="text-slate-600">
            reverse code
          </button>
          <button onClick={r2} className="text-slate-600">
            reverse login
          </button>
          {rv2}
          <br />
          {h2}
          <br />
          {h1}
          <br />
          {reversedString}
          <br />
        </div>
      </body>
    </>
  )
}

export default HelperPage
