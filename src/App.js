import { useEffect, useState } from 'react'
import './App.css'
import Display from './Display'
import Table from './Table'
export default function App() {

  const [value, setValue] = useState('')

  const getvalue = (v = 0) => {
    setValue(v)
  }


  return (
    <main className=' mx-auto shadow'>
      <h4>Calculator</h4>
      <div className=' container-fluid p-3 calculator'>
        <Display value={value} />
        <Table get={getvalue} />



      </div>
    </main>
  )
}
