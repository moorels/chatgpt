import React, { useState, useEffect } from 'react'

export default function Timer() {
  const date = new Date()
  const tt = date.toLocaleTimeString()
  const [ti, setTi] = useState<undefined | null>()

  useEffect(() => {
    setTimeout(() => {
      setTi(date.toLocaleTimeString())
    }, 1000)
  }, [ti, setTi])

  return (
    <div>
      <div className="focus:shadow-outline m-3 w-60 justify-center rounded-lg bg-blue-500 p-2 text-center text-indigo-100 transition-colors duration-150 hover:bg-blue-700">
        {`${date.toDateString()} ${tt} `}
      </div>
    </div>
  )
}
