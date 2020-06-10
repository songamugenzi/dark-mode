import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';


const useDarkmode = (key) => {
    const [darkModeStatus, setDarkModeStatus] = useLocalStorage(key);
    useEffect(() => {
        if (darkModeStatus === true) {
            const body = document.querySelector('body')
            body.classList.add('dark-mode')
        } else {
            const body = document.querySelector('body')
            body.classList.remove('dark-mode')
        }
    }, [darkModeStatus])

    return [darkModeStatus, setDarkModeStatus]

};

export default useDarkmode;