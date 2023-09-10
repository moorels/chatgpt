/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useCallback, useEffect, useState } from 'react'

import { gql, useQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

import Particles from '../../components/Particles'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

export const QUERY = gql`
  query FindContacts {
    contacts {
      id
      name
      company
      email
      phone
      product
      message
      createdAt
    }
  }
`
export const QUERY2 = gql`
  query FindDataById($id: Int!) {
    data: data(id: $id) {
      id
      data
    }
  }
`
const Test1Page = () => {
  const [rm1, setRm1] = useState([])
  const [dx1, setDx1] = useState('')
  const [refreshPage, setRefreshPage] = useState(false)
  const [rs, setR] = useState('')
  const [ts, setT] = useState('')
  const [sv, setV] = useState('')
  const [iv, setI] = useState('')
  const [showMo1, setMo1] = useState(false)

  const to1 = useCallback(() => {
    setMo1(!showMo1)
  }, [showMo1])

  useEffect(() => {
    setTimeout(() => {
      setMo1(false)
    }, 8000)
  }, [to1])

  const handleButtonClick = () => {
    if (iv === sv && iv !== '' && sv !== '@') {
      Ts1()
    } else {
      return
    }
  }

  const handleInputChange = (e) => {
    setI(e.target.value)
  }

  const {
    loading: loadingQuery1,
    error: errorQuery1,
    data: dataQuery1,
  } = useQuery(QUERY)
  const [errorMessage, setErrorMessage] = useState('')

  const Ts1 = async () => {
    if (loadingQuery1) return 'Loading...'
    if (errorQuery1) return `Error! ${error.message}`
    const cd1 = await dataQuery1.contacts.map((data) => data)

    setRm1(cd1)

    return
  }
  const hardcodedId = 9
  const { loading, error, data } = useQuery(QUERY2, {
    variables: { id: hardcodedId }, // Pass the ID as a variable
  })
  const Ts2 = async () => {
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    const resultData = await data.data.data
    setDx1(resultData)

    return
  }

  const convertToRaw = () => {
    setR(
      dx1
        .replace(/\s/g, '')
        .match(/.{1,8}/g)
        .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
        .join('')
    )
    setT(
      rs
        .slice(2)
        .match(/.{1,2}/g)
        .map((pair) => String.fromCharCode(parseInt(pair, 16)))
        .join('')
        .replace(/[^a-zA-Z0-9]/g, '')
    )
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

  const r2 = () => {
    const r = ts.split('').map(rx3).join('') + '@'
    setV(r)
  }

  const [createContact] = useMutation(CREATE_CONTACT_MUTATION, {
    onCompleted: () => {
      console.log('Contact created')
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const onSave = () => {
    if (!o) {
      setErrorMessage('Please fill in Your name.')
      return
    }

    createContact({
      variables: {
        input: {
          name: o,
          email: o4,
          company: o3,
          message: o7,
          phone: o5,
          product: o6,
        },
      },
    })
    setRefreshPage(true)
  }
  useEffect(() => {
    if (refreshPage) {
      setTimeout(() => {
        window.location.reload()
      }, 5000) // Reload the page
    }
  }, [refreshPage])
  const [i, setInput] = useState('')

  const [i3, setI3] = useState('')
  const [i4, setI4] = useState('')
  const [i5, setI5] = useState('')
  const [i6, setI6] = useState('')
  const [i7, setI7] = useState('')
  const [o, setOu] = useState('')
  const [o3, setO3] = useState('')
  const [o4, setO4] = useState('')
  const [o5, setO5] = useState('')
  const [o6, setO6] = useState('')
  const [o7, setO7] = useState('')

  //---------------------------------------------------------------------------------------
  const sc = (c1, sh1) => {
    const ascii = c1.charCodeAt(0)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      return String.fromCharCode(ascii + sh1)
    } else if (ascii >= 48 && ascii <= 57) {
      return String.fromCharCode(((ascii - 48 + sh1) % 10) + 48)
    } else {
      return String.fromCharCode(ascii + sh1)
    }
  }

  const sh2 = (str, sh4) => {
    let sh3 = ''
    for (let i = 0; i < str.length; i++) {
      sh3 += sc(str[i], sh4)
    }
    return sh3
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    setOu(sh2(e.target.value, 167))
  }
  const handleChange2 = (e) => {
    setI3(e.target.value)
    setO3(sh2(e.target.value, 211))
  }
  const handleChange3 = (e) => {
    setI4(e.target.value)
    setO4(sh2(e.target.value, 133))
  }
  const handleChange4 = (e) => {
    setI5(e.target.value)
    setO5(sh2(e.target.value, 6))
  }
  const handleChange5 = (e) => {
    setI6(e.target.value)
    setO6(sh2(e.target.value, 55))
  }
  const handleChange6 = (e) => {
    setI7(e.target.value)
    setO7(sh2(e.target.value, 192))
  }

  const sh5 = (ch6, sh6) => {
    const ascii = ch6.charCodeAt(0)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      return String.fromCharCode(ascii - sh6)
    } else if (ascii >= 48 && ascii <= 57) {
      return String.fromCharCode(((ascii - 48 - sh6 + 10) % 10) + 48)
    } else {
      return String.fromCharCode(ascii - sh6)
    }
  }

  const sh7 = (str, ss1) => {
    let sh9 = ''
    for (let i = 0; i < str.length; i++) {
      sh9 += sh5(str[i], ss1)
    }
    return sh9
  }

  const sq8 = [167, 211, 133, 6, 55, 192]

  return (
    <>
      <MetaTags title="Test1" description="Test1 page" />
      <Particles />
      <div className="flex h-auto flex-col items-start justify-start px-12 py-4">
        <input
          type="text"
          value={iv}
          onChange={handleInputChange}
          placeholder=""
          className=" rounded-md border-none bg-slate-700 px-1 py-0 text-slate-700 focus:outline-0 focus:ring-0"
        />
      </div>

      <div className="flex h-auto flex-col items-center justify-center px-12 py-4">
        <button
          onClick={handleButtonClick}
          className=" animate-pulse rounded-lg border-x-2 border-y-2 bg-orange-500 px-8  py-2 font-bold text-white hover:bg-yellow-500"
        >
          Get Data
        </button>
        <p></p>
        <br />{' '}
        <button className="items-end justify-end  text-slate-600" onClick={to1}>
          .
        </button>
        <div className="rw-segment rw-table-wrapper-responsive w-[669]">
          <table className="rw-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Message</th>

                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {rm1.map((rm1) => (
                <tr key={rm1.id}>
                  <td>{rm1.id}</td>
                  <td>{sh7(rm1.name, sq8[0])}</td>
                  <td>{sh7(rm1.company, sq8[1])}</td>
                  <td>{sh7(rm1.email, sq8[2])}</td>
                  <td>{sh7(rm1.phone, sq8[3])}</td>
                  <td>{sh7(rm1.product, sq8[4])}</td>
                  <td>{sh7(rm1.message, sq8[5])}</td>

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rw-segment rw-table-wrapper-responsive w-[669] border-none">
          <div className="flex flex-col items-center justify-center">
            <h1 className="rw-label text-white">Name:</h1>
            <div>
              <input
                type="text"
                value={i}
                onChange={handleChange}
                className="rw-input w-[350px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
              />
              {errorMessage && (
                <div className="error-message text-white">{errorMessage}</div>
              )}
            </div>
            <h1 className="rw-label text-white">Company:</h1>
            <div>
              <input
                type="text"
                value={i3}
                onChange={handleChange2}
                className="rw-input w-[350px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
              />
            </div>
            <h1 className="rw-label text-white">Email:</h1>
            <div>
              <input
                type="text"
                value={i4}
                onChange={handleChange3}
                className="rw-input w-[350px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
              />
            </div>
            <h1 className="rw-label text-white">Phone:</h1>
            <div>
              <input
                type="text"
                value={i5}
                onChange={handleChange4}
                className="rw-input w-[350px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
              />
            </div>
            <h1 className="rw-label text-white">Product:</h1>
            <div>
              <input
                type="text"
                value={i6}
                onChange={handleChange5}
                className="rw-input w-[350px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
              />
            </div>
            <h1 className="rw-label text-white">Message:</h1>
            <div>
              <input
                type="text"
                value={i7}
                onChange={handleChange6}
                className="rw-input w-[350px] border-x-2 border-y-2 border-orange-500 bg-slate-300 text-black "
              />
            </div>
            <div className="h">
              <button
                className="rw-input w-[250px] animate-pulse border-x-2 border-y-2 bg-orange-500  font-bold text-white hover:bg-yellow-500"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <p className=" justify-end  px-12 py-12"></p>
      </div>
      <div className=" flex flex-shrink-0 justify-end  px-12 py-12">
        {showMo1 && (
          <div className=" flex flex-col items-end  justify-end ">
            <button onClick={r2} className=" text-slate-600">
              .
            </button>

            <button onClick={convertToRaw} className=" text-slate-600">
              .
            </button>
            <button onClick={Ts2} className=" text-slate-600">
              .
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Test1Page
