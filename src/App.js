import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";


const App = () => {
    const [isAuth, setIsAuth] = useState(false);

    // const signUserOut = () => {
    //     signOut(auth).then(()=> {
    //         localStorage.clear()
    //         setIsAuth(false)
    //         window.lacation.pathname = "/login"
    //     })
    // }

    return (
        <div className={'App'}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/createpost">Create Post</Link>
                {!isAuth ? <Link to="/login"> Login </Link>
                    : <button>Logout</button>
                }

            </nav>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/createpost" element={<CreatePost/>}/>
                <Route path="/*" element={<LoginPage setIsAuth={setIsAuth}/>}/>
            </Routes>
        </div>
    );
};
export default App;
