import styles from "../../styles/ByeFur.module.css";
import Image from "next/image";
import {
  Armchair,
  CaretLeft,
  Cloud,
  Copyright,
  Leaf,
  List,
  PawPrint,
  PuzzlePiece,
  SealCheck,
  ShareFat,
  ShieldCheck,
  Sparkle,
  Star,
  StarFour,
} from "@phosphor-icons/react";
import { relative } from "path";
import Head from "next/head";
import LinkButton from "../../components/link-button";
import Button from "../../components/button";
import Logo from "../../components/logo";
import Header from "../../components/header";
import ProductInfo from "../../components/product-info";

export default function Product() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ByeFur</title>
      </Head>

      <Header></Header>

      <main className="container-fluid d-flex justify-content-between align-items-center mb-3">
        <LinkButton href={"/"} outlined>
          <CaretLeft size={24}></CaretLeft>
        </LinkButton>
        <Button outlined>
          <span>Compartilhar</span>
          <ShareFat size={24}></ShareFat>
        </Button>
      </main>
      <main
        className={`container-fluid d-flex justify-content-center align-items-center mb-5 row`}
      >
        <ProductInfo></ProductInfo>
        <div className="d-flex flex-column gap-3">
          <div className={`${styles.fs14} ${styles.fw500}`}>Descrição</div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <PawPrint size={16}></PawPrint>
                <span>Diversão e Entretenimento para Pets</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Apresentamos o Elefante Obeso da Byefur, um brinquedo macio
                  projetado especialmente para trazer alegria e entretenimento
                  aos seus queridos cães e gatos. Seu design adorável e textura
                  suave farão com que seus amigos peludos se divirtam por horas
                  a fio.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <ShieldCheck size={16}></ShieldCheck>
                <span>Durabilidade Pet-Testada</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Sabemos que os animais de estimação adoram brincar com
                  entusiasmo, e é por isso que o Elefante Obeso é construído
                  para resistir a brincadeiras animadas. Com costuras reforçadas
                  e materiais de alta qualidade, este brinquedo é durável o
                  suficiente para aguentar as sessões de brincadeiras mais
                  intensas.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <Cloud size={16}></Cloud>
                <span>Textura Segura e Confortável</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  A segurança e o conforto do seu pet são nossa prioridade. O
                  Elefante Obeso é feito com materiais não tóxicos e macios ao
                  toque, proporcionando uma experiência de brincadeira segura e
                  agradável para cães e gatos de todos os tamanhos.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <PuzzlePiece size={16}></PuzzlePiece>
                <span>Estimule a Atividade Física e Mental</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Manter seu animal de estimação ativo e mentalmente estimulado
                  é essencial para seu bem-estar. O Elefante Obeso oferece
                  oportunidades ideais para brincadeiras interativas, ajudando a
                  satisfazer os instintos naturais de caça e promovendo um
                  estilo de vida saudável.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <Sparkle size={16}></Sparkle>
                <span>Design Cativante para Pets e Donos</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Com seu design de elefante obeso e olhos expressivos, este
                  brinquedo não só atrai seus amigos peludos, mas também
                  adiciona um toque de charme à sua casa. Será difícil resistir
                  à sua aparência adorável enquanto ele proporciona diversão
                  inesgotável aos seus animais de estimação.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <Armchair size={16}></Armchair>
                <span>Hora de Aconchego e Carinho</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Além de ser um brinquedo empolgante, o Elefante Obeso oferece
                  uma textura reconfortante que os cães e gatos adoram abraçar e
                  morder. É o companheiro perfeito para momentos de relaxamento
                  e aconchego.
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <div
                className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center`}
                style={{
                  padding: "4px 12px 4px 8px",
                  fontSize: "10.5px",
                  fontWeight: "500",
                  width: "fit-content",
                  gap: "4px",
                  borderRadius: "12px",
                }}
              >
                <SealCheck size={16}></SealCheck>
                <span>Conclusão</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Não perca a chance de proporcionar diversão e alegria aos seus
                  cães e gatos com o Elefante Obeso da Byefur. Este brinquedo
                  macio e durável é projetado para estimular a atividade física
                  e mental dos seus animais de estimação, ao mesmo tempo em que
                  adiciona um toque de charme à sua casa. Garanta agora mesmo o
                  entretenimento e o conforto que seus pets merecem!
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.fs14} ${styles.fw500}`}>Avaliações</div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3 gap-1 d-flex flex-column">
              <div className="d-flex gap-2">
                <Image
                  src="/images/profile.jpg"
                  alt="foto de perfil"
                  width={24}
                  height={24}
                  className="rounded-circle"
                />
                <span className={`${styles.fs14} ${styles.fw500}`}>
                  Mariana S.
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
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
                <span className={`${styles.clGreyLight}`}>13 mai. 2023</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Meu cachorro adorou o Elefante Obeso! Ele brinca o dia todo
                  com ele, e a qualidade é incrível. Recomendo para todos os
                  pets!
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3 gap-1 d-flex flex-column">
              <div className="d-flex gap-2">
                <Image
                  src="/images/profile.jpg"
                  alt="foto de perfil"
                  width={24}
                  height={24}
                  className="rounded-circle"
                />
                <span className={`${styles.fs14} ${styles.fw500}`}>
                  Mariana S.
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
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
                <span className={`${styles.clGreyLight}`}>13 mai. 2023</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Meu cachorro adorou o Elefante Obeso! Ele brinca o dia todo
                  com ele, e a qualidade é incrível. Recomendo para todos os
                  pets!
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3 gap-1 d-flex flex-column">
              <div className="d-flex gap-2">
                <Image
                  src="/images/profile.jpg"
                  alt="foto de perfil"
                  width={24}
                  height={24}
                  className="rounded-circle"
                />
                <span className={`${styles.fs14} ${styles.fw500}`}>
                  Mariana S.
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
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
                <span className={`${styles.clGreyLight}`}>13 mai. 2023</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Meu cachorro adorou o Elefante Obeso! Ele brinca o dia todo
                  com ele, e a qualidade é incrível. Recomendo para todos os
                  pets!
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3 gap-1 d-flex flex-column">
              <div className="d-flex gap-2">
                <Image
                  src="/images/profile.jpg"
                  alt="foto de perfil"
                  width={24}
                  height={24}
                  className="rounded-circle"
                />
                <span className={`${styles.fs14} ${styles.fw500}`}>
                  Mariana S.
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
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
                <span className={`${styles.clGreyLight}`}>13 mai. 2023</span>
              </div>
              <div>
                <span className={`${styles.clGreyLight}`}>
                  Meu cachorro adorou o Elefante Obeso! Ele brinca o dia todo
                  com ele, e a qualidade é incrível. Recomendo para todos os
                  pets!
                </span>
              </div>
            </div>
          </div>
        </div>
        <Button outlined className={"border-0 mt-3"}>
          Ver mais
        </Button>
      </main>

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
        main {
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
