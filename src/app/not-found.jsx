"use client";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css";
import 'react-toastify/dist/ReactToastify.css';

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        toast.success("🏠 Redirecionando para a página inicial!", {
            position: "top-center",
            autoClose: 2000,
        });
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };

    const handleGoBack = () => {
        toast.info("⬅️ Voltando para a página anterior!", {
            position: "top-center",
            autoClose: 1500,
        });
        setTimeout(() => {
            router.back();
        }, 1500);
    };

    const handleReportError = () => {
        toast.warn("📧 Obrigado por reportar! Nossa equipe foi notificada.", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handleSearchSuggestion = () => {
        toast.info("🔍 Dica: Tente usar a busca ou verifique a URL!", {
            position: "bottom-center",
            autoClose: 4000,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.errorCodeContainer}>
                    <div className={styles.errorCodeBg}>404</div>
                    <div className={styles.errorCodeFront}>4🔍4</div>
                </div>
                <h1 className={styles.title}>Página não encontrada</h1>
                <p className={styles.description}>
                    Ops! A página que você está procurando não existe ou foi movida para outro local.
                </p>
                <div className={styles.phoneContainer}>
                    <div className={styles.phone}>📱</div>
                    <p className={styles.phoneText}>Até nossos celulares se perderam!</p>
                </div>
                <div className={styles.actions}>
                    <button 
                        onClick={handleGoHome}
                        className={styles.primaryButton}
                    >
                        🏠 Ir para Home
                    </button>
                    <button 
                        onClick={handleGoBack}
                        className={styles.secondaryButton}
                    >
                        ⬅️ Voltar
                    </button>
                    <button 
                        onClick={handleSearchSuggestion}
                        className={styles.hintButton}
                    >
                        💡 Dica de Busca
                    </button>
                    <button 
                        onClick={handleReportError}
                        className={styles.reportButton}
                    >
                        📧 Reportar Erro
                    </button>
                </div>
                <div className={styles.suggestions}>
                    <h3>Você pode tentar:</h3>
                    <ul>
                        <li>🔍 Verificar se a URL está correta</li>
                        <li>🏠 Voltar à página inicial</li>
                        <li>📱 Explorar nossos celulares em destaque</li>
                        <li>🔄 Atualizar a página</li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
