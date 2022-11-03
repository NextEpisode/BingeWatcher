import Displayforum from './Components/Displayforum'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { react, useState, useEffect } from "react";
import { readForum, createQuestion } from "./api";



export default function Home() {

  const [question, setQuestions] = useState({});
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readForum();
      setResponse(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Displayforum response={response} />
    </div>
  )
}
