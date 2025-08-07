"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./ProductCard.module.css";
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({imagem, nome, preco, desc, star, qntStar}) {
    const [aberto, setAberto] = useState(false);

    const handleAddToCart = () => {
        toast.success(`📱 ${nome} adicionado ao carrinho!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleViewDetails = () => {
        toast.info(`ℹ️ Visualizando detalhes de ${nome}`, {
            position: "top-center",
            autoClose: 2000,
        });
        setAberto(!aberto);
    };

    const handleFavorite = () => {
        toast.warn(`💛 ${nome} adicionado aos favoritos!`, {
            position: "top-left",
            autoClose: 2000,
        });
    };

    return (
        <div className={styles.container}>
            <img src={imagem} alt={nome} className={styles.image} />

            <h2>{nome}</h2>

            <h1>{preco}</h1>

            <p>{desc}</p>

            <div className={styles.stars}>
                <span>⭐⭐⭐⭐⭐</span>
                <p>{star}</p>
                <p>-</p>
                <p>{qntStar} avaliações</p>
            </div>

            <div className={styles.actions}>
                <button 
                    onClick={handleAddToCart}
                    className={styles.addButton}
                >
                    🛒 Adicionar ao Carrinho
                </button>
                
                <button 
                    onClick={handleViewDetails}
                    className={styles.detailsButton}
                >
                    👁️ Ver Detalhes
                </button>
                
                <button 
                    onClick={handleFavorite}
                    className={styles.favoriteButton}
                >
                    💛 Favoritar
                </button>
            </div>

            <ToastContainer />
        </div>
    );
}