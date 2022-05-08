function Icon(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function BackgroundMobile() {

    return (
        <div class="fundo-mobile">
            <Icon name="home"/>
            <Icon name="search-outline"/>
            <Icon name="add-circle-outline"/>
            <Icon name="heart-outline"/>
            <Icon name="person-outline"/> 
      </div>
)
}