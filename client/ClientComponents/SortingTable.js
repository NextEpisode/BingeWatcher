import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
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
import { Button, CardMedia, Collapse, Divider, List, ListItem, ListItemButton, InboxIcon, DraftsIcon, ListItemIcon, ListItemText, Modal, Popover, Popper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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





export default function EnhancedTable({ medias, isMovie }) {
    const [data, setData] = React.useState(medias);
    const [episodes, setEpisodes] = React.useState(medias.map((element) => element.episode));
    const [seasons, setSeasons] = React.useState(medias.map((element) => element.season));
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //Whenever sorting table receives new data for statuses and media it re-renders
    React.useEffect(() => {
        setData(medias);
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

    const openStatus = Boolean(anchorEle);
    const idStatus = open ? 'simple-popper' : undefined;

    const handleStatusClick = (event) => {
        setAnchorEle(anchorEle ? null : event.currentTarget);
    };



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleDeleteClick = (selected) => {

        const newData = [...data];

        selected.forEach((selectedMedia) => {
            let index = newData.findIndex((media) => (isMovie ? media.title : media.name) === selectedMedia);
            newData.splice(index, 1);
            setData(newData);
        });


        setSelected([]);
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = data.map((n) => n.title);
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
        let newEpisodes = [...episodes];
        newEpisodes[index]++;
        let newData = [...data];
        newData[index].episode = newEpisodes[index];
        setEpisodes(newEpisodes);
        setData(newData);
    }

    const handleRemoveEpisodeClick = (index) => {
        let newEpisodes = [...episodes];
        if (newEpisodes[index] > 0) {
            newEpisodes[index]--;
            let newData = [...data];
            newData[index].episode = newEpisodes[index];
            setEpisodes(newEpisodes);
            setData(newData);
        }
    }

    const handleAddSeasonClick = (index) => {
        let newSeasons = [...seasons];
        newSeasons[index]++;
        let newData = [...data];
        newData[index].season = newSeasons[index];
        setSeasons(newSeasons);
        setData(newData);
    }

    const handleRemoveSeasonClick = (index) => {
        let newSeasons = [...seasons];
        if (newSeasons[index] > 0) {
            newSeasons[index]--;
            let newData = [...data];
            newData[index].season = newSeasons[index];
            setSeasons(newSeasons);
            setData(newData);
        }
    }

    const handlePickStatus = (status, index) => {
        let newData = [...data];
        newData[index].media_status = status;
        setData(newData);
    }

    const isSelected = (title) => selected.indexOf(title) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} handleDeleteClick={handleDeleteClick} selected={selected} mediaType={(data && data.length > 0) ? data[0].media_type : "movie"} />
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
                            rowCount={data.length}
                            isMovie={isMovie}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                            {stableSort(data, getComparator(order, orderBy))
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
                                                                            <ListItemText primary={status} onClick={() => handlePickStatus(status, data.indexOf(row))} />
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
                                                    <IconButton onClick={(event) => handleRemoveSeasonClick(data.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {seasons[data.indexOf(row)]}
                                                    <IconButton onClick={(event) => handleAddSeasonClick(data.indexOf(row))}><AddIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>) : ''}
                                            {row.episode >= 0 ? (
                                                <TableCell id={'episode'} align="left">
                                                    <IconButton onClick={(event) => handleRemoveEpisodeClick(data.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {episodes[data.indexOf(row)]}
                                                    <IconButton onClick={(event) => handleAddEpisodeClick(data.indexOf(row))}><AddIcon fontSize="small" />
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
                    count={data.length}
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
