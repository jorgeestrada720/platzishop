import {useState} from 'react';
import { optimizeFonts } from '../../next.config';

const useAlert = (options) =>{
    const defualtOptions = {
        active: false,
        message: '',
        type: '',
        autoClose: true,
    };

    const [alert, setAlert] = useState({
        ...defualtOptions,
        ...optimizeFonts,
    });

    const toggleAlert = () => {
        setAlert(!alert.active);
    };

    return {
        alert,
        setAlert,
        toggleAlert,
    }
}

export default useAlert;