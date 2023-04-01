import { useNavigate } from 'react-router-dom';

/**
 * Page NOT FOUND
 * @summary Landing page to handle wrong urls
 */

function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Page Not Found</h3>
            <h3 onClick={() => navigate('/')}>Return to homepage</h3>
        </div>
    );
}

export default NotFound;
