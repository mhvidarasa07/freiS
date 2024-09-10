import Balao from "../../components/balao";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import { useState } from "react";
import "./index.scss";

export default function Exercicio1() {

    const [valor, setValor] = useState(0);
    const [cupom, setCupom] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calcular () {
        let sub = valor - cupom;
        setResultado(sub)
        setCupom(0);
        setValor(0);
    }

    function enter(e) {
        if (e.key == 'Enter') {
            calcular()
        }
    }

    return (
        <div>

            <Cabecalho />
            <Titulos titulo="Exercicio 01 - Cupom de desconto" cor="#FFCE37"/>
            <Balao descricao="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto."/>

            <div className="menu">
                <div className="secao">
                    <h3 className="h3" >Informe o valor do pedido</h3>
                    <input type="text" className="input" value={valor} onKeyUp={enter} onChange={e => setValor(e.target.value)}/>
                    <h3 className="h3">Informe o valor do cupom</h3>
                    <input type="text" className="input" value={cupom} onKeyUp={enter} onChange={e => setCupom(e.target.value)}/>
                    <button className="button" onClick={calcular}>Executar</button>
                </div>

            <div className="resposta">
                <h3>Resultado: O total é R$ {resultado}</h3>
            </div>

            </div>

        </div>

    )

}