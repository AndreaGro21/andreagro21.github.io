import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollNavigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [lastScrollTime, setLastScrollTime] = useState(0);
    
    useEffect(() => {
        const handleScroll = (event) => {
            const now = Date.now();
            if (now - lastScrollTime < 500) {
                return; 
            }
            
            if (event.deltaY > 0) {
                navigateToNextRoute(location.pathname);
            } else if (event.deltaY < 0) {
                navigateToPreviousRoute(location.pathname);
            }

            setLastScrollTime(now);
        };

        const navigateToNextRoute = (currentRoute) => {
            switch (currentRoute) {
                case '/':
                    navigate('/aboutMe');
                    break;
                case '/myportfolio':
                    navigate('/aboutMe');
                    break;
                case '/aboutMe':
                    navigate('/services');
                    break;
                case '/services':
                    navigate('/projects');
                    break;
                default:
                    break;
            }
        };

        const navigateToPreviousRoute = (currentRoute) => {
            switch (currentRoute) {
                case '/aboutMe':
                    navigate('/myportfolio');
                    break;
                case '/services':
                    navigate('/aboutMe');
                    break;
                case '/projects':
                    navigate('/services');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [location, navigate, lastScrollTime]);

    return null;
}

export default ScrollNavigation;
