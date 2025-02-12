import "./Button.css"

const Button = ({id , text , action}) => {
    // executa a função que foi passada como parâmetro
    const handleAction = (e) => {  
        action(e)
    }
  return (
    <div>
        <button id={id} onClick={handleAction}>{text}</button>
    </div>
  )
}

export default Button