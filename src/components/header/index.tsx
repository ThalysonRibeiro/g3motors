"use client"
import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";


export function Header() {
  const [top, setTop] = useState(true);

  const scrollHandle = () => {

    window.scrollY > 10 ? setTop(false) : setTop(true);

  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle)

    return () => window.removeEventListener("scroll", scrollHandle)

  }, [top])

  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">G3 Motors</Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>

        </div>
      </div>
    </header>
  )
}