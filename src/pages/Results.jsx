import React, { useRef, useState, useEffect, useContext } from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { ResultsContext } from '../context/ResultsState'
import { formatDate, getDate, getDay, getTime } from '../utils/formatFunctions'
import { BsClockHistory } from 'react-icons/bs'
import { RiRefreshLine } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'

const Results = () => {
  const location = useLocation()

  const { latestResult, channel, getResults } = useContext(ResultsContext)

  const [settings, setSettings] = useState(false)
  const [optionsData, setOptionsData] = useState({
    unit: 'ppm', timeFormat: '12hr'
  })
  const [valueColor, setValueColor] = useState()
  const [unitMultiplier, setUnitMultiplier] = useState()

  const optionsRef = useRef()

  const toggleSettings = () => {
    settings ? setSettings(false) : setSettings(true)
  }

  const handleOptionsChange = (e) => {
    setOptionsData({ ...optionsData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    // change color according to result
    if (latestResult?.field1) {
      if (latestResult.field1 <= 50) {
        setValueColor('text-white')
      } else if (latestResult.field > 50 && latestResult.field <= 150) {
        setValueColor('text-lime-200')
      } else if (latestResult.field > 150 && latestResult.field <= 300) {
        setValueColor('text-amber-400')
      } else if (latestResult.field > 300 && latestResult.field <= 500) {
        setValueColor('text-red-400')
      } else if (latestResult.field > 500) {
        setValueColor('text-red-600')
      }
    }

    if (optionsData.unit === 'ppm') {
      setUnitMultiplier(1)
    } else if (optionsData.unit === 'mg/L') {
      setUnitMultiplier(1)
    } else if (optionsData.unit === 'µg/L') {
      setUnitMultiplier(1000)
    } else if (optionsData.unit === 'g/g') {
      setUnitMultiplier(0.058)
    }

    const handleClickOutsideElement = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setSettings(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutsideElement)

    setSettings(false)

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideElement)
    }
  }, [optionsData])

  useEffect(() => {
    getResults()
  }, [])


  if (!latestResult) return

  return (
    <div className='p-2 max-w-[100vw] max-h-[110vh] overflow-x-hidden'>
      <h1 className='text-center text-4xl text-lime-400 font-medium'>YOUR RESULTS</h1>

      <div className={`my-5 relative`}>
        <div className={`options flex justify-end items-center`} ref={optionsRef}>
          <RiSettings3Fill className={`text-2xl cursor-pointer hover:scale-125 duration-500 ${settings && 'text-lime-400 rotate-[270deg]'}`} title='Options' onClick={toggleSettings} />

          <div className={`menu flex justify-between w-full border-2 border-lime-300 bg-black p-5 rounded-lg absolute -bottom-12 ${!settings && 'translate-x-[100vw]'} duration-300 ${settings && 'darken-box-shadow'}`}>
            <div className="units">
              <label htmlFor='unit' className='text-lg font-semibold text-lime-300'>Unit</label>
              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'ppm'} name='unit' onChange={handleOptionsChange} defaultChecked />
                <span>Parts per Million (PPM)</span>
              </div>
              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'mg/L'} name='unit' onChange={handleOptionsChange} />
                <span>Milligrams per Litre (mg/L)</span>
              </div>

              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'µg/L'} name='unit' onChange={handleOptionsChange} />
                <span>Micrograms per Litre (µg/L)</span>
              </div>

              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'g/g'} name='unit' onChange={handleOptionsChange} />
                <span>Grains per Gallon (g/g)</span>
              </div>
            </div>

            <div className="time">
              <label htmlFor='timeFormat' className='text-lg font-semibold text-lime-300'>Time</label>
              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'12hr'} name='timeFormat' onChange={handleOptionsChange} defaultChecked />
                <span>12 hour</span>
              </div>
              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'24hr'} name='timeFormat' onChange={handleOptionsChange} />
                <span>24 hour</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className="value w-1/2 flex justify-center items-center">
            <span className={`text-[400%] ${valueColor}  text-center`}>
              {latestResult.field1 * unitMultiplier}
            </span>
          </div>

          <div className="info px-2 text-lg w-1/2 flex flex-col justify-center items-start">
            <p><span className='text-lime-300 font-medium'>Unit:</span> {optionsData.unit}</p>
            <p><span className='text-lime-300 font-medium'>Date:</span> {getDate(latestResult.created_at)}</p>
            <p><span className='text-lime-300 font-medium'>Day:</span> {getDay(latestResult.created_at)}</p>
            <p><span className='text-lime-300 font-medium'>Time:</span> {getTime(latestResult.created_at, optionsData.timeFormat)}</p>
          </div>
        </div>

        <div className='flex justify-between items-center mt-5'>
          <Link to={'/history'} className='w-1/2 px-2 mx-auto group'>
            <button className='flex justify-evenly items-center w-full border-2 border-lime-300 bg-lime-300 text-black hover:bg-transparent hover:text-lime-300 active:bg-transparent active:text-lime-300 py-2 rounded-md duration-150'>
              History <BsClockHistory className='group-hover:animate-spin' />
            </button>
          </Link>

          <button className='flex justify-evenly items-center w-1/2 border-2 border-lime-300 bg-lime-300 text-black hover:bg-transparent hover:text-lime-300 active:bg-transparent active:text-lime-300 py-2 rounded-md duration-150 group' onClick={getResults}>
            Refresh <RiRefreshLine className='group-hover:animate-spin' />
          </button>
        </div>
      </div>

      <div className='bg-lime-300 w-full h-[1px]'></div>

      <div className='p-2'>
        <h2 className='text-center text-2xl text-lime-400 font-medium'>CHANNEL INFO</h2>

        <div className='my-5'>
          <p><span className='text-lime-300 font-medium'>Name:</span> {channel.name}</p>
          <p><span className='text-lime-300 font-medium'>ID:</span> {channel.id}</p>
          <p><span className='text-lime-300 font-medium'>Last Entry ID:</span> {channel.last_entry_id}</p>
          <p><span className='text-lime-300 font-medium'>Update At:</span> {formatDate(channel.updated_at, optionsData.timeFormat)}</p>
        </div>
      </div>
    </div>
  )
}

export default Results