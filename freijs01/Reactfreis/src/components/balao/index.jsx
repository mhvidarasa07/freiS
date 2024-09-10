import "./index.scss";



export default function Balao (props) {

    return(

        <div className="container-balao">
            <div className="conteudo-balao">
                {props.descricao}
            </div>
        </div>

    )


}