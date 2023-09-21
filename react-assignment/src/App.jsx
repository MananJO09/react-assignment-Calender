import { useState } from 'react'
import Header from './compnents/header'
import Timezone from './compnents/timezone'
import Calender from './compnents/calender'

function App() {
  const [date, setdate] = useState(() => new Date())



  return (
    <>
      <Header date={date} setdate={setdate} />
      <Timezone />
      <Calender date={date} />
    </>
  )
}

export default App
