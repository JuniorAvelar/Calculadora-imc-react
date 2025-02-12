import { useState } from "react"

import "./ImcCalc.css"
import Button from "./Button"

const ImcCalc = () => {
    const [altura , setAltura] = useState("")
    const [peso , setPeso] = useState("")


    const clearForm = (e) => {
        e.preventDefault()
        setAltura("")
        setPeso("")
    }
    console.log(altura , peso)
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="altura" placeholder="Exemplo: 1.70" onChange={(e) => setAltura(e.target.value)} value={altura} />
                </div>
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="peso" placeholder="Exemplo: 90.5" onChange={(e) => setPeso(e.target.value)} value={peso}/>
                </div>
            </div>
            <div className="action-control">
                <Button id = "calc-btn" text="Calcular" />
                <Button id = "clear-btn" text="Limpar" action={clearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImcCalc