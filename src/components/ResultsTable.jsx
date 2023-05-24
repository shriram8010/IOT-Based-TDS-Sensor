import React, { useContext } from 'react'
import { ResultsContext } from '../context/ResultsState'
import { formatDate } from '../utils/formatFunctions'

const ResultsTable = () => {
  const { results } = useContext(ResultsContext)

  return (
    <table className='w-full my-5 table-auto text-center border-2 border-lime-300'>
      <tr className='border-2 border-lime-300'>
        <th className='border-r-2 border-lime-300'>ID</th>
        <th className='border-r-2 border-lime-300'>Result</th>
        <th>Time</th>
      </tr>
      {
        results?.feeds.map((result, index) => {
          return <tr key={index} className='border border-lime-300'>
            <th className='border-r-2 border-lime-300 pb-2'>{result.entry_id}</th>
            <td className='border-r-2 border-lime-300 pb-2'>{result.field1}</td>
            <td>{formatDate(result.created_at)}</td>
          </tr>
        })
      }
    </table>
  )
}

export default ResultsTable