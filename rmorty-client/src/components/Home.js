import Login from "./Login";
import { Search } from "./Search";
import Signup from "./Signup";

export default function Home() {
    return (
        <div className="mt-20 grid gap-4 grid-cols-2 justify-items-center content-center">
            <div>
            <Signup/>
            </div>
            <div>
            <Login/>
            </div>
        </div>
    )
}
