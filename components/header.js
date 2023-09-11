import Link from "next/link";
import styles from "../styles/ByeFur.module.css";
import Image from "next/image";
import Logo from "./logo";
import { List } from "@phosphor-icons/react";
import Button from "./button";

export default function Header({ style, className }) {
  return (
    <header className={`container-fluid p-3 mb-3 ${className}`} style={style}>
      <div className={`d-flex justify-content-between`}>
        <Link className={`d-flex gap-2 text-decoration-none`} href={"/"}>
          <Image
            src="/images/logo.svg"
            height={24}
            width={24}
            alt="Logomarca"
          />
          <Logo size={16} className={`fw-semibold`}></Logo>
        </Link>
        <Button className={`bg-transparent p-0 m-0`}>
          <List size={24} className={styles.clOrange}></List>
        </Button>
      </div>
    </header>
  );
}
