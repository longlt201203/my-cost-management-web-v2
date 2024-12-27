import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function DashboardBoardsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Title order={1}>{t("boards")}</Title>
    </>
  );
}
