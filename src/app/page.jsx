import styles from "./page.module.css";
import ProductCard from "../components/ProductCard/ProductCard";

export default function HomePage() {
    return (
        <div className={styles.container}>
          <div className={styles.content}>
            <ProductCard
              imagem="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop"
              nome="iPhone 15 Pro Max 256GB"
              preco="R$ 8.999,00"
              desc="O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras
                    profissional."
              star="(4.8)"
              qntStar="1.234"
            />
          </div>
        </div>
    );
}