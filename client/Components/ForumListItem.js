import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ForumListItem({ title, subtitle, paragraph }) {
    return (
        <ListItem alignItems="flex-start" sx={{ padding: "8px 0px" }}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/images/avatar/avatar.png" />
            </ListItemAvatar>
            <ListItemText
                // primary={title}
                primary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', marginRight: '6px', textDecoration: 'none' }}
                            component="span"
                            variant="h5"
                            color="white"
                        >
                            {title}
                        </Typography>
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', marginRight: '6px', textDecoration: 'none', fontWeight: "bold", color: '#1876D1' }}
                            component="span"
                            variant="h7"
                            color="white"
                        >
                            {subtitle}
                        </Typography>

                        <Typography
                            sx={{ display: 'inline', marginRight: '6px', textDecoration: 'none' }}
                            component="span"
                            variant="b2"
                            color="white"
                        >
                            {paragraph}
                        </Typography>

                    </React.Fragment>
                }
            />
        </ListItem >
    );
}