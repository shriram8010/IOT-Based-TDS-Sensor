import React, { useRef, useState, useEffect } from 'react'
import { RiSettings3Fill } from 'react-icons/ri'

const Results = () => {
  const date = new Date()

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"]

  const [settings, setSettings] = useState(false)
  const [optionsData, setOptionsData] = useState({
    unit: 'ppm', timeFormat: '12hr'
  })

  const optionsRef = useRef()

  const toggleSettings = () => {
    settings ? setSettings(false) : setSettings(true)
  }

  const addLeadingCharToDateStr = (num, char = '0') => num > 9 ? num : char + num

  const handleOptionsChange = (e) => {
    setOptionsData({ ...optionsData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
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

  return (
    <div className='p-2'>
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
                <input type="radio" value={'mgpL'} name='unit' onChange={handleOptionsChange} />
                <span>Milligrams per Litre (mg/L)</span>
              </div>

              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'mcgpL'} name='unit' onChange={handleOptionsChange} />
                <span>Micrograms per Litre (µg/L)</span>
              </div>

              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'gpg'} name='unit' onChange={handleOptionsChange} />
                <span>Grains per Gallon (gpg)</span>
              </div>

              <div className="input-group flex justify-start items-center space-x-2">
                <input type="radio" value={'ec'} name='unit' onChange={handleOptionsChange} />
                <span>Electrical Conductivity (EC)</span>
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
          <div className="value w-1/2">
            <span className='text-[6.5rem] text-lime-100'>
              326
            </span>
          </div>

          <div className="info px-2 text-lg w-1/2 flex flex-col justify-center items-start">
            <p><span className='text-lime-300 font-medium'>Unit:</span> {optionsData.unit}</p>
            <p><span className='text-lime-300 font-medium'>Date:</span> {months[date.getUTCMonth()]} {date.getUTCDate()}, {date.getUTCFullYear()}</p>
            <p><span className='text-lime-300 font-medium'>Day:</span> {days[date.getUTCDay()]}</p>
            {
              optionsData.timeFormat === '12hr' ?
                <p><span className='text-lime-300 font-medium'>Time:</span> {date.getHours() > 12 ? (date.getHours() - 12 > 9 ? date.getHours() - 12 : "0" + (date.getHours() - 12)) : date.getHours()}:{date.getMinutes()}:{date.getSeconds()} {date.getHours() > 12 ? 'PM' : 'AM'}</p> :
                <p><span className='text-lime-300 font-medium'>Time:</span> {date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results