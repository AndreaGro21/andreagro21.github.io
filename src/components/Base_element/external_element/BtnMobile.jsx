import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BtnMobile() {
    const navigate = useNavigate();
    const location = useLocation();

    const goForward = () => {
        switch (location.pathname) {
            case '/myportfolio':
                navigate('/aboutMe');
                break;
            case '/aboutMe':
                navigate('/services');
                break;
            case '/services':
                navigate('/projects');
                break;
                case '/projects':
                    navigate('/myportfolio');
                    break;
            default:
                break;
        }
          
    };

    const goBackward = () => {
        switch (location.pathname) {
            case '/aboutMe':
                navigate('/myportfolio');
                break;
            case '/services':
                navigate('/aboutMe');
                break;
            case '/projects':
                navigate('/services');
                break;
                case '/myportfolio':
                    navigate('/projects');
                    break;
            default:
                break;
        }
    };

    return (
        <div className="btn-mobile_container">
            <button onClick={goBackward}>Previus page</button>
            <button onClick={goForward}>Next page</button>
        </div>
    );
}
