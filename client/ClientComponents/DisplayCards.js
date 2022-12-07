import { Card, CardActionArea, CardMedia, Grid, Table, TableCell, Typography } from "@mui/material";
import Link from "next/link";

export default function DisplayCards({ title, medias }) {

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
                {medias.map((media) => (
                    <TableCell sx={{ maxWidth: 125, minWidth: 125 }} align='center'>
                        <Link href={`/media/${media.id}?type=${media.media_type}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{ minHeight: 450 }}
                                        component="img"
                                        height="140"
                                        image={`https:image.tmdb.org/t/p/w200${media.poster_path}`}
                                        alt="no poster"
                                    />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 100 }}>
                                        {(media.media_type == "movie" ? media.title : media.name)}
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
