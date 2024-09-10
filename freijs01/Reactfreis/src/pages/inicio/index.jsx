import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Card from '../../components/cards';
import { Link } from 'react-router-dom';


export default function Inicio() {
    return (

        <div className='inicio'>
            <Cabecalho />

            <div className='treino'>
                <h3>Escolha um treino...</h3>
            </div>

            <div className='exercicios'>

                <div className='amarelo'><Link to={"/exercicio1"} className='link'><Card titulo="Cupom de desconto" descricao="Exercício 1" /></Link></div>

                <div className='verde'><Link to="/exercicio2" className='link'> <Card titulo="Converter Kg/gramas" descricao="Exercicio2" /> </Link></div>

                <div className='azulclaro'><Link to="/exercicio3" className='link'><Card titulo="Valor total por quantidade" descricao="Exercicio 3" ></Card></Link></div>

                <div className='azul'><Link to="/exercicio4" className='link'><Card titulo="Leitura do livro" descricao="Exercicio 4" ></Card></Link></div>

                <div className='lilas'><Link to="/exercicio5" className='link'><Card titulo="Média de notas" descricao="Exercicio 5" ></Card></Link></div>

                <div className='laranja'><Link to="/exercicio6" className='link'><Card titulo="Salário líquido" descricao="Exercicio 6" ></Card></Link></div>

                <div className='verdeagua'><Link to="/exercicio7" className='link'><Card titulo="Cores primárias" descricao="Exercicio 7" ></Card></Link></div>

                <div className='preto'><Link to="/exercicio8" className='link'><Card titulo="Temperatura" descricao="Exercicio 8" ></Card></Link></div>

                <div className='cinza'><Link to="/exercicio9" className='link'><Card titulo="Sorveteria" descricao="Exercicio 9" ></Card></Link></div>

                <div className='marrom'><Link to="/exercicio10" className='link'><Card titulo="Cálculo de IMC com histórico" descricao="Exercicio 10" ></Card></Link></div>

                <div className='roxo'><Link to="/exercicio11" className='link'><Card titulo="Tabuada" descricao="Exercicio 11" ></Card></Link></div>

                <div className='amareloescuro'><Link to="/exercicio12" className='link'><Card titulo="Comparador de pessoas" descricao="Exercicio 12" ></Card></Link></div>

            </div>
        </div>

    )
}