import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { useSession } from 'next-auth/react'
import { CardMedia, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Link from 'next/link';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable({ medias, isMovie, setMedias }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [katalogueId, setkatalogueId] = useState()
    const { data: session, status } = useSession()

    //Whenever sorting table receives new data for statuses and media it re-renders
    React.useEffect(() => {
        console.log(medias)
        setMedias(medias);
    }, [medias.length])

    //Fields used in the status column
    const defaultStatuses = [
        "Plan to watch",
        "Watching",
        "Watched",
        "Dropped",
        "On Hold"
    ];

    const [anchorEle, setAnchorEle] = React.useState(null);

    const handleStatusClick = (event) => {
        setAnchorEle(anchorEle ? null : event.currentTarget);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleDeleteClick = (selected) => {
        console.log(selected)
        const newData = [...medias];
        selected.forEach((selectedMedia) => {
            let index = newData.findIndex((media) => (isMovie ? media.title : media.name) === selectedMedia);
            deleteEntry(newData[index].id)
            newData.splice(index, 1);
            setMedias(newData);
        });
        setSelected([]);
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = medias.map((n) => (isMovie ? n.title : n.name));
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, title) => {
        const selectedIndex = selected.indexOf(title);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, title);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const handleAddEpisodeClick = (index) => {
        let newData = [...medias];
        newData[index].episode++;
        setMedias(newData);
        increaseEpisode(newData[index].id, newData[index].episode)
    }

    const handleRemoveEpisodeClick = (index) => {
        let newData = [...medias];
        if (newData[index].episode > 1) {
            newData[index].episode--;
            setMedias(newData);
            decreaseEpisode(newData[index].id, newData[index].episode);
        }
    }

    const handleAddSeasonClick = (index) => {
        let newData = [...medias]
        newData[index].season++;
        setMedias(newData);
        increaseSeason(newData[index].id, newData[index].season)

    }

    const handleRemoveSeasonClick = (index) => {
        let newData = [...medias];
        if (newData[index].season > 1) {
            newData[index].season--;
            setMedias(newData);
            decreaseSeason(newData[index].id, newData[index].season);
        }
    }

    const handlePickStatus = (status, index) => {
        let newData = [...medias];
        newData[index].media_status = status;
        setMedias(newData);
        updateStatus(newData[index].id, newData[index].media_status)
    }

    const isSelected = (title) => selected.indexOf(title) !== -1;

    async function getKatalogueID() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/userRoute/${session.user.id}/`, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            setkatalogueId(data.User.KID)
        } catch (e) {
            console.log(e)
        }
    }

    async function deleteEntry(iden) {
        if (!isMovie) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/stat`, {
                    body: JSON.stringify({
                        KID: katalogueId,
                        TVID: iden
                    }),
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
                    body: JSON.stringify({
                        KID: katalogueId,
                        MovieID: iden
                    }),
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function updateStatus(iden, newStatus) {
        if (!isMovie) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/stat`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: iden,
                    TVKUStatus: newStatus
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } else {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    MovieID: iden,
                    MKUStatus: newStatus
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }
    }

    async function increaseEpisode(iden, episodeNum) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/epis`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: iden,
                    TVKUEpisode: episodeNum
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    async function decreaseEpisode(iden, episodeNum) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/epis`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: iden,
                    TVKUEpisode: episodeNum
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    async function increaseSeason(iden, seasonNum) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/seas`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: iden,
                    TVKUSeason: seasonNum
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    async function decreaseSeason(iden, seasonNum) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/seas`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: iden,
                    TVKUSeason: seasonNum
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (status == 'authenticated') {
            getKatalogueID().catch(console.error)
        }
    }, [status])

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - medias.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} handleDeleteClick={handleDeleteClick} selected={selected} mediaType={(medias && medias.length > 0) ? medias[0].media_type : "movie"} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={medias.length}
                            isMovie={isMovie}
                        />
                        <TableBody>
                            {stableSort(medias, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(isMovie ? row.title : row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={isMovie ? row.title : row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onClick={(event) => handleClick(event, isMovie ? row.title : row.name)}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Link href={`/media/${row.id}?type=${isMovie ? "movie" : "tv"}`}>
                                                    <CardMedia
                                                        component="img"
                                                        height="100"
                                                        width="100"
                                                        image={`https:image.tmdb.org/t/p/w200${row.poster_path}`}
                                                    />
                                                </Link>
                                            </TableCell>
                                            <Link href={`/media/${row.id}?type=${isMovie ? "movie" : "tv"}`}>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    align="left"
                                                >
                                                    {isMovie ? row.title : row.name}
                                                </TableCell>
                                            </Link>

                                            <TableCell align="left">{isMovie ? row.release_date : row.first_air_date}</TableCell>
                                            <TableCell align="left">{row.first_genre}</TableCell>
                                            <TableCell align="left">{
                                                <div>
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography>{row.media_status}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <List>
                                                                {defaultStatuses.map((status) => (
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemText primary={status} onClick={() => handlePickStatus(status, medias.indexOf(row))} />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            }</TableCell>
                                            {row.season >= 0 ? (
                                                <TableCell align="left">
                                                    <IconButton onClick={(event) => handleRemoveSeasonClick(medias.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {row.season}
                                                    <IconButton onClick={(event) => handleAddSeasonClick(medias.indexOf(row))}><AddIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>) : ''}
                                            {row.episode >= 0 ? (
                                                <TableCell id={'episode'} align="left">
                                                    <IconButton onClick={(event) => handleRemoveEpisodeClick(medias.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {row.episode}
                                                    <IconButton onClick={(event) => handleAddEpisodeClick(medias.indexOf(row))}><AddIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>) : ''
                                            }
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={medias.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}
