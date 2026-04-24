import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/actions/userActions';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LogoutHandler = async () => {
        try {
            dispatch(logoutUser());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            onClick={LogoutHandler}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
            Logout
        </button>
    );
};

export default LogoutButton;