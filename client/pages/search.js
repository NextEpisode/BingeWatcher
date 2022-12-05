import React, { useState } from 'react'
import { MediaCard } from "../ClientComponents/MediaCard"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Table, TableCell } from '@mui/material';

export default function Search() {


    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [buttonClicked, setbuttonClicked] = useState(true);
    const [alignment, setAlignment] = React.useState('web');
    const [rows,setRows] = useState([]);

    const handleFalse = () => setbuttonClicked((buttonClicked) => false);
    const handleTrue = () => setbuttonClicked((buttonClicked) => true);




    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);
        // Fetch link not making use of env.local
        if (buttonClicked) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${e.target.value}`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.results);
                    if (!data.errors) {
                        setResults(data.results);
                        let rows = data.results.reduce(function (rows, key, index) {
                            return (index % 4 == 0 ? rows.push([key])
                                : rows[rows.length - 1].push(key)) && rows;
                        }, []);
                        setRows(rows);
                    } else {
                        setResults([]);
                        setRows([])
                    }

                });

        }

        else {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${e.target.value}`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.results);
                    if (!data.errors) {
                        setResults(data.results);
                        let rows = results.reduce(function (rows, key, index) {
                            return (index % 2 == 0 ? rows.push([key])
                                : rows[rows.length - 1].push(key)) && rows;
                        }, []);
                        setRows(rows);
                    } else {
                        setResults([]);
                        setRows([]);
                    }
                });
        }
    };

    return (
        <div className="search-page">

            <div className="container">
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform">
                    <ToggleButton onClick={handleTrue} value="web">Movies</ToggleButton>
                    <ToggleButton onClick={handleFalse} value="android">TV Shows</ToggleButton>
                </ToggleButtonGroup>

                <div className="search-content">
                    <input type="text"
                        placeholder='Search'
                        value={query}
                        onChange={onChange}
                    />
                </div>

                {results.length > 0 && (
                    <ul className="results">
                        {rows.map(row => (
                            <Table>
                                {row.map(media => (
                                    <TableCell key={media.id}>
                                        <MediaCard media={media} type={buttonClicked} />
                                    </TableCell>
                                ))}
                            </Table>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}