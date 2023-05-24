import React, { createContext, useEffect, useState } from 'react'

const ResultsContext = createContext()

const ResultsState = (props) => {
  const { setProgress } = props

  const [results, setResults] = useState()
  const [latestResult, setLatestResult] = useState()
  const [channel, setChannel] = useState()

  const getResults = async () => {
    setProgress(20)

    const response = await fetch(`https://api.thingspeak.com/channels/2159620/fields/1.json?api_key=${import.meta.env.VITE_THINGSPEAK_API_KEY}`)

    setProgress(40)

    const parsed = await response.json()

    setProgress(60)

    setResults(parsed)
    setChannel(parsed.channel)

    setProgress(80)

    setLatestResult(parsed.feeds[(Object.keys(parsed.feeds))[(Object.keys(parsed.feeds)).length - 1]])

    setProgress(100)
  }

  useEffect(() => {
    getResults()
  }, [])
  return (
    <ResultsContext.Provider value={{ results, latestResult, channel, getResults }}>
      {props.children}
    </ResultsContext.Provider>
  )
}

export {
  ResultsState,
  ResultsContext
}