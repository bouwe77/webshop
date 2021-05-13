import NextHead from "next/head";
import { tw } from "twind";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>My Record Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>

      <main
        className={tw`h-screen bg-purple-400 flex items-center justify-center`}
      >
        <h1
          className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
        >
          My Record Store
        </h1>
        {children}
      </main>
    </>
  );
}
