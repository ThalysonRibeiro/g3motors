import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAboult} id="servicos">
        <article className={styles.innerAboult}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.aboult.description}</p>
        </article>

        <div className={styles.bannerAboult}>
          <Image
            className={styles.imageAboult}
            alt="Imagem inlustrativa sobre a empresa"
            quality={100}
            fill={true}
            priority={true}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw ,60vw"
            src={object.metadata.aboult.banner.url}
          />
        </div>
      </section>
      <h1 className={styles.servicesTitle}>Conheça nossos serviços</h1>

      <section className={styles.services}>
        {object.metadata.sevices.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço da empresa"
                quality={100}
                fill={true}
                priority={true}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw ,60vw"
                src={service.image.url}
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  )
}