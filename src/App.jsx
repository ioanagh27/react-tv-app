import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import ShowCard from './component/ShowCard.jsx'


const App = () => {
    const [showData, setShowData] = useState([]);

    useEffect(() => {

        async function searchApi() {
            const result = await axios.get("https://api.tvmaze.com/search/shows?q=girls")    ;
            setShowData(result.data)        
        }

        searchApi();

    }, [])
    
    return  <>
            <form id="search-form"></form>
            {showData.map((s)=> <ShowCard key={s["show"].id} data={s["show"]} />)}
            </>



}

export default App;
