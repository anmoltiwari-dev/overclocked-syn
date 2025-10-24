import { getTranslations } from "next-intl/server";
import React from "react";

const Homepage = async () => {
  const t = await getTranslations("Homepage");
  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
};

export default Homepage;
