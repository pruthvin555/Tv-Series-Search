import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TvmazeList from './TvmazeList';
import _ from 'lodash';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [mazeListDefault, setMazeListDefault] = useState();
    const [mazeList, setMazeList] = useState();

    const fetchData = async () => {
        return await fetch('https://api.tvmaze.com/search/shows?q=walking')
        .then(response => response.json())
        .then(data => {
            setMazeList(data)
            setMazeListDefault(data)
        });
    }
    const updateInput =_.debounce(function(input) {
            const filtered = mazeListDefault.filter(maze => {
            return maze.show.name.toLowerCase().includes(input.toLowerCase())
            })
            setInput(input);
            setMazeList(filtered);
        }, 1000);

    useEffect( () => {fetchData()}, []);

    return (
        <div>
            <h1>Tv Series List</h1>
            <SearchBar 
            input={input}
            onChange={updateInput.bind(this)}
            />
            <TvmazeList mazeList={mazeList}/>
        </div>
    );
}

export default SearchPage;

