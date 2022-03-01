import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {authentication} from "../../firebase-config"
import { setCookies } from 'cookies-next';

let handleLogin = (loginData) => {
    const data = loginData._tokenResponse;
    setCookies('email', data.email);
    setCookies('photoUrl', data.photoUrl);
    window.location.replace('/');
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then((res) => {
        handleLogin(res);
    }).catch((err) => {
        console.log(err);
    })
};

export default signInWithGoogle;