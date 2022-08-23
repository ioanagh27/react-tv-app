import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import {ShowCard, SearchForm }from './component';


const App = () => {
    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState("Friends")

    useEffect(() => {

        async function searchApi() {
            const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`)    ;
            setShowData(result.data)        
        }

        searchApi();

    }, [searchString])

    function handleSearch(userInput) {
        setSearchString(userInput)
    }
    
    return  <>
            <SearchForm handleSearchSubmission={handleSearch}/>
            {showData.map((s)=> <ShowCard key={s["show"].id} data={s["show"]} />)}
            </>



}

export default App;
