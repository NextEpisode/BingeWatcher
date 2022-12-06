import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';


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
        id: 'season',
        numeric: true,
        disablePadding: false,
        label: 'Season',
    },
    {
        id: 'episode',
        numeric: true,
        disablePadding: false,
        label: 'Episode',
    },
];

const movieHeadCells = [
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
];

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,isMovie } =
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
                { isMovie ? (movieHeadCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    > 
                    {headCell.label != "Poster" ?                         
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
                        </TableSortLabel> : 
                        <TableCell>
                            {headCell.label}
                        </TableCell>
                        }

                    </TableCell>
                ))) : headCells.map((headCell) => (
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
                ))
            }

            </TableRow>
        </TableHead>
    );
}
