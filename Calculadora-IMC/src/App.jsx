
import data from './data/data'
import { useState } from 'react'
import ImcCalc from './components/ImcCalc'

import './App.css'
import ImcTable from "./components/ImcTable"


function App() {

  // função passada por prop, e sendo executada no button
  const calcImc = (e , altura , peso) => {
    e.preventDefault()

    if(!altura || !peso) return

      // trasformo a string em number , e troco a vigula pelo ponto
      const alturaFloat = +altura.replace("," , ".")
      const pesoFloat = +peso.replace("," , ".")

      const imcResult = (pesoFloat / (alturaFloat * alturaFloat )).toFixed(1)

      setImc(imcResult)

      data.forEach(item => {
        if(imcResult >= item.min && imcResult <= item.max){
          setInfo(item.info)
          setInfoClass(item.infoClass)
        }
      });

      if(!info) return

  }

  const resetCalc = (e) => {
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfoClass("")
    setImc("")

  }

  const [imc , setImc] = useState("")
  const [info , setInfo] = useState("")
  const [infoClass , setInfoClass] = useState("")
 
  return (
   <div className='container'>
    {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
   </div>
  )
}

export default App
