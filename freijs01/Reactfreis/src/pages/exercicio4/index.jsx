import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import { useState } from "react";
import Balao from "../../components/balao";


export default function Exercicio4(props) {

    const [texto, setTexto] = useState("");
    const [paginas, setPaginas] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [horas, setHoras] = useState(0);

    function resultado() {
        let calculo = paginas * tempo;
        let conversao = calculo / 3600;

        setHoras(conversao);
    }



    return (

        <div>

            <Cabecalho />
            <Titulos titulo="Exercício 04 - Leitura de livro" cor="#37B7FF" />
            <Balao descricao="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"/>

            <div className="menu">
                <div className="secao">

                    <h3 className="h3"> Nome do livro </h3>
                    <input type="text" className="input" value={texto} onChange={e => setTexto(e.target.value)} />
                    <h3 className="h3"> Total de páginas </h3>
                    <input type="text" className="input" value={paginas} onChange={e => setPaginas(e.target.value)} />
                    <h3 className="h3"> Tempo em segundos de leitura </h3>
                    <input type="text" className="input" value={tempo} onChange={e => setTempo(e.target.value)} />
                    <button className="button" onClick={resultado}>Executar</button>

                </div>

                <div className="resposta">
                    <h3>Você lerá {texto} em {horas.toFixed(2)} horas</h3>
                </div>

            </div>

        </div>


    )



}