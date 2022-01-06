import Login from "./Login";
import { Search } from "./Search";
import Signup from "./Signup";

export default function Home() {
    return (
        <div>     
        <div className="mt-20 grid gap-4 grid-cols-2 justify-items-center content-center">
            <div>
            <Signup/>
            </div>
            <div>
            <Login/>
            </div>
        </div>
        <br/>
            <div className="flex justify-center text-center text-white m-4 p-3 text-3xl shadow-lg shadow-indigo-500/50 bg-black">
                <h1>Sign up or Log in to view characters you've save. 
                    After you've logged in, refresh the page and head over to your dashboard.</h1>
            </div>
        </div>
    )
}
