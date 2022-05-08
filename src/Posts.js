function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.postObject.image} />
                   {props.postObject.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postObject.image2} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.postObject.image3} />
                        <div class="texto">Curtido por <strong>{props.postObject.user2}</strong> e <strong>outras {props.postObject.number} pessoas</strong></div>
                </div>
            </div>
        </div>
);
}

export default function Posts() {
    const objectPosts = [
        {image:"assets/img/meowed.svg" , user:"meowed" , image2:"assets/img/gato-telefone.svg" , image3:"assets/img/respondeai.svg" , user2:"respondeai" , number:"101.523"},
        {image:"assets/img/barked.svg", user:"barked" , image2:"assets/img/dog.svg" , image3:"assets/img/adorable_animals.svg" , user2:"adorable_animals" , number:"99.159"}
    ]
    return (
        <div class="posts">
            {objectPosts.map(post => <Post postObject={post}/>)}
        </div>
    )
}