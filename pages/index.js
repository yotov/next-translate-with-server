import React from "react";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import Header from "../components/header";

export default function Home() {
  const { t, lang } = useTranslation();
  const description = t("home:description");

  return (
    <>
      <Header />
      <p>{description}</p>
      <Link href="/foo">
        <a>Open foo page in {lang}</a>
      </Link>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  console.log(req.lang);
  return {
    props: { foo: "bar" },
  };
};
