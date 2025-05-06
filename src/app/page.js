import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>      

        <div style={{ display: 'flex', justifyContent: "flex-end" }}>
          <div className={styles.circle}> 
            Perfil
          </div>
        </div>     

        <div className={styles.conteudo}>
          <div className={styles.caixa}>
            <h1>Acesso rápido</h1>
          </div>
        </div>
      

      <footer className={styles.footer}> 
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        Questões</a>
        
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Vídeo aula
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
         Resumos →
        </a>
      </footer>
    </div>
  );
}
