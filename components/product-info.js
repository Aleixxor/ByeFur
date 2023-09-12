import styles from "../styles/ByeFur.module.css";
import Image from "next/image";
import { Leaf, Minus, PawPrint, Plus, Star } from "@phosphor-icons/react";
import LinkButton from "./link-button";
import Button from "./button";
import { useEffect, useState } from "react";
import { Timer } from "./timer";
import Badge from "./badge";

export default function ProductInfo({ style, className }) {
  const [quantidade, setQuantidade] = useState(1);
  const [unidadesDisponiveis, setUnidadesDisponiveis] = useState(3);

  const handleSetQuantidade = (qtd) => {
    let quantidadeAux = quantidade + qtd;
    if (quantidadeAux < 1) quantidadeAux = 0;
    if (quantidadeAux > unidadesDisponiveis)
      quantidadeAux = unidadesDisponiveis;

    setQuantidade(quantidadeAux);
  };

  const handleSetUnidadesDisponiveis = (qtd) => {
    let quantidadeAux = unidadesDisponiveis + qtd;
    if (quantidadeAux < 0) {
      quantidadeAux = 0;
      handleSetQuantidade(-qtd);
    }
    if (quantidadeAux > unidadesDisponiveis)
      quantidadeAux = unidadesDisponiveis;

    setUnidadesDisponiveis(quantidadeAux);
  };
  return (
    <>
      <div className={`col-sm-6 col-xs-12 d-flex mb-3`}>
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
      <div className={`col-sm-6 col-xs-12 d-flex flex-column gap-2`}>
        <div>
          <span
            className={`${styles.clGreyDark} ${styles.fw600} ${styles.fs18}`}
          >
            Elefante Obeso Listrado ByeFur
          </span>
        </div>
        <div className={`d-flex`} style={{ gap: "8px" }}>
          <Badge style={{ padding: "0px 12px 0px 0px" }}>
            <Image
              src="/images/trophy-medal.svg"
              width={24}
              height={24}
              alt="Ícone de troféu"
            />
            <span className={`${styles.fw500} ${styles.fs10}`}>Premiado</span>
          </Badge>
          <Badge className={`${styles.clGreen} ${styles.bgGreen}`}>
            <Leaf className={`${styles.clGreen}`} size={16}></Leaf>
            <span className={`${styles.fw500} ${styles.fs10}`}>
              Sustentável
            </span>
          </Badge>
        </div>
        <div className={`d-flex justify-content-between`}>
          <div className={`d-flex align-items-center`} style={{ gap: "8px" }}>
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

        <div className={`d-flex justify-content-between row`}>
          <div className="col-6">
            <div className={`${styles.clGreyLight} ${styles.fs10}`}>
              <span>
                De:{" "}
                <span className="text-decoration-line-through">R$ 62.97</span>
              </span>
            </div>
            <div className={`fs-2 fw-bold`}>
              <span>R$ 49.97</span>
            </div>
          </div>
          <div className="d-flex col-6">
            <div className="input-group mb-3">
              <Button
                className={`${styles.borderGrayLighter} rounded-0 rounded-start input-group-text`}
                outlined
                onClick={() => handleSetQuantidade(-1)}
              >
                <Minus></Minus>
              </Button>
              <input
                type="text"
                className={`form-control text-center ${styles.borderGrayLighter}`}
                aria-label="Amount (to the nearest dollar)"
                value={quantidade}
                onChange={(event) => handleSetQuantidade(event.target.value)}
              />
              <Button
                className={`${styles.borderGrayLighter} rounded-0 rounded-end input-group-text`}
                outlined
                onClick={() => handleSetQuantidade(1)}
              >
                <Plus></Plus>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <LinkButton
            href="#"
            className={`${styles.clOrange} ${styles.bgOrange20}`}
          >
            Oferta acaba em{" "}
            {/* <strong>
              {tempoRestante.horas}:{tempoRestante.minutos}:
              {tempoRestante.segundos}
            </strong> */}
            <Timer className="fw-bold"></Timer>
          </LinkButton>
        </div>
        <div>
          <Button
            onClick={() => handleSetUnidadesDisponiveis(-quantidade)}
            className={`w-100`}
          >
            Compre agora
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Image
            src="/images/payments/paypal.svg"
            width={40}
            height={40}
            alt="Ícone do Paypal"
          />
          <Image
            src="/images/payments/master-card.svg"
            width={40}
            height={40}
            alt="Ícone do Master Card"
          />
          <Image
            src="/images/payments/visa.svg"
            width={40}
            height={40}
            alt="Ícone do Visa"
          />
          <Image
            src="/images/payments/boleto.png"
            width={36.355}
            height={24}
            alt="Ícone do Boleto"
          />
          <Image
            src="/images/payments/pix.png"
            width={40}
            height={40}
            alt="Ícone do Pix"
          />
          <span className={`${styles.clOrange} ${styles.fw500} ${styles.fs14}`}>
            +44
          </span>
        </div>
        <div className="d-flex">
          <span
            className={`${styles.clGreyLight} ${styles.fs14} ${styles.fw500} me-2`}
          >
            Entrega de 1 a 2 meses
          </span>
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
            <span>Frete grátis</span>
          </div>
        </div>

        <div>
          <span className={`${styles.fs14} ${styles.fw500}`}>
            {unidadesDisponiveis} unidades disponíveis
          </span>
        </div>
      </div>
    </>
  );
}
