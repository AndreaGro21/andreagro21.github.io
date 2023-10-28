import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                switch (location.pathname) {
                    case '/myportfolio/':
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
            } else if (event.deltaY < 0) {
                switch (location.pathname) {
                    case '/aboutMe':
                        navigate('/myportfolio/');
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
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [location, navigate]);

    return null;
}

export default ScrollNavigation;









/* 
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        navigate('/aboutMe');
      } else if (event.deltaY < 0) {
        navigate('/project');
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [navigate]);

  return null;
}

export default ScrollNavigation; */


