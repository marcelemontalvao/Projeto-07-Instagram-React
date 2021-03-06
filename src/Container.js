import Icons from "./Icons"

export default function Container() {
    return (
        <div class="container">
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>

            <div class="logo-mobile">
                 <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div class="instagram-mobile">
                <img src="assets/img/logo.png" />
            </div>
        
            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

           <Icons />
        </div>
    )
}
