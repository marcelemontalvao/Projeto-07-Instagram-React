function Infos(props){
    return (
        <div class={props.class}>
            {props.info}
        </div>
    )
}

export default function Links() {
    return (
        <div>
            <Infos class="links" info="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma" />
            <Infos class="copyright" info="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>   
    )
}