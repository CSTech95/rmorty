import Login from "./Login";
import { Search } from "./Search";
import Signup from "./Signup";

export default function Home() {
    return (
        <div>
            <Signup/>
            <Login/>
            <Search/>
        </div>
    )
}
