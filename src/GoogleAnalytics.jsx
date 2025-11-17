import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', 'G-4PFPE54KR1', {
                page_path: location.pathname,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;