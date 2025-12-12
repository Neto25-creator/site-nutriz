import "./footer.css"
import logoNutriz from "./nutrizlogobranca.png"


export default function Footer(){
    return(
        <div className="card">
        <img className="logoNutriz"src={logoNutriz}></img>
        <p>aqui vai o texto</p>
        </div>
    )
}