import React, { useEffect } from "react";
import "./Login.css"
import { useState } from "react";
import { performLogin } from "../../services"
import { successMsgs, errMsgs} from "../../base";
import { useHistory, useLocation } from 'react-router-dom';
import Movie200 from '../../assets/movie-200.jpg';
import Movie400 from '../../assets/movie-400.jpg';
import Movie500 from '../..//assets/movie-500.jpg';

const Login = (props) => {
    const {
        onLogin,
    } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [status, setStatus] = useState('');
    const history = useHistory();
    const location = useLocation();

     useEffect(() => {
        if (!username || !password) {
            setInputValid(false);
        }
        else {
            setInputValid(true);
        };
    }, [username, password])
    const getLogin = () => {
        if (isLoading) {
            return (
            <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>)
        }
        else {
            return (<span>Login</span>)
        }
    }
    const login = () => {
        if (!inputValid) {
            setStatus('username / password can not be empty');
            return;
        }
        setStatus('');
        setIsLoading(true);
        performLogin({username, password})
        .then( () => {
            setStatus( successMsgs['login-success'] );
            setIsLoading(false);
            onLogin(username);
            setTimeout(() => {afterLoginJump()}, 2000);
        })
        .catch( err => {
            setStatus(errMsgs[err.error] || err.error);
            setIsLoading(false);
        })
    }
    const afterLoginJump = () => {
        if (location.state && location.state.nextPathname && location.state.pageInfo ) {
            history.push({pathname:location.state.nextPathname, state:{id: location.state.pageInfo.id, name: location.state.pageInfo.name}})
        }
        else {
            history.push('/movie_list');
        }
       
    }
    return (
        <div className="login-wrapper">
            <div className="login-img">   
                <picture>
                    <source 
                        media="(max-width:800px)"
                        srcset={Movie200}>
                    </source>
                    <source 
                        media="(max-width:1100px)"
                        srcset={Movie400}>
                    </source>
                    <source 
                        media="(max-width:1500px)"
                        srcset={Movie500}>
                    </source>
                    <img src={Movie500} alt="This login movie img"></img>
                </picture>
            </div>
            <div className="login-box"> 
                <div className="account-body">
                    <div className="account-title">
                        Login
                    </div>
                    <div className="account-form-wrapper">
                        <div className="account-form">
                            <div className="account-form-raw">
                                <input 
                                id="username" name="username" 
                                type="text" className="account-form-input" 
                                placeholder="username" 
                                value={username} onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className="account-form-raw">
                                <input id="password" name="password" type="text" className="account-form-input" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <div className="account-form-error">
                                <span className="error-message">{status}</span>
                            </div>
                            <div className="account-form-field-submit" onClick={login}>
                                <div className={`btn-account ${isLoading ? "btn-loading" : null}`}>{getLogin()}</div>
      
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
} 

export default Login;