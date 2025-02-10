import "./ImcCalc.css"
const ImcCalc = () => {
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="altura" placeholder="Exemplo: 1.70" />
                </div>
                <div className="form-control">
                    <label htmlFor="altura"> Altura:</label>
                    <input type="text" name="peso" placeholder="Exemplo: 90.5" />
                </div>
            </div>
            <div className="actoin-control">
                <button>Calcular</button>
                <button>Limpar</button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc