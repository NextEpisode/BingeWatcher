import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Modal, Popper, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import PropTypes from 'prop-types';
import React from "react";
import { alpha } from '@mui/material/styles';


EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


export default function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    const { selected } = props;
    const { handleDeleteClick } = props;
    const { mediaType } = props;
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
                    {mediaType == "movie" ? "Movies" : "Series"}
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

