import { Card, CardActionArea, CardMedia, Grid, Table, TableCell, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect,useState } from "react";

export default function DisplayCards({ title, medias,isMovie }) {

    const [media,setMedia] = useState(medias)
    useEffect(() => {
        setMedia(medias)
    },[medias.length])
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant='h3' sx={{ mt: 5 }}>
                {title}
            </Typography>

            <Table item sx={{ maxWidth: 1500 }}>
                {medias.map((element) => (
                    <TableCell  sx={{ maxWidth: 125, minWidth: 125,borderBottom: "none" }} align='center'>
                        <Link href={`/media/${element.id}?type=${isMovie ? "movie" : "tv"}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{ minHeight: 450 }}
                                        component="img"
                                        height="140"
                                        image={`https:image.tmdb.org/t/p/w200${element.poster_path}`}
                                        alt="no poster"
                                    />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 100 }}>
                                        {(isMovie ? element.title : element.name)}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </TableCell>
                ))}
            </Table>
        </Grid>
        )
}
