import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const ResultsContext = createContext()

const ResultsState = (props) => {
  const { setProgress } = props

  const navigate = useNavigate()

  const [results, setResults] = useState()
  const [latestResult, setLatestResult] = useState()
  const [channel, setChannel] = useState()
  const [apiKey, setApiKey] = useState('8IOKBRWW78ZNEO80')

  const getResults = async () => {
    try {

      setProgress(20)

      // fetch request
      const response = await fetch(`https://api.thingspeak.com/channels/2159620/fields/1.json?api_key=${apiKey}`)

      setProgress(40)

      const parsed = await response.json()

      if (!parsed?.channel?.id) {
        swal("Oops, Something went wrong! ", "Try Again Refreshing the Page.", "error")
        setProgress(100)
        return navigate('/')
      }

      setProgress(60)

      setResults(parsed)
      setChannel(parsed.channel)

      setProgress(80)

      setLatestResult(parsed.feeds[(Object.keys(parsed.feeds))[(Object.keys(parsed.feeds)).length - 1]])

      setProgress(100)

    } catch (error) {
      console.error(error)
      swal("Oops", "Something went wrong!", "error")
      setProgress(100)
      return navigate('/')
    }
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