import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';




export default function Exercicio9() {

    const [peso, setPeso] = useState(0)
    const [valor, setValor] = useState(0)

    function verificar () {
        if (peso < 1000) {
            let calc = peso * 0.035
            setValor(calc)
        }
        else{
            let calc = peso * 0.03
            setValor(calc)
        }
    }

    function enter(e) {
        if (e.key == 'Enter') {
            verificar()
        }
    }

    return (
        <div className='exercicio9'>
            <Cabecalho />
            <Titulos titulo="Exercício 09 - Sorveteria" cor="#D0D0D0" />
            <Balao descricao="Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos." />

            <div className='menu'>
                <div className='secao'>
                    <h3 className='h3'>Total de gramas</h3>
                    <input type="text" className='input' onKeyUp={enter} value={peso} onChange={e => setPeso(e.target.value)}/>
                    <button className='button' onClick={verificar}>Executar</button>
                </div>
                <div className='reposta'>
                    <h3 className='sit'>O total a pagar é R$ {valor.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    )
}