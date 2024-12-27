import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function DashboardHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Title order={1}>{t("home")}</Title>
    </>
  );
}
