import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from "next/link";
import axios from "axios"
import { List, Divider, TextField } from "@mui/material";
import ForumListItem from "../Components/ForumListItem";

function IdComponent({ mediaResponse }) {

    const { data: session } = useSession()
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState("")
    const [a, formerArray] = useState([]);
    const [media, setMedia] = useState(mediaResponse?.data?.attributes);

    const router = useRouter()
    const { mId } = router.query

    const submitAnswer = () => {
        try {
            axios.put(`http://localhost:1337/api/strapi-forums/${mId}`, {
                data: {
                    Answers: [...a, { user: session.user.name, reply: answer }]
                },
            }).then(() => {
                console.log(a)
            }).catch((e) => {
                console.log(e.mediaResponse)

            });
        } catch (error) {
            console.log("Error found: ", mId, error);
        }
    };



    return (
        <div>
            {!media && (
                <>Page not found</>
            )}
            {media && (
                <div>
                    <h2 className={style.subheading}>{media.title}</h2>
                    <div className={style.userinfo}>
                        <p>Posted By: {media.Username}</p>
                    </div>
                    <List>
                        <div className={style.questioncont}>
                            <p className={style.question} >{media.Questions}</p>
                        </div>
                        <div className={style.answercont}>
                            <div className={style.inputanswer}>
                                {!session && (
                                    <div />
                                )}
                                {session && (
                                    <form>
                                        <TextField
                                            placeholder="What are your thoughts?"
                                            multiline
                                            minRows={2}
                                            maxRows={6}
                                            value={answer}
                                            autoComplete="off"
                                            onChange={(e) => {
                                                formerArray(media.Answers);
                                                setAnswer(e.target.value);
                                            }}
                                        />
                                        <button
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
                                            subtitle={answers.user}
                                            paragraph={answers.reply}
                                        />
                                        <Divider variant="inset" component="li" />
                                    </>
                                ))}
                            </div>
                        </div>
                    </List>
                </div>
            )}
        </div>

    )
}


export async function getServerSideProps(context) {
    const { mId } = context.query;
    let mediaResponse = {};

    try {
        mediaResponse = await axios.get(`http://localhost:1337/api/strapi-forums/${mId}`)
    }
    catch (error) {
        mediaResponse.data = {};
    }
    return {
        props: { mediaResponse: mediaResponse.data },
    }
}

export default IdComponent;