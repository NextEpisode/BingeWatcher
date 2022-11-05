import Displayforum from '../Components/Displayforum'
import styles from '../../styles/Home.module.css'

import { react, useState, useEffect } from "react";
import { readForum } from "../api";



export default function Home() {

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
