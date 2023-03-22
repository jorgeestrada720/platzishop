import { useState, useEffect} from 'react';
import axios from 'axios';

const userFetch = (endpoint) => {
    const[data, setData] = useState([]);
    async function fetchData (){
        const response = await axios.get(endpoint);
        setData(response.data);
    }

    useEffect(() => {
        try{
            fetchData();
        }catch(error){
            console.log(error);
        }
    },[])

    return data;
};

export default userFetch;
