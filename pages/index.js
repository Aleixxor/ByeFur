import styles from "../styles/ByeFur.module.css";
import Image from "next/image";
import { Copyright, Leaf, List, Star, StarFour } from "@phosphor-icons/react";
import { relative } from "path";
import Head from "next/head";
import LinkButton from "../components/link-button";
import Button from "../components/button";
import Logo from "../components/logo";
import Header from "../components/header";

export default function Document() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ByeFur</title>
      </Head>

      <Header></Header>

      <main className="d-flex justify-content-center align-items-center mb-5">
        <div className={`row d-flex align-items-center justify-content-center`}>
          <div className={`col-sm-6 col-xs-12`}>
            <div
              className={`d-flex align-items-center justify-content-center justify-content-sm-start mb-2`}
            >
              <Logo size={32}></Logo>
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
          <div
            className={`col-sm-6 col-xs-12 d-flex align-items-center justify-content-center`}
          >
            <img
              src="/images/pets-1.svg"
              style={{ width: "100%", maxWidth: "436px" }}
              alt="Your Name"
            />
          </div>
        </div>
      </main>

      <main className="d-flex justify-content-center align-items-center mb-5">
        <div className={`row d-flex align-items-center justify-content-center`}>
          <div className={`col-sm-6 col-xs-12 order-sm-last `}>
            <div
              className={`${styles.logoFamily} ${styles.fw700} ${styles.fs24} mb-2`}
            >
              <span className={styles.clBrown}>Todo cuidado é pouco</span>
            </div>
            <div>
              <span
                className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
              >
                A gente sabe melhor que ninguém que cuidar dos bichinhos dá uma
                trabalheira, e manter a casa limpa é um desafio diário. Por
                isso, queremos o bem-estar não só dos bichanos mas o seu também.
              </span>
            </div>
          </div>
          <div
            className={`col-sm-6 col-xs-12 d-flex align-items-center justify-content-center`}
          >
            <img
              src="/images/pets-2.svg"
              style={{
                width: "100%",
                maxWidth: "335px",
              }}
            />
          </div>
        </div>
      </main>

      <main className="d-flex justify-content-center align-items-center mb-5">
        <div className={`row d-flex align-items-center justify-content-center`}>
          <div className={`col-12 d-sm-none d-block mb-3`}>
            <div>
              <div
                className={`${styles.logoFamily} ${styles.fw700} ${styles.fs24} mb-2`}
              >
                <span className={styles.clBrown}>Diga adeus aos pelos</span>
              </div>
              <div>
                <span
                  className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
                >
                  Deixe seu pet confortável. Facilite a limpeza da casa e saia
                  com suas melhores roupas sem se preocupar com os pelos!
                </span>
              </div>
            </div>
          </div>
          <div
            className={`d-flex flex-column col-sm-6 col-xs-12 order-last order-sm-first`}
            style={{ gap: "8px" }}
          >
            <div className="d-none d-sm-block">
              <div
                className={`${styles.logoFamily} ${styles.fw700} ${styles.fs24}`}
              >
                <span className={styles.clBrown}>Diga adeus aos pelos</span>
              </div>
              <div>
                <span
                  className={`${styles.clBrown} ${styles.fw500} ${styles.fs14}`}
                >
                  Deixe seu pet confortável. Facilite a limpeza da casa e saia
                  com suas melhores roupas sem se preocupar com os pelos!
                </span>
              </div>
            </div>
            <div>
              <span
                className={`${styles.clGreyDark} ${styles.fw600} ${styles.fs18}`}
              >
                Elefante Obeso Listrado ByeFur
              </span>
            </div>
            <div className={`d-flex`} style={{ gap: "8px" }}>
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "0px 12px 0px 0px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <Image
                  src="/images/trophy-medal.svg"
                  width={24}
                  height={24}
                  alt="Ícone de troféu"
                />
                <span>Premiado</span>
              </div>

              <div
                className={`${styles.clGreen} ${styles.bgGreen} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "0px 12px 0px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <Leaf className={`${styles.clGreen}`} size={16}></Leaf>
                <span>Sustentável</span>
              </div>
            </div>
            <div className={`d-flex justify-content-between`}>
              <div
                className={`d-flex align-items-center`}
                style={{ gap: "8px" }}
              >
                <div className={`d-flex`} style={{ gap: "2px" }}>
                  <Star
                    size={20}
                    weight="fill"
                    className={`${styles.clOrange}`}
                  ></Star>
                  <Star
                    size={20}
                    weight="fill"
                    className={`${styles.clOrange}`}
                  ></Star>
                  <Star
                    size={20}
                    weight="fill"
                    className={`${styles.clOrange}`}
                  ></Star>
                  <Star
                    size={20}
                    weight="fill"
                    className={`${styles.clOrange}`}
                  ></Star>
                  <Star
                    size={20}
                    weight="fill"
                    className={`${styles.clOrange}`}
                  ></Star>
                </div>
                <div>
                  <span
                    className={`${styles.fs14} ${styles.fw600} ${styles.clGreyDark}`}
                  >
                    5.0&nbsp;
                  </span>
                  <span
                    className={`${styles.fs14} ${styles.fw400} ${styles.clGreyLight}`}
                  >
                    (32)
                  </span>
                </div>
              </div>
              <div>
                <span
                  className={`${styles.fs14} ${styles.fw500} ${styles.clGreyLight}`}
                >
                  +3k&nbsp;
                </span>
                <span
                  className={`${styles.fs14} ${styles.fw400} ${styles.clGreyLight}`}
                >
                  vendidos
                </span>
              </div>
            </div>

            <div>
              <LinkButton link="teste" href="products/product">
                Compre agora
              </LinkButton>
            </div>
          </div>
          <div className={`col-sm-6 col-xs-12 d-flex mb-sm-3`}>
            <div
              src="/images/elephant-dog.jpg"
              alt="Cachorro mordendo um elefantinho"
              style={{
                borderRadius: "16px",
                width: "100%",
                height: "345px",
                backgroundImage: 'url("/images/elephant-dog.jpg")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  padding: "12px 0px",
                  height: "100%",
                }}
                className={`d-flex justify-content-end`}
              >
                <div
                  style={{ height: "100%" }}
                  className={`d-flex flex-column justify-content-between align-items-center`}
                >
                  <Image
                    src="/images/trophy-badge.svg"
                    width={66}
                    height={66}
                    alt="Troféu de mais vendido"
                    style={{ marginTop: "-7px" }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(34, 34, 34, 0.6)",
                      borderRadius: "24px",
                      padding: "6px 12px",
                      color: "white",
                      width: "fit-content",
                      fontSize: "10.5px",
                      fontWeight: "500",
                    }}
                    className={`d-flex justify-content-center align-items-center`}
                  >
                    <span>1/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main
        className="d-flex justify-content-center align-items-center mb-5"
        style={{ gap: "32px" }}
      >
        <div>
          <div
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs32} d-flex justify-content-center`}
          >
            <div style={{ marginRight: "4px" }}>
              <span className={styles.clOrange}>Ame </span>
              <span className={styles.clBrown}>todos.</span>
            </div>
          </div>
          <div
            style={{ marginBottom: "8px" }}
            className={`${styles.logoFamily} ${styles.fw700} ${styles.fs32} d-flex justify-content-center`}
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
        }}
      >
        <img
          src="/images/pets-3.svg"
          alt="Your Name"
          style={{
            objectFit: "contain",
            width: "100%",
          }}
        />
      </div>

      <footer className={`d-flex ${styles.flexColumn}`}>
        <div>
          <span className={`${styles.fw400} ${styles.fs14} ${styles.clGrey}`}>
            <Copyright></Copyright> Abstrakt Brands
          </span>
        </div>
        <div>
          <a
            className={`${styles.fw500} ${styles.fs14} ${styles.clGrey}`}
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </div>
      </footer>

      <style jsx>{`
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
