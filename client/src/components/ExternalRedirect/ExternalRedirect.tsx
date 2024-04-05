import { useEffect, useRef } from 'react';
import Loading from '../Loading/Loading';

const ExternalRedirect = ({ to }: { to: string }) => {
    const hasOpened = useRef(false);

    useEffect(() => {
        if (!hasOpened.current) {
            window.open(to, '_blank');
            hasOpened.current = true;
            window.location.href = '/';
        }
    }, [to, history]);

    return <Loading open={!hasOpened.current} />;
}

export default ExternalRedirect;