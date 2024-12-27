import {
  LockClosedIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button, Stack, TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function RegisterTab() {
  const { t } = useTranslation();

  return (
    <Stack>
      <TextInput
        leftSection={<UserCircleIcon className="size-5" />}
        label="Email"
        placeholder="Email"
      />
      <TextInput
        leftSection={<PhoneIcon className="size-5" />}
        label={t("phone")}
        placeholder={t("phone")}
      />
      <TextInput
        leftSection={<LockClosedIcon className="size-5" />}
        label={t("password")}
        placeholder={t("password")}
      />
      <TextInput
        leftSection={<LockClosedIcon className="size-5" />}
        label={t("confirmPassword")}
        placeholder={t("confirmPassword")}
      />
      <Button color="primary">{t("register")}</Button>
    </Stack>
  );
}
