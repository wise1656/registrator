import {authWithGoogle, getCurrentUser} from "../firebase/login.db";

export function Login() {
    return <div>
        <a className="border border-black rounded cursor-pointer p-1 m-3 inline-block"
           onClick={(() => authWithGoogle())}>
            Login with Google
        </a>
        <span>{getCurrentUser()}</span>
    </div>
}