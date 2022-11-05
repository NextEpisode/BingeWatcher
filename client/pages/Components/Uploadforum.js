import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import Link from "next/Link";
import axios from "axios"

function Uploadforum({ session }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const url = "http://localhost:1337/api/strapi-forums";

    const smtEmpty = (name == "") || (description == "")

    const sendData = async () => {

        const response = await axios.post(url, {
            data: {
                title: name,
                Questions: description,
                Answers: [],
                Username: session.user.name,
            },
        });
        console.log(response)
        window.location.href = `http://localhost:3000/questions/${response.data?.data.id}`
    }
    return (
        <div className={style.uploadpage}>
            <div className={style.topcont}>
                <h1>Create a new post</h1>
                <Link href="/">
                    <button>Forum</button>
                </Link>
            </div>
            <div className={style.formcont}>
                <form className={style.uploadform}>
                    <input
                        type="text"
                        placeholder="Enter your title"
                        maxLength="74"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <textarea
                        type="text"
                        placeholder="Enter your description"
                        rows="8"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className={style.inputanswer}>
                        <button disabled={smtEmpty}
                            onClick={(e) => {
                                e.preventDefault();
                                sendData();
                            }}>Submit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Uploadforum;