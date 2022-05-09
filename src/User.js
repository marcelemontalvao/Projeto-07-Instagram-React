function ComponentUser(props) {
    return (
        <div class="usuario">
            <img src={props.userObject.image} />
            <div class="texto">
            <strong>{props.userObject.user}</strong>
                <p>{props.userObject.name}</p>
            </div>
        </div>
    )
}

export default function User() {
   const objectUser = [
    {image: "assets/img/catanacomics.svg" , user:"catanacomics" , name:"Catana"}
   ];

    return (
        <>
            {objectUser.map(user => <ComponentUser userObject={user} />)}
        </>
    );
}
