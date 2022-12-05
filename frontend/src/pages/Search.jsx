import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Search() {
const [value, setValue] =useState([]);
const [filteredResults, setFilteredResults] = useState([]);
const [searchTerm, setSearchTerm] = useState("");



let url = "http://localhost:8080/movies";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setValue(data))
            .catch(err => console.log(err))
            
    }, [url])

const searchMovies = (searchValue) => {
    setSearchTerm(searchValue);
    if (searchValue !== "") {
        const filteredData = value.filter((movie) => {
            return Object.values(movie).join("").toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredResults(filteredData);
    } else {
        setFilteredResults(value);
    }
}
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch', flexgrow: 1, xs: 12 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                defaultValue="Search"
            />
            {filteredResults.map((movie, index) => (
                <ol key={index}>{movie.title}</ol>
            ))}
        </Box>

    );
}

export default Search;