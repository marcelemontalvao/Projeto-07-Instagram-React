function Icon(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function Icons() {
    return (
        <div> 
            <div class="icones">
                <Icon name="paper-plane-outline" />
                <Icon name="compass-outline" />
                <Icon name="heart-outline" />
                <Icon name="person-outline" />
            </div>

            <div class="icones-mobile">
                <Icon name="paper-plane-outline" />
            </div>
        </div>
    )
}