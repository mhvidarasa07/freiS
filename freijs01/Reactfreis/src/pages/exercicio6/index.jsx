import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';



export default function Exercicio6() {

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcular() {
        let conta = ((Number(salario) * (Number(bonus) / 100)) + Number(salario)) - Number(desconto)
        setResultado(conta)
        setSalario(0)
        setBonus(0)
        setDesconto(0)
    }

    function enter(e) {
        if (e.key == 'Enter') {
            calcular()
        }
    }

    return (
        <div exercicio6>
            <Cabecalho />
            <Titulos titulo="Exercício 06 - Salário líquido" cor="#FF5B37" />
            <Balao descricao="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais" />

            <div className='menu'>
                <div className='secao'>
                    <h3 className='h3'>Salário base</h3>
                    <input type="text" className='input' value={salario} onChange={e => setSalario(e.target.value)} onKeyUp={enter} />
                    <h3 className='h3'>Bônus mensal em porcentagem</h3>
                    <input type="text" className='input' value={bonus} onKeyUp={enter} onChange={e => setBonus(e.target.value)} />
                    <h3 className='h3'>Total de descontos</h3>
                    <input type="text" className='input' value={desconto} onKeyUp={enter} onChange={e => setDesconto(e.target.value)} />
                    <button className='button' onClick={calcular}>Executar</button>
                </div>
                <div className='resposta'>
                    <h3>Seu salário líquido é de R$ {resultado}</h3>
                </div>
            </div>
        </div>
    )
}