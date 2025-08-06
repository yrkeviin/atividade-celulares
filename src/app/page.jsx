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

            <ProductCard
              imagem="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop"
              nome="Samsung Galaxy S24 Ultra 512GB"
              preco="R$ 7.499,00"
              desc="Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos
                    incríveis."
              star="(4.7)"
              qntStar="987"
            />

            <ProductCard
              imagem="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop"
              nome="MacBook Pro 14 M3 Pro 18GB"
              preco="R$ 15.999,00"
              desc="Performance profissional com chip M3 Pro, tela Liquid Retina XDR e
                    bateria de longa duração."
              star="(4.9)"
              qntStar="2.156"
            />

            <ProductCard
              imagem="💻 Dell XPS"
              nome="Dell XPS 13 Intel i7 16GB SSD 512GB"
              preco="R$ 6.799,00"
              desc="Ultrabook premium com design ultrafino, tela InfinityEdge e performance
                    excepcional."
              star="(4.6)"
              qntStar="543"
            />

            <ProductCard
              imagem="💻 Dell XPS"
              nome="iPad Pro 12.9 M2 WiFi 128GB"
              preco="R$ 7.299,00"
              desc="O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil."
              star="(4.8)"
              qntStar="1.876"
            />
          </div>
        </div>
    );
}