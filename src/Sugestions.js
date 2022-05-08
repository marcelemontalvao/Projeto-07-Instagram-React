function Sugestion(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.SugestionObject.image} />
                <div class="texto">
                    <div class="nome">{props.SugestionObject.name}</div>
                    <div class="razao">{props.SugestionObject.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}


export default function Sugestions() {

    const sugestionsObject = [
        {image: "assets/img/bad.vibes.memes.svg" , name:"bad.vibes.memes", reason:"Segue você" }, 
        {image: "assets/img/chibirdart.svg" , name:"chibirdart", reason:"Segue você" },     
        {image: "assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar" , reason:"Novo no Instagram" },        
        {image: "assets/img/adorable_animals.svg", name:"adorable_animals" , reason:"Segue você" },        
        {image:"assets/img/smallcutecats.svg", name:"smallcutecats" , reason:"Segue você" }
    ]

    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestionsObject.map(sugestion => <Sugestion SugestionObject={sugestion}/>)}
            
        </div>
    )
}