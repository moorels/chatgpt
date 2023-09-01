import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

const HelperPage = () => {
  const [reversedString, setReversedString] = useState('')
  const [rv2, setRv2] = useState('')
  const [passcode, setPasscode] = useState('')
  const [decodedString, setDecodedString] = useState('')
  const [binary, setBinary] = useState('')

  const r2 = () => {
    const reversed = d4.split('').map(rx3).join('')
    setRv2(reversed)
  }
  const decodeString = () => {
    if (rv2 !== null && rv2 !== '') {
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
  }

  const concatenatedString = "data.datas.map((data) => data.data).join('')"

  const s1 = concatenatedString.slice(0, 272)
  const s2 = concatenatedString.slice(272, 650)

  const hexValues = s1.split('\\x').slice(1)
  const hexValues2 = binary.split('\\x').slice(1)

  const decodedString454 = hexValues
    .map((hexValue) => String.fromCharCode(parseInt(hexValue, 16)))
    .join('')

  const d4 = hexValues2
    .map((hexValue) => String.fromCharCode(parseInt(hexValue, 16)))
    .join('')

  console.log(s1)
  console.log(s2)
  console.log(hexValues2)
  console.log(d4)
  const reverseHardcodedString = () => {
    const r1 = decodedString454.split('').map(rx3).join('')
    const f1 = r1.split('5@7').join('567')

    setReversedString(f1)
  }

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

  function Binary() {
    const bS = s2
    const bA = bS['split'](' ')
    const nS = bA['map']((b) => String['fromCharCode'](parseInt(b, 2)))['join'](
      ''
    )
    setBinary(nS)

    return
  }

  return (
    <>
      <div className="h-[1220px] bg-slate-700">
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
          <button onClick={Binary} className="text-slate-600">
            binary
          </button>
          {rv2}
          <br />

          <br />
          {binary}
          <br />
          {reversedString}
          <br />
          {decodedString454}
        </div>
      </div>
    </>
  )
}

export default HelperPage
