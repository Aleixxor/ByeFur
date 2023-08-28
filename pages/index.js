import Head from "next/head";
import styles from "../styles/ByeFur.module.css";
import Link from "next/link";
import Image from "next/image";
import { Copyright, List, StarFour } from "@phosphor-icons/react";
import { relative } from "path";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css"
        ></link>
      </Head>
      <header style={{ width: "100%", padding: "16px" }}>
        <div className={`${styles.dFlex} ${styles.justifyContentSpaceBetween}`}>
          <div className={styles.dFlex} style={{ gap: "16px" }}>
            <div>
              <Image
                src="/images/logo.svg" // Route of the image file
                height={24} // Desired size with correct aspect ratio
                width={24} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </div>
            <div>
              <div
                className={`${styles.logoFamily} ${styles.fw500} ${styles.fs16} grid`}
              >
                <div style={{ paddingRight: "2px" }}>
                  <span className={styles.clBrown}>Bye</span>
                  <span className={styles.clOrange}>Fur</span>
                </div>
                <Image
                  src="/images/star.svg" // Route of the image file
                  height={8} // Desired size with correct aspect ratio
                  width={8} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </div>
            </div>
          </div>
          <div>
            <List size={24} className={styles.clOrange}></List>
          </div>
        </div>
      </header>

      <main style={{ gap: "32px" }}>
        <div>
          <div
            style={{ marginBottom: "8px" }}
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs32} ${styles.dFlex}`}
          >
            <div style={{ marginRight: "4px" }}>
              <span className={styles.clBrown}>Bye</span>
              <span className={styles.clOrange}>Fur</span>
            </div>
            <Image
              src="/images/star.svg" // Route of the image file
              height={16} // Desired size with correct aspect ratio
              width={16} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>
          <div>
            <span
              className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
            >
              Desenvolvidos com paixão e cuidado, feitos para proporcionar o
              máximo de conforto e bem-estar aos seus companheiros peludos
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/images/pets-1.svg" // Route of the image file
            width={408}
            height={348}
            alt="Your Name"
          />
        </div>
      </main>

      <main style={{ gap: "32px" }}>
        <div>
          <Image
            src="/images/pets-2.svg" // Route of the image file
            width={259}
            height={269}
            alt="Your Name"
          />
        </div>
        <div>
          <div
            style={{ marginBottom: "8px" }}
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs24}`}
          >
            <span className={styles.clBrown}>Todo cuidado é pouco</span>
          </div>
          <div>
            <span
              className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
            >
              A gente sabe melhor que ninguém que cuidar dos bichinhos dá uma
              trabalheira, e manter a casa limpa é um desafio diário. Por isso,
              queremos o bem-estar não só dos bichanos mas o seu também.
            </span>
          </div>
        </div>
        {/* 
        <span>
          <Link href="/posts/first-post">Other page link</Link>
        </span> */}
      </main>

      <main style={{ gap: "32px" }}>
        <div style={{ gap: "8px" }}>
          <div
            style={{ marginBottom: "8px" }}
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs24}`}
          >
            <span className={styles.clBrown}>Diga adeus aos pelos</span>
          </div>
          <div>
            <span
              className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
            >
              Deixe seu pet confortável. Facilite a limpeza da casa e saia com
              suas melhores roupas sem se preocupar com os pelos!
            </span>
          </div>
          <div>
            <span
              className={`${styles.clGreyDark} ${styles.fw600} ${styles.fs18}`}
            >
              Elefante Obeso Listrado ByeFur
            </span>
          </div>
          <div
            className={styles.clOrange}
            style={{
              padding: "10px 12px 10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10.5px",
              fontWeight: "500",
              backgroundColor: "rgba(244, 140, 18, 0.20)",
            }}
          >
            <Image
              src="/images/trophy-medal.svg" // Route of the image file
              width={24}
              height={24}
              alt="Your Name"
            />
            Premiado
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Image
            src="/images/elephant-dog.jpg" // Route of the image file
            width={230}
            height={345}
            alt="Your Name"
            style={{ borderRadius: "16px" }}
          />
          <div
            style={{
              padding: "12px 0px",
              position: "relative",
              left: "-70px",
              alignItems: "center",
            }}
            className={`${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentSpaceBetween}`}
          >
            <Image
              src="/images/trophy-badge.svg" // Route of the image file
              width={66}
              height={66}
              alt="Your Name"
              style={{ marginTop: "-7px" }}
            />
            <div
              style={{
                backgroundColor: "rgba(34, 34, 34, 0.6)",
                borderRadius: "24px",
                padding: "6px 12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                width: "fit-content",
                fontSize: "10.5px",
                fontWeight: "500",
              }}
            >
              <span>1/7</span>
            </div>
          </div>
        </div>
      </main>

      <main style={{ gap: "32px" }}>
        <div>
          <div
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs32} ${styles.dFlex} ${styles.justifyContentCenter}`}
          >
            <div style={{ marginRight: "4px" }}>
              <span className={styles.clOrange}>Ame </span>
              <span className={styles.clBrown}>todos.</span>
            </div>
          </div>
          <div
            style={{ marginBottom: "8px" }}
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs32} ${styles.dFlex} ${styles.justifyContentCenter}`}
          >
            <div style={{ marginRight: "4px" }}>
              <span className={styles.clOrange}>Cuide </span>
              <span className={styles.clBrown}>de todos.</span>
            </div>
          </div>
          <div>
            <span
              className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
            >
              Seu companheiro é especial. Aproveite cada momento.
            </span>
          </div>
        </div>
      </main>

      <div
        style={{
          marginBottom: "32px",
          position: "relative",
          width: "100%",
          height: "600px",
        }}
      >
        <Image
          src="/images/pets-3.svg" // Route of the image file
          fill
          sizes="(max-width: 768px) 100vw"
          alt="Your Name"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <footer className={`${styles.dFlex} ${styles.flexColumn}`}>
        <div>
          <span className={`${styles.fw400} ${styles.fs14} ${styles.clGrey}`}>
            <Copyright></Copyright> Abstrakt Brands
          </span>
        </div>
        <div>
          <a
            className={`${styles.fw500} ${styles.fs14} ${styles.clGrey}`}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 56px 0;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 888px;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        * {
          box-sizing: border-box;
        }
        #__next {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
