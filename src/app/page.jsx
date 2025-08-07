
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
              imagem="https://http2.mlstatic.com/D_NQ_NP_677496-MLU78713749345_082024-O.webp"
              nome="Dell XPS 13 Intel i7 16GB SSD 512GB"
              preco="R$ 6.799,00"
              desc="Ultrabook premium com design ultrafino, tela InfinityEdge e performance
                    excepcional."
              star="(4.6)"
              qntStar="543"
            />

            <ProductCard
              imagem="https://www.aiho.es/20716-superlarge_default/ipad-pro-m2-11-wifi-128gb-grey-space.jpg"
              nome="iPad Pro 12.9 M2 WiFi 128GB"
              preco="R$ 7.299,00"
              desc="O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil."
              star="(4.8)"
              qntStar="1.876"
            />
          </div>

          <div className={styles.content}>
            <ProductCard
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngJDFeWDUkgMRLXJF6XIZsRZDpMCYUN9rpg&s"
              nome="Samsung Galaxy Tab S9+ 256GB"
              preco="R$ 7.299,00"
              desc="O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil."
              star="(4.8)"
              qntStar="1.876"
            />

            <ProductCard
              imagem="https://media.istockphoto.com/id/1430394155/pt/foto/apple-airpods-pro-2nd-generation-next-to-charging-case-and-packaging-box-on-black-background.jpg?s=612x612&w=0&k=20&c=ymEpYUAeHN1jOIr-mFscrgHQj-xSb2dAZFM3ZK06Jq4="
              nome="Apple AirPods Pro 2ª Geração"
              preco="R$ 8.999,00"
              desc="O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras
                    profissional."
              star="(4.8)"
              qntStar="1.234"
            />

            <ProductCard
              imagem="https://a-static.mlcdn.com.br/800x560/apple-watch-series-9-gps-cellular-caixa-product-red-de-aluminio-45mm-pulseira-esportiva-product-red-m-g/magazineluiza/237938900/f743e4baadecdf43eef3702a1704f722.jpg"
              nome="Apple Watch Series 9 GPS 45mm"
              preco="R$ 4.299,00"
              desc="Smartwatch mais avançado com chip S9, Double Tap, monitoramento de
                    saúde completo."
              star="(4.7)"
              qntStar="987"
            />

            <ProductCard
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CZwZMur52mySOeSBl3OvaJg6wm6ikfz8DSo0Woy3pXSbGUU_9GwiBboDumIapHFIQPw&usqp=CAU"
              nome="Carregador Sem Fio MagSafe 15W"
              preco="R$ 399,00"
              desc="Performance profissional com chip M3 Pro, tela Liquid Retina XDR e
                    bateria de longa duração."
              star="(4.4)"
              qntStar="876"
            />

            <ProductCard
              imagem="https://i.zst.com.br/thumbs/12/32/34/-1162680285.jpg"
              nome="Xiaomi 13 Pro 256GB Leica"
              preco="R$ 3.999,00"
              desc="Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e
                    tela AMOLED."
              star="(4.5)"
              qntStar="654"
            />
          </div>
        </div>
    );
}