import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from "next/link";
import axios from "axios"
import { List, Divider } from "@mui/material";
import ForumListItem from "../Components/ForumListItem";

function IdComponent({ mediaResponse }) {

    const { data: session } = useSession()
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState("")
    const [a, formerArray] = useState([]);
    const [media, setMedia] = useState(mediaResponse?.data?.attributes);

    console.log("this is it - ", mediaResponse);

    const router = useRouter()
    const { mId } = router.query
    console.log("this is the mid - ", mId);

    const submitAnswer = () => {
        try {
            console.log(session.user.name)
            axios.put(`http://localhost:1337/api/strapi-forums/${mId}`, {
                data: {
                    Answers: [...a, { user: session.user.name, reply: answer }],
                    Answername: session.user.name,
                },
            }).catch((e) => {
                console.log(e.mediaResponse)
            });
            window.location.reload()
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
                            <p className={style.question}>{media.Questions}</p>
                        </div>
                        <div className={style.answercont}>
                            <div className={style.inputanswer}>
                                {!session && (
                                    <div />
                                )}
                                {session && (
                                    <form>
                                        <textarea
                                            type="text"
                                            placeholder="Enter your answer"
                                            rows="5"
                                            value={answer}
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
                            <button className={style.showanswer} onClick={() => setShow(!show)}>
                                {show ? "Hide Answers" : "Show Answers"}
                            </button>
                            {show ? (
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
                            ) : null}
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