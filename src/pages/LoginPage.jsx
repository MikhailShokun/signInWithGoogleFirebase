import React from 'react';
import '../App.css';
import {auth, provider} from '../firebase';
import {signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom"

const LoginPage = ({setIsAuth}) => {
let navigate = useNavigate();

    const signinWithGoogle = () => {
        // signInWithPopup(auth, provider).then((result) => {
        //     const credential = provider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     const user = result.user;
        //     console.log(user)
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     const email = error.customData.email;
        //     const credential = provider.credentialFromError(error);
        //     console.error(error.message)
    //         localStorage.setItem("isAuth", true)
    //         setIsAuth(true);
    //         // navigate("/")
    //         window.lacation.pathname = "/"
    //     })
        signInWithPopup(auth, provider)
            .then(({user})=>{
                console.log(user)

            })
            .catch(console.error)
    }

    const monitorAuthState = async () =>{
        onAuthStateChanged(auth, (user) =>{
            if (user){
                console.log("user")
            } else {
                console.log('not user')
            }
        })
    }

    return (
        <div>
            {/*{user?<h3>{user.email}</h3>: ""}*/}
            <h2>Sign In With Google to Continue</h2>

            <button onClick={signinWithGoogle}>Sign in with Google</button>
        </div>

    );
};

export default LoginPage;

// className={"login-with-google-btn"}