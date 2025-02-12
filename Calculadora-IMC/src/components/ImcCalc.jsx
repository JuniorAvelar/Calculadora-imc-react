import { useState } from "react"

import "./ImcCalc.css"
import Button from "./Button"

    const ImcCalc = ({ calcImc }) => {
        const [altura , setAltura] = useState("")
        const [peso , setPeso] = useState("")

    
    const clearForm = (e) => {
        e.preventDefault()
        setAltura("")
        setPeso("")
    }

    const validDigits = (text) => {
        // validação para o o input receba apenas numéros com virgulas
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValues = validDigits(e.target.value)

        setAltura(updateValues)
    }

    const handleWeightChange = (e) => {
        const updateValues = validDigits(e.target.value)

        setPeso(updateValues)
    }


    // console.log(altura , peso)
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="altura" placeholder="Exemplo: 1.70" onChange={(e) => handleHeightChange(e)} value={altura}  />
                </div>
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="peso" placeholder="Exemplo: 90.5" onChange={(e) => handleWeightChange(e)} value={peso}/>
                </div>
            </div>
            <div className="action-control">
                <Button id = "calc-btn" text="Calcular" action={(e) => calcImc(e , altura , peso)} />
                <Button id = "clear-btn" text="Limpar" action={clearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImcCalc