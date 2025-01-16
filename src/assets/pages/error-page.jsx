import { Link } from "react-router-dom";
import HomePage from "./home-page";

function ErrorPage() {
    return(
        <section style={{backgroundColor: 'black'}}>
            <h2>Ups, No encontramos tu ruta</h2>
            <Link to={<HomePage />}/>
        </section>
    )
}

export default ErrorPage