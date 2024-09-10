import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';




export default function Exercicio11() {

    const [numero, setNumero] = useState(0);
    const [tabuada, setTabuada] = useState([]);

    function calcularTabuada() {
        let resultado = [];

        for (let i = 1; i <= 10; i++) {
            const calculoMontado = `${numero} x ${i} = ${numero * i}`;

            resultado.push(calculoMontado);
        }

        setTabuada(resultado);
    }



    return (
        <div className='exercicio11'>
            <Cabecalho />
            <Titulos titulo="Exercício 11 - Tabuada" />
            <Balao descricao="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”." />

            <div className='menu'>
                <div className='secao'>
                    <h3 className='h3'>Tabuada do:</h3>
                    <input type="text" className='input' value={numero} onChange={e => setNumero(e.target.value)} />
                    <button className='button' onClick={calcularTabuada}>Executar</button>
                </div>
                <div className='resposta-11'>
                    {tabuada.map((value) => (
                        <p className='tabuada'>{value}</p>
                    ))}
                </div>

            </div>

        </div>
    )



}