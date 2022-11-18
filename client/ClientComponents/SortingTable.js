import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { visuallyHidden } from '@mui/utils';
import StarBorder from '@mui/icons-material/StarBorder';
import { Button, CardMedia, Collapse, Divider, List, ListItem, ListItemButton, InboxIcon, DraftsIcon, ListItemIcon, ListItemText, Modal, Popover, Popper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

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

const headCells = [
    {
        id: 'poster_path',
        numeric: false,
        disablePadding: true,
        label: 'Poster',
    },
    {
        id: 'title',
        numeric: false,
        disablePadding: false,
        label: 'Title',
    },
    {
        id: 'release_date',
        numeric: false,
        disablePadding: false,
        label: 'Release date',
    },
    {
        id: 'category',
        numeric: false,
        disablePadding: false,
        label: 'Category',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'episode',
        numeric: true,
        disablePadding: false,
        label: 'Episode',
    },
    {
        id: 'season',
        numeric: true,
        disablePadding: false,
        label: 'Season',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': '',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    const { selected } = props;
    const { handleDeleteClick } = props;
    const [openModal, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleListClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;



    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Movies
                </Typography>
            )}

            {numSelected > 0 ? (
                <div>
                    <Tooltip title="Delete">
                        <IconButton onClick={handleModalOpen}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Modal
                        open={openModal}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Button onClick={() => {
                                handleDeleteClick(selected);
                                handleModalClose();
                            }
                            } id="modal-modal-title" variant="h6" component="h2">
                                delete
                            </Button>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>


            ) : (
                <div>
                    <Tooltip title="Filter list">
                        <IconButton aria-describedby={id} type="button" onClick={handleListClick}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Plan to watch" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Watching" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Watched" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Dropped" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="On Hold" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Popper>
                </div>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({ medias }) {
    const [data, setData] = React.useState(medias);
    const [episodes, setEpisodes] = React.useState(medias.map((element) => element.episode));
    const [seasons, setSeasons] = React.useState(medias.map((element) => element.season));
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const statuses = [
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
            let index = newData.findIndex((media) => media.title === selectedMedia);
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
        console.log(index);
        let newData = [...data];
        newData[index].status = status;
        setData(newData);
    }

    const isSelected = (title) => selected.indexOf(title) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} handleDeleteClick={handleDeleteClick} selected={selected} />
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
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                            {stableSort(data, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.title);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.title}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onClick={(event) => handleClick(event, row.title)}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    width="100"
                                                    image={row.poster_path}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                align="left"
                                            >
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="left">{row.release_date}</TableCell>
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="left">{
                                                <div>
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography>{row.status}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <List>
                                                                {statuses.map((status) => (
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemText primary={status} onClick={() => handlePickStatus(status,data.indexOf(row))}/>
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            }</TableCell>
                                            {row.episode >= 0 ? (
                                                <TableCell id={'episode'} align="left">
                                                    <IconButton onClick={(event) => handleRemoveEpisodeClick(data.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {episodes[data.indexOf(row)]}
                                                    <IconButton onClick={(event) => handleAddEpisodeClick(data.indexOf(row))}><AddIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>) : 'dis a movie'
                                            }
                                            {row.season >= 0 ? (
                                                <TableCell align="left">
                                                    <IconButton onClick={(event) => handleRemoveSeasonClick(data.indexOf(row))}><RemoveIcon fontSize="small" />
                                                    </IconButton>
                                                    {seasons[data.indexOf(row)]}
                                                    <IconButton onClick={(event) => handleAddSeasonClick(data.indexOf(row))}><AddIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>) : 'dis a movie'}
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
