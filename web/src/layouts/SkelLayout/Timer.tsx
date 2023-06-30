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
      <div className=" focus:shadow-outline hover: w-70 m-3 justify-center rounded-lg bg-gray-500  p-2 text-center font-mono text-sm text-indigo-100 transition-colors  duration-150 hover:animate-pulse hover:bg-zinc-600">
        {`${date.toDateString()} ${tt} `}
      </div>
    </div>
  )
}
