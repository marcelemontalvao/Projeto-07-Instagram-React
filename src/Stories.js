function Story(props) {
    return (
        <div class="story">
                <div class={props.class}>
                    <img src={props.storyObject.image} />
                </div>
                <div class="usuario">{props.storyObject.user}</div>
            </div>
    )
}

export default function Stories() {

    const objectStories = [
        {
            image: "assets/img/9gag.svg" , user:"9gag"
        }, 
        {
            image: "assets/img/meowed.svg", user: "meowed"
        },
        {
            image: "assets/img/barked.svg", user: "barked" 
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" 
        },
        {
            image: "assets/img/wawawicomics.svg", user: "wawawicomics" 
        },
        {
            image: "assets/img/respondeai.svg", user: "respondeai" 
        },
        {
            image: "assets/img/filomoderna.svg", user: "filomoderna" 
        },
        {
            image: "assets/img/memeriagourmet.svg", user: "memeriagourmet" 
        },
     ]

    return (
        <div class="stories">
            {objectStories.map(story => <Story storyObject={story} /> )}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

