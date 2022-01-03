import Login from "./Login";
import { Search } from "./Search";
import Signup from "./Signup";

export default function Home() {
    return (
        <div className="flex space-x-4 items-center content-center">
            <Signup/>
            <Login/>
        </div>
    )
}
