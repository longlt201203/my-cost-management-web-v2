import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function DashboardAnalyticsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Title order={1}>{t("analytics")}</Title>
    </>
  );
}
