interface CantadaCardProps {
    id: string
    titulo: string
    cantada: string
    imagem: string
}

export function CantadaCard(props: CantadaCardProps) {
    return (
        <div className="cantada-container">

            <div className="card-text">
                <h2>{props.titulo}</h2>
                <p>{props.cantada}</p>
            </div>

            <div className="card-image">
                 <img src={props.imagem} alt="Moskitao" />
            </div>

        </div>
    )
    
}