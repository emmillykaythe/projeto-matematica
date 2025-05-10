import Image from "next/image";
import styles from './page.module.css';

export default function PaginaInicial() {
  return (
  <div className={styles.page}>      
    <div style={{ display: 'flex', justifyContent: "flex-end" }}>
      <div className={styles.circle}> 
        Perfil
      </div>
    </div>     
        <div className={styles.conteudo}> </div>
        <div className= {styles.abaLateral}> </div>

  </div>

  );
}
