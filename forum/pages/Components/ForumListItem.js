import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ForumListItem({ title, subtitle, paragraph }) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/Images/userIcon.png" />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', marginRight: '6px' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {subtitle}
                        </Typography>
                        {paragraph}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}