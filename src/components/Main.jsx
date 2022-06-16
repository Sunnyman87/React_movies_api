import React, { useEffect, useState } from 'react'
import Movies from "./Movies"
import Search from "./Search"

const Main = () => {

    //pirmas state saugoja paieskos zodi
    const [searchValue, setSearch] = useState('')
    //antras state saugoja gautus duomenis is api
    const [movies, setMovies] = useState('');

    //funkcija kuri uzsetina paieskos zodi i main state
    const setSearchValue = (val) => {
        //state update method
        setSearch(val);
    }

    const getMovies = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
        const response = await fetch(url)
        const responseJson = await response.json();
        setMovies(responseJson);
        console.log(movies)

    }
    //usEffect atsakingas uz methodo getMovies iskvietima
    //tikrina, ar pasikeite state reiksme -> searchValue
    //jei pasikeite runina viduje aprasyta mmetoda -> getMovies
    useEffect(() => {
        getMovies(searchValue)
    }, [searchValue])

    //Tevinis komponentas, kuriame gausiu duomenis ir api
    //kuris tures du child components: search, card
    return (
        <div>
            <h1>Movie App</h1>
            <Search setSearchValue={setSearchValue} />
            {movies.Response === "True" ? <Movies movies={movies} /> : ''}

        </div>
    )
}

export default Main