import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';



export default function Exercicio5() {

    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setMedia] = useState(0);
    const [aprovacao, setAprovacao] = useState("true");



    function calcular() {

        let calculo = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        setMedia(calculo);
        if (calculo >= 5) {
            setAprovacao("true");
        }
        else {
            setAprovacao("false");
        }

    }



    return (
        <div className='container-e5'>
            <Cabecalho />
            <Titulos titulo="Exercício 05 - Média de notas" cor="#CB37FF" />
            <Balao descricao="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6." />


            <div className='menu'>
                <div className='secao'>
                    <h3 className="h3"> Nota 1 </h3>
                    <input type="text" className="input" value={nota1} onChange={e => setNota1(e.target.value)} /> 
                    <h3 className="h3"> Nota 2 </h3>
                    <input type="text" className="input" value={nota2} onChange={e => setNota2(e.target.value)} />
                    <h3 className="h3"> Nota 3 </h3>
                    <input type="text" className="input" value={nota3} onChange={e => setNota3(e.target.value)} />
                    <button className="button" onClick={calcular}>Executar</button>
                </div>

                <div className='resposta'>
                    <h3>A média do aluno é {media.toFixed(1)}</h3>
                    <h3>O aluno passou? {aprovacao}</h3>

                </div>

            </div>


        </div>
    )
}