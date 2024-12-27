import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { LoginDto } from "../../../types/auth";

export default function LoginTab() {
  const { t } = useTranslation();

  const form = useForm<LoginDto>();

  const handleSubmit = () => {
    const values = form.getValues();
    const code = btoa(`${values.email}:${values.password}`);
    const searchParams = new URLSearchParams();
    searchParams.set("code", code);
    searchParams.set("callback", `${window.location.origin}/auth`);
    window.location.href = `/api/auth/2/basic?${searchParams.toString()}`;
  };

  return (
    <Stack>
      <TextInput
        label="Email"
        placeholder="Email"
        leftSection={<UserCircleIcon className="size-5 " />}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label={t("password")}
        placeholder={t("password")}
        leftSection={<LockClosedIcon className="size-5" />}
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
      <Group justify="space-between">
        <Checkbox defaultChecked label={t("rememberMe")} color="secondary" />
        <Text size="sm">{t("forgotPassword")}</Text>
      </Group>
      <Button color="primary" onClick={handleSubmit}>
        {t("login")}
      </Button>
    </Stack>
  );
}
