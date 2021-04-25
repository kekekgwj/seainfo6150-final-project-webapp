import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import logOut from "../../assets/log-out.png"
import logIn from "../../assets/login-icon.png";
import userIcon from "../../assets/login-user.png";
import { useHistory } from 'react-router-dom';

const Nav = ({username, onLogOut}) => {
    const loggedEle = (                
        <div>
            <div onClick={() => toHomePage()}>
                <span className="nav-user-icon">
                    <img src={userIcon} alt="user-icon"/>
                </span>
                <span>
                    {username}
                </span> 
            </div>
            <div className="nav-log-out" onClick={onLogOut}>
                <span>Log out</span>
                <span className="nav-user-icon">
                    <img src={logOut} alt="log out"/>
                </span>
            </div> 
        </div>);
    const toLoginEle = (
        <div onClick={() => toLoginPage()}>
            <span className="nav-user-icon"> 
                <img src={logIn} alt="login"/>
            </span>
            <span>Log In</span>
        </div>
    ); 

    const history = useHistory();
    const toHomePage = () => {
        history.push('/home');
    }
    const toLoginPage = () => {
        history.push('/login')
    }
    return (
        <div className="global-nav">
            <div className="global-nav-items">
                <ul>
                    <li>
                        <Link to="/movie_list">Movies</Link>
                    </li>
                </ul>
            </div>
            <div className="top-nav-user">
                { username ? loggedEle : toLoginEle }
            </div>
        </div>
     )
}

export default Nav;