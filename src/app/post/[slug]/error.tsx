"use client"

import Link from "next/link"
import styles from "./error.module.scss";

export default function Error() {
  return (
    <div className={styles.error}>
      <h1 className={styles.title}>404</h1>
      <h2>Ops essa página não existe</h2>
      <Link className={styles.link}
        href="/">
        Voltar para home
      </Link>
    </div>
  )
}