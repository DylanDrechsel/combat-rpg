import { useEffect } from 'react';

const UseKeyPress = (fn) => {
    useEffect(() => {
        window.addEventListener('keydown', fn)
        return () => window.removeEventListener('keydown', fn)
    }, [fn])
};

export default UseKeyPress;