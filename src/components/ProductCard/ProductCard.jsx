"use client";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({imagem, nome, preco, desc, star, qntStar}) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className={styles.container}>
            <img src={imagem} alt="" className={styles.image} />

            <h2>{nome}</h2>

            <h1>{preco}</h1>

            <p>{desc}</p>

            <div className={styles.stars}>
                <span>⭐⭐⭐⭐⭐</span>
                <p>{star}</p>
                <p>-</p>
                <p>{qntStar} avaliações</p>
            </div>
        </div>
    );
}