import User from "./User"
import Sugestions from "./Sugestions"
import Links from "./Links"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestions />
            <Links />
        </div>
    )
}