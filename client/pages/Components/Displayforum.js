import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from "next/link";
import axios from "axios"
import ForumList from "./ForumList";

function Displayforum({ response }) {

    const { data: session } = useSession()

    return (
        <div>
            {!session && (
                <>
                    <div>
                        <div className={style.topcont}>
                            <h1 className={style.heading}>Display Forum</h1>
                        </div>
                        <ForumList response={response} />
                    </div>
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