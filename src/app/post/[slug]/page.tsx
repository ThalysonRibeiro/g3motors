

import { Suspense } from "react";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Metadata } from "next";
import { Content } from "./components/content";
import { LoadingPost } from "./components/loading";

// Define the type for params
interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params;
  try {
    const { objects }: PostProps = await getItemBySlug(slug)
      .catch(() => ({
        title: "G3 Motors oficina em Natal-RN",
        description: "Generated by create next app",
      }));

    return {
      title: `G3 Motors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
        title: `G3 Motors - ${objects[0].title}`,
        images: [`${objects[0].metadata.banner.url}`]
      },
      robots: {
        index: true,
        follow: true,
        noarchive: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        }
      }
    };
  } catch (error) {
    return {
      title: "G3 Motors oficina em Natal-RN",
      description: "Generated by create next app",
    };
  }
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  return (
    <>
      <Suspense fallback={<LoadingPost />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}