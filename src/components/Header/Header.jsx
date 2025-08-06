"use client";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header({titulo, subtitulo, quantidade}) {
    const [aberto, setAberto] = useState(false);

    return (
        <header className={styles.container}>
            <h1>{titulo}</h1>

            <p>{subtitulo}</p>

            <p>{quantidade}</p>
        </header>
    );
}