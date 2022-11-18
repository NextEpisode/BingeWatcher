import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Popper, Select } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';



export default function Profile({ media }) {

  const statuses = [
    "Plan to watch",
    "Watching",
    "Watched",
    "Dropped",
    "On Hold"
  ];

  const handlePickStatus = (id, pickedStatus) => {
    setStatus(pickedStatus);
  }



  console.log(media);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [E, setE] = React.useState(console.log(media));
  const [status, setStatus] = React.useState("Plan to Watch");

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
          <Box sx={{ minWidth: 170 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Add to Katalogue</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select">
                <MenuItem value={10}>Completed</MenuItem>
                <MenuItem value={20}>Plan to Watch</MenuItem>
                <MenuItem value={30}>Watching</MenuItem>
                <MenuItem value={40}>On Hold</MenuItem>
                <MenuItem value={50}>Dropped</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardActions>
      </Card>
    </div>




  );
}