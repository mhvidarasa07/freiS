import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import { useState } from "react";
import Balao from "../../components/balao";

export default function Exerci3(props) {

    const [qtdPequeno, setQtdPequeno] = useState(0)
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [resultado, setResultado] = useState(0)

    function total() {
        let valorP = qtdPequeno * 13.5;
        let valorM = qtdMedio * 15;
        let valorG = qtdGrande * 17.5;

        let totalPagar = valorP + valorM + valorG
        setResultado(totalPagar)
    }


    return (

        <div>


            <Cabecalho />
            <Titulos titulo="Exercício 03 - Valor por quantidade" cor="#37B7FF" />
            <Balao descricao="Implementar uImplementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"/>

            <div className="menu">
            <div className="secao">
            <h3 className="h3"> Quantidade Açai Pequeno </h3>
                    <input type="text" className="input" value={qtdPequeno} onChange={e => setQtdPequeno(e.target.value)} />
                    <h3 className="h3"> Quantidade Açai Médio </h3>
                    <input type="text" className="input" value={qtdMedio} onChange={e => setQtdMedio(e.target.value)} />
                    <h3 className="h3"> Quantidade Açai Grande </h3>
                    <input type="text" className="input" value={qtdGrande} onChange={e => setQtdGrande(e.target.value)} />
                    <button className="button" onClick={total}>Executar</button>

                </div>
                <div className="resposta">
                    <h3>Resultado: O Total é {resultado.toFixed(2)} R$</h3>
                </div>
        </div>
</div>

    )
}