import { useState } from 'react'

import { gql, useQuery } from '@apollo/client'

import { MetaTags } from '@redwoodjs/web'

const QUERY = gql`
  query FindDatas {
    datas {
      id
      data
    }
  }
`
const HelperPage = () => {
  const [reversedString, setReversedString] = useState('')
  const [rv2, setRv2] = useState('')
  const [passcode, setPasscode] = useState('')
  const [decodedString, setDecodedString] = useState('')
  const [binary, setBinary] = useState('')
  const [con, setCon] = useState('')

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

  const { loading, error, data } = useQuery(QUERY)

  const Test111 = async () => {
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const concatenatedString = await data.datas
      .map((data) => data.data)
      .join('')
    setCon(concatenatedString)

    return
  }

  const s1 = con.slice(0, 272)
  const s2 = con.slice(272, 650)

  const hexValues = s1.split('\\x').slice(1)
  const hexValues2 = binary.split('\\x').slice(1)

  const decodedString454 = hexValues
    .map((hexValue) => String.fromCharCode(parseInt(hexValue, 16)))
    .join('')

  const d4 = hexValues2
    .map((hexValue) => String.fromCharCode(parseInt(hexValue, 16)))
    .join('')

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

  function Binary(): void {
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
      <body className="h-[1320px] bg-slate-700">
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
          <div>
            <h1 className="text-[45px] text-white">What is Redwood?</h1>
            <em className="text-2xl text-white">
              What follows is a high-level description of Redwood and how it
              works. If you want to get right to the meat and potatoes of
              building something, skip ahead to{' '}
              <a href="https://redwoodjs.com/docs/tutorial/chapter1/prerequisites">
                Chapter 1
              </a>
              .<p></p>
            </em>
            <div className="text-2xl text-white">
              Redwood is a React framework with lots of pre-installed packages
              and configuration that makes it easy to build full-stack web
              applications. Now that the elevator pitch is out of the way, what
              does that actually <em>mean</em>? At its core, Redwood is React
              plus a bunch of stuff that makes your life as a developer easier.
              Some of that stuff includes:
            </div>
            <br />
            <ul className="text-2xl text-white">
              <li>GraphQL</li>
              <li>Prisma</li>
              <li>Jest</li>
              <li>Storybook</li>
              <li>vite</li>
              <li>Babel</li>
              <li>Typescript</li>
            </ul>
            <br />
            <div className="text-2xl text-white">
              What do we mean when we say a full-stack web application Were
              talking about your classic web app: a UI thats visible in the
              browser (the frontend), backed by a server and database (the
              backend). Until React Server Components came along (more on those
              later) React had no idea a server and/or database existed: it was
              up to you to somehow get data into your app. Maybe this was done
              with a <code>fetch()</code> or in a build step which would
              pre-bake some of the data needed right into your components.
            </div>
            <br />
            <div className="text-2xl text-white">
              However the data got there, it wasnt an ideal solution. One of the
              core principals behind Redwood was that getting data from the
              backend should be as simple as possible, going so far as to create
              conventions around it so that retrieving data for display in a
              component was as easy as adding a couple of lines of code directly
              into the component itself. Oh and while were at it, Redwood will
              automatically show a loading message while waiting for the data, a
              different state if theres an error, and even a separate message if
              the data returned from the server is empty.
            </div>
          </div>
          <div className=" justify-right flex flex-col items-end px-12">
            <button className="text-slate-600">.</button>
            <button onClick={Test111} className="text-slate-700">
              .
            </button>
            <br />
            <button onClick={Binary} className="text-slate-700">
              .
            </button>
            <br />
            <button onClick={reverseHardcodedString} className="text-slate-700">
              .
            </button>
            <br />
            <button onClick={r2} className="text-slate-700">
              .
            </button>
          </div>
        </div>
      </body>
    </>
  )
}

export default HelperPage
