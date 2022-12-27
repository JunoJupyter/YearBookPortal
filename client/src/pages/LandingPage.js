import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <Link to="/home">Home Page</Link>
            <br/>
            <Link to="/MyProfile">My Profile</Link>
        </div>
    );
}

export default LandingPage;