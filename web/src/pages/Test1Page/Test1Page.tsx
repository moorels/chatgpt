/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'

import { gql, useQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

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

const Test1Page = () => {
  const [rm1, setRm1] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)
  const { loading, error, data } = useQuery(QUERY)
  const [errorMessage, setErrorMessage] = useState('')

  const Ts1 = async () => {
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    const cd1 = await data.contacts.map((data) => data)

    setRm1(cd1)

    return
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
    if (!output) {
      // Display an error message or take some other action to inform the user
      setErrorMessage('Please fill in Your name.')
      return // Prevent further execution of the function
    }

    createContact({
      variables: {
        input: {
          name: output,
          email: output4,
          company: output3,
          message: output7,
          phone: output5,
          product: output6,
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
  const [input, setInput] = useState('')

  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [input5, setInput5] = useState('')
  const [input6, setInput6] = useState('')
  const [input7, setInput7] = useState('')
  const [output, setOutput] = useState('')
  const [output3, setOutput3] = useState('')
  const [output4, setOutput4] = useState('')
  const [output5, setOutput5] = useState('')
  const [output6, setOutput6] = useState('')
  const [output7, setOutput7] = useState('')

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
    setOutput(shiftString(e.target.value, 167))
  }
  const handleChange2 = (e) => {
    setInput3(e.target.value)
    setOutput3(shiftString(e.target.value, 211))
  }
  const handleChange3 = (e) => {
    setInput4(e.target.value)
    setOutput4(shiftString(e.target.value, 133))
  }
  const handleChange4 = (e) => {
    setInput5(e.target.value)
    setOutput5(shiftString(e.target.value, 6))
  }
  const handleChange5 = (e) => {
    setInput6(e.target.value)
    setOutput6(shiftString(e.target.value, 55))
  }
  const handleChange6 = (e) => {
    setInput7(e.target.value)
    setOutput7(shiftString(e.target.value, 192))
  }

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

  const shiftValues = [167, 211, 133, 6, 55, 192]

  return (
    <>
      <MetaTags title="Test1" description="Test1 page" />
      <div className="flex h-auto flex-col items-center justify-center bg-red-900 px-12 py-4">
        <button
          onClick={Ts1}
          className=" animate-pulse rounded-lg border-x-2 border-y-2 bg-orange-500 px-8  py-2 font-bold text-white hover:bg-yellow-500"
        >
          Get Data
        </button>
        <p></p>
        <br />

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
                <td>{shiftStringback(rm1.name, shiftValues[0])}</td>
                <td>{shiftStringback(rm1.company, shiftValues[1])}</td>
                <td>{shiftStringback(rm1.email, shiftValues[2])}</td>
                <td>{shiftStringback(rm1.phone, shiftValues[3])}</td>
                <td>{shiftStringback(rm1.product, shiftValues[4])}</td>
                <td>{shiftStringback(rm1.message, shiftValues[5])}</td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-center">
          <h1 className="rw-label text-white">Name:</h1>
          <div>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              className="rw-input w-[660px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
            />
            {errorMessage && (
              <div className="error-message text-white">{errorMessage}</div>
            )}
          </div>
          <h1 className="rw-label text-white">Company:</h1>
          <div>
            <input
              type="text"
              value={input3}
              onChange={handleChange2}
              className="rw-input w-[660px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
            />
          </div>
          <h1 className="rw-label text-white">Email:</h1>
          <div>
            <input
              type="text"
              value={input4}
              onChange={handleChange3}
              className="rw-input w-[660px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
            />
          </div>
          <h1 className="rw-label text-white">Phone:</h1>
          <div>
            <input
              type="text"
              value={input5}
              onChange={handleChange4}
              className="rw-input w-[660px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
            />
          </div>
          <h1 className="rw-label text-white">Product:</h1>
          <div>
            <input
              type="text"
              value={input6}
              onChange={handleChange5}
              className="rw-input w-[660px] border-x-2 border-y-2  border-orange-500 bg-slate-300 text-black"
            />
          </div>
          <h1 className="rw-label text-white">Message:</h1>
          <div>
            <input
              type="text"
              value={input7}
              onChange={handleChange6}
              className="rw-input w-[660px] border-x-2 border-y-2 border-orange-500 bg-slate-300 text-black "
            />
          </div>
          <div>
            <button
              className="rw-input w-[660px] animate-pulse border-x-2 border-y-2 bg-orange-500  font-bold text-white hover:bg-yellow-500"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>

        <p></p>
      </div>
    </>
  )
}

export default Test1Page
