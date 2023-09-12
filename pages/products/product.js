import styles from "../../styles/ByeFur.module.css";
import Image from "next/image";
import {
  Armchair,
  CaretLeft,
  Cloud,
  Copyright,
  PawPrint,
  PuzzlePiece,
  SealCheck,
  ShareFat,
  ShieldCheck,
  Sparkle,
  Star,
} from "@phosphor-icons/react";
import Head from "next/head";
import LinkButton from "../../components/link-button";
import Button from "../../components/button";
import Header from "../../components/header";
import ProductInfo from "../../components/product-info";
import Badge from "../../components/badge";

export default function Product() {
  const avaliacoes = [
    {
      imagemPerfil: "/images/foto-0.png",
      nomeUsuario: "Mariana S.",
      nota: 5,
      data: "13 mai. 2023",
      descricao:
        "Meu cachorro adorou o Elefante Obeso! Ele brinca o dia todo com ele, e a qualidade é incrível. Recomendo para todos os pets!",
    },
    {
      imagemPerfil: "/images/foto-1.jpg",
      nomeUsuario: "Rafael L.",
      nota: 5,
      data: "06 fev. 2023",
      descricao:
        "O Elefante Obeso é o novo brinquedo favorito da minha gata. Ela não larga! Além disso, é super fácil de limpar, o que é ótimo",
    },
    {
      imagemPerfil: "/images/foto-2.jpg",
      nomeUsuario: "Ana P.",
      nota: 5,
      data: "22 dez. 2022",
      descricao:
        "Nossos cães estão sempre roendo brinquedos, mas o Elefante Obeso resistiu bravamente. Estou impressionada com a durabilidade e meus cães estão felizes!",
    },
    {
      imagemPerfil: "/images/foto-3.jpg",
      nomeUsuario: "Pedro R.",
      nota: 5,
      data: "21 dez. 2022",
      descricao:
        "O Elefante Obeso trouxe alegria instantânea para nossos gatos. A textura é perfeita para eles se aconchegarem. Ótimo produto!",
    },
  ];

  const descricoes = [
    {
      icone: <PawPrint size={16}></PawPrint>,
      titulo: "Diversão e Entretenimento para Pets",
      conteudo:
        "Apresentamos o Elefante Obeso da Byefur, um brinquedo macio projetado especialmente para trazer alegria e entretenimento aos seus queridos cães e gatos. Seu design adorável e textura suave farão com que seus amigos peludos se divirtam por horas a fio.",
    },
    {
      icone: <ShieldCheck size={16}></ShieldCheck>,
      titulo: "Durabilidade Pet-Testada",
      conteudo:
        "Sabemos que os animais de estimação adoram brincar com entusiasmo, e é por isso que o Elefante Obeso é construído para resistir a brincadeiras animadas. Com costuras reforçadas e materiais de alta qualidade, este brinquedo é durável o suficiente para aguentar as sessões de brincadeiras mais intensas.",
    },
    {
      icone: <Cloud size={16}></Cloud>,
      titulo: "Textura Segura e Confortável",
      conteudo:
        "A segurança e o conforto do seu pet são nossa prioridade. O Elefante Obeso é feito com materiais não tóxicos e macios ao toque, proporcionando uma experiência de brincadeira segura e agradável para cães e gatos de todos os tamanhos.",
    },
    {
      icone: <PuzzlePiece size={16}></PuzzlePiece>,
      titulo: "Estimule a Atividade Física e Mental",
      conteudo:
        "Manter seu animal de estimação ativo e mentalmente estimulado é essencial para seu bem-estar. O Elefante Obeso oferece oportunidades ideais para brincadeiras interativas, ajudando a satisfazer os instintos naturais de caça e promovendo um estilo de vida saudável.",
    },
    {
      icone: <Sparkle size={16}></Sparkle>,
      titulo: "Design Cativante para Pets e Donos",
      conteudo:
        "Com seu design de elefante obeso e olhos expressivos, este brinquedo não só atrai seus amigos peludos, mas também adiciona um toque de charme à sua casa. Será difícil resistir à sua aparência adorável enquanto ele proporciona diversão inesgotável aos seus animais de estimação.",
    },
    {
      icone: <Armchair size={16}></Armchair>,
      titulo: "Hora de Aconchego e Carinho",
      conteudo:
        "Além de ser um brinquedo empolgante, o Elefante Obeso oferece uma textura reconfortante que os cães e gatos adoram abraçar e morder. É o companheiro perfeito para momentos de relaxamento e aconchego.",
    },
    {
      icone: <SealCheck size={16}></SealCheck>,
      titulo: "Conclusão",
      conteudo:
        "Não perca a chance de proporcionar diversão e alegria aos seus cães e gatos com o Elefante Obeso da Byefur. Este brinquedo macio e durável é projetado para estimular a atividade física e mental dos seus animais de estimação, ao mesmo tempo em que adiciona um toque de charme à sua casa. Garanta agora mesmo o entretenimento e o conforto que seus pets merecem!",
    },
  ];

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
            {descricoes.map((descricao, i) => {
              return (
                <div className="col-md-6 col-sm-12 mb-3" key={i}>
                  <Badge className={`mb-2`}>
                    {descricao.icone}
                    <span className={`fw-semibold ${styles.fs10}`}>
                      {descricao.titulo}
                    </span>
                  </Badge>
                  <div>
                    <span className={`${styles.clGreyLight}`}>
                      {descricao.conteudo}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${styles.fs14} ${styles.fw500}`}>Avaliações</div>
          <div className="row">
            {avaliacoes.map((avaliacao, i) => {
              return (
                <div
                  className="col-md-6 col-sm-12 mb-3 gap-1 d-flex flex-column"
                  key={i}
                >
                  <div className="d-flex gap-2">
                    <Image
                      src={avaliacao.imagemPerfil}
                      alt="foto de perfil"
                      width={24}
                      height={24}
                      className="rounded-circle"
                    />
                    <span className={`${styles.fs14} ${styles.fw500}`}>
                      {avaliacao.nomeUsuario}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={`d-flex`} style={{ gap: "2px" }}>
                      {[...Array(avaliacao.nota)].map((e, i) => {
                        return (
                          <Star
                            key={i}
                            size={20}
                            weight="fill"
                            className={`${styles.clOrange}`}
                          ></Star>
                        );
                      })}
                    </div>
                    <span className={`${styles.clGreyLight}`}>
                      {avaliacao.data}
                    </span>
                  </div>
                  <div>
                    <span className={`${styles.clGreyLight}`}>
                      {avaliacao.descricao}
                    </span>
                  </div>
                </div>
              );
            })}
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
