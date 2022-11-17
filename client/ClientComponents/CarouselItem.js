import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemButton, ListItemText, Popper } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';



export default function Profile({ media }) {

  console.log(media);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [E, setE] = React.useState(console.log(media));

  const handleListClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const type = "movie";

  return (
    <div>
      <Card sx={{ maxWidth: 1000, maxHeight: 1920, ml: 10 }}>
      <Link href={`/media/${media.id}?type=${type}`}>
        <CardMedia
          component="img"
          height="500"
          width="1000"
          src={`https:image.tmdb.org/t/p/w200${media.poster_path}`}
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {media.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {media.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/media/${media.id}?type=${type}`}>
            <Button size="small">Learn More</Button>
          </Link>
          <Button size="small" aria-describedby={id} type="button" onClick={handleListClick}>Add to Katalogue</Button>
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
        </CardActions>
       </Card>
    </div>




  );
}