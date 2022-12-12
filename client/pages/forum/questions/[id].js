import React, { useState } from "react";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from "axios"
import { List, Divider, TextField, Typography } from "@mui/material";
import ForumListItem from "../../../Components/ForumListItem";
import { borderColor } from "@mui/system";

function IdComponent({ mediaResponse }) {

    const { data: session } = useSession()
    const [answer, setAnswer] = useState("")
    const [media, setMedia] = useState(mediaResponse?.data?.attributes);

    const router = useRouter()
    const { id } = router.query

    const answerEmpty = (answer == "");

    // Function used to submit answers to the forum entry with {mID}
    // by looking up the old answers and then appending to them
    const submitAnswer = async () => {
        try {
            const tmpMedia = await axios.get(process.env.NEXT_PUBLIC_STRAPI_DOMAIN + `api/strapi-forums/${id}`)
            const originalAnswers = tmpMedia.data.data.attributes.Answers
            const appendedAnswers = [...originalAnswers, { user: session.user.name, reply: answer }]


            axios.put(process.env.NEXT_PUBLIC_STRAPI_DOMAIN + `api/strapi-forums/${id}`, {
                data: {
                    Answers: appendedAnswers
                },
            }).then(() => {
                window.location.reload()
            }).catch((e) => {
                console.log(e)
            });
        } catch (error) {
            console.log("Error found: ", id, error);
        }
    };

    return (
        <div>
            {!media && (
                <Typography
                    sx={{ display: 'inline', margin: 'auto', textDecoration: 'none' }}
                    component="span"
                    variant="h1"
                    color="white"
                    fontWeight='bold'
                >
                    Page not found
                </Typography>

            )}
            {media && (
                <div style={{ padding: "15px" }}>
                    <h2 className={style.subheading}>{media.title}</h2>
                    <div className={style.userinfo}>
                        <p>Posted By: {media.Username}</p>
                    </div>
                    <List>
                        <div className={style.questioncont}>
                            <p className={style.question}> {media.Questions}</p>
                        </div>
                        <div className={style.answercont}>
                            <div className={style.inputanswer}>
                                {!session && (
                                    <div />
                                )}
                                {session && (
                                    <form>
                                        <h1>Your answer</h1>
                                        <TextField
                                            placeholder="What are your thoughts?"
                                            multiline
                                            fullWidth
                                            minRows={2}
                                            maxRows={6}
                                            value={answer}
                                            autoComplete="off"
                                            color="primary"
                                            variant="standard"
                                            sx={{
                                                backgroundColor: '#808080',
                                                borderColor: '#1876d1',
                                                borderRadius: '8px',
                                                color: 'red'
                                            }}
                                            inputProps={{ style: { color: "white" } }}
                                            onChange={(e) => {
                                                setAnswer(e.target.value);
                                            }}
                                        />
                                        <button style={{
                                            marginLeft: 0
                                        }}
                                            disabled={answerEmpty}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                submitAnswer();
                                            }}
                                        >
                                            Post
                                        </button>
                                    </form>
                                )}
                            </div>
                            <div className={style.answers}>
                                {media.Answers.map((answers, i) => (
                                    <>
                                        <ForumListItem
                                            title={answers.user}
                                            subtitle={answers.reply}
                                        />
                                        <Divider variant="inset" component="li" style={{ background: '#404040' }} />
                                    </>
                                ))}
                            </div>
                        </div>
                    </List>
                </div >
            )
            }
        </div >

    )
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    let mediaResponse = {};

    try {
        mediaResponse = await axios.get(process.env.NEXT_PUBLIC_STRAPI_DOMAIN + `api/strapi-forums/${id}`)
    }
    catch (error) {
        mediaResponse.data = {};
    }
    return {
        props: { mediaResponse: mediaResponse.data },
    }
}

export default IdComponent;