import Balao from "../../components/balao";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import { useState } from "react";
import "./index.scss";




export default function Exercicio2(props) {

    const [valor, setValor] = useState(0);
    const [num, setNum] = useState(0);

    function calculargrama() {
        let calculo = num * 1000;
        setValor(calculo);
    }

    return (


        <div className="container-e2">

            <Cabecalho />
            <Titulos titulo="Exercício 02 - Converter Kg/gramas" cor="#B3FF37" />
            <Balao descricao="Implementar um programa em Javascript para converter kilos em gramas." />

            <div className="menu">
                <div className="secao e2">

                    <h3 className="h3">Valor em Kilos</h3>
                    <input type="text" className="input" value={num} onChange={e => setNum(e.target.value)} />
                    <button className="button" onClick={calculargrama} >Executar</button>

                </div>

                <div className="resposta">
                    <h3>Resultado: O total é {valor} gramas</h3>
                </div>
            </div>
        </div>
    )


}