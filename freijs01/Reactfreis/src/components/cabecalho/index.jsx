import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho() {
    return (
        <div className='cabecalho'>

            <div className='logo'>
                <img src="./logo.png" alt="" />
                <h3>React FreiS</h3>
            </div>

            <div className='links'>
                <Link to= '/' className='link' > Inicio </Link>
                <Link to= '/sobre' className='link' > Sobre </Link>
            </div>

        </div>

    )

}