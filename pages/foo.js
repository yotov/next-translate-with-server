import React from "react";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import Header from "../components/header";

export default function Home() {
  const { t } = useTranslation();
  const description = t("home:description");

  return (
    <>
      <Header />
      <p>{description}</p>
      <Link href="/foo" lang="es">
        <a>Spanish</a>
      </Link>
      <br />
      <Link href="/foo" lang="en">
        <a>English</a>
      </Link>
      <br />
      <Link href="/ca" lang="ca">
        <a>Català</a>
      </Link>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: { foo: "bar" },
  };
};
