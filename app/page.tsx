import Carrosel from "./UI/components/Carrosel/carrosel";
import NavBar from "./UI/components/NavBar/navbar";
import styles from "./UI/styles/page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className={styles.sectionFlex50}>

        <Carrosel imgSrc={["/imgs/motor-turbo.jpg", "/imgs/trackDay.png", "/imgs/dinamometro-automotivo.jpg"]}/>

        <div className={styles.containerTXT}>
          <h2 className={styles.titulo}>Olá somos a Simas Turbo</h2>
          <p>Temos o prazer de apresentar-mos a sua nova loja de produtos de performace automotiva! Nosso foco está em oferecermos kits de stage para diversos tipos de automoveis.</p>
        </div>
        
      </section>
    </>
  );
}
