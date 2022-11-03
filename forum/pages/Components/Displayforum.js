import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from "next/link";
import axios from "axios"
import ForumList from "./ForumList";

function Displayforum({ response }) {

    const { data: session } = useSession()
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState("")
    const [id, setId] = useState("");
    const [a, formerArray] = useState([]);



    const submitAnswer = () => {
        try {
            console.log(session.user.name)
            axios.put(`http://localhost:1337/api/strapi-forums/${id}`, {
                data: {
                    Answers: [...a, [session.user.name, answer]],
                    Answername: session.user.name,
                },
            }).catch((e) => {
                console.log(e.response)
            });
            window.location.reload()
        } catch (error) {
            console.log("Error found: ", id, error);
        }
    };

    return (
        <div>
            {!session && (
                <>
                    <h1>Sign in to access forum</h1>
                    <button onClick={() => signIn()}>Sign In</button>
                </>
            )}
            {session && (
                <>
                    <div>
                        <div className={style.topcont}>
                            <h1 className={style.heading}>Display Forum</h1>
                            <div>
                                <Link href="/upload">
                                    <button>Create a new post</button>
                                </Link>
                                <button onClick={() => signOut()}>Signout</button>
                            </div>
                        </div>
                        <ForumList response={response} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Displayforum;