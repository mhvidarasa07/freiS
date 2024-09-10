import Cabecalho from '../../components/cabecalho';
import './index.scss';




export default function Sobre() {
    return (
        <div>
            <Cabecalho />

            <div className='sobre'>

                <h3 className='titulo'>Sobre</h3>
                <p className='texto'>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.
                <br />
                <br />
                Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.
                Estamos ansiosos para ver seu progresso e sucesso!</p>
                <div className='img'>
                <img src="./logo.png" alt="" />
                </div>
            </div>


        </div>
    )
}