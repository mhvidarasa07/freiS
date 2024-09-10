import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';




export default function Exercicio7() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resultado, setResultado] = useState('')

    function verificar () {
        if ((cor1 == 'azul' || cor1 == 'vermelho' || cor1 == 'amarelo') && (cor2 == 'azul' || cor2 == 'vermelho' || cor2 == 'amarelo') ) {
            setResultado('true')
            
        }
        else {
            setResultado('false')
        }
    }

    function enter(e) {
        if (e.key == 'Enter') {
            verificar()
        }
    }


    return (
        <div className='exercicio7'>
            <Cabecalho />
            <Titulos titulo="Exercício 07 - Cores primárias" cor="#37FFAB" />
            <Balao descricao="Implementar um programa em javascript para verificar se duas cores são primárias" />


            <div className='menu'>
                <div className='secao'>
                    <h3 className='h3'>Cor1</h3>
                    <input type="text" className='input' value={cor1} onKeyUp={enter} onChange={e => setCor1(e.target.value)} />
                    <h3 className='h3'>Cor2</h3>
                    <input type="text" className='input' onKeyUp={enter} value={cor2} onChange={e => setCor2(e.target.value)} />
                    <button className='button' onClick={verificar}>Executar</button>
                </div>
                <div className='resposta'>
                    <h3>As duas cores são primárias? {resultado}</h3>
                </div>
            </div>
        </div>
    )
}