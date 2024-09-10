import "./index.scss";

export default function Card(props) {
    return (
        <div className="card">
            <div className="conteudo">
                <div className="cor"></div>
                <div className="titulo">
                    {props.titulo}
                </div>
                <div className="descricao">
                    {props.descricao}
                </div>
            </div>
        </div>
    )
}