import './Error.css';
import errorImg from "../../assets/404.jpg";
import { Link } from "react-router-dom";

const Error = ({errorMessage}) => {
    return (
    <div className="errorpPage-wrap">
    <div className="errorpPage-box">
        <div className="errorpPage-img">
            <img src={errorImg} alt="error"/>
        </div>
        <div className="errorpPage-tip">
            <h3>Whoops... Looks like nothing is here!</h3>
            {errorMessage}
        </div>
        <div className="errorpPage-operate">
            

            <Link to="/">
                <span className="glyphicon glyphicon-home"></span>Back to home page
            </Link>
        </div>

    </div>
</div>
)
}

export default Error;