import {
  ArrowRightEndOnRectangleIcon,
  LanguageIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {
  ActionIcon,
  Affix,
  Box,
  Menu,
  Stack,
  Tabs,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoginTab from "./Login";
import { Languages } from "../../../etc/i18n";
import { useTranslation } from "react-i18next";
import RegisterTab from "./Register";

export default function AuthPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState(
    searchParams.get("tab") || "login"
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (searchParams.get("status") == "success") {
      window.location.href = "/";
    } else {
      const error = searchParams.get("error");
      if (error) {
      }
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ tab: currentTab });
  }, [currentTab]);

  return (
    <>
      <Stack
        className="mx-auto max-w-sm min-h-screen"
        justify="center"
        align="center"
      >
        <Title>{t(currentTab)}</Title>
        <Tabs
          value={currentTab}
          onChange={(v) => setCurrentTab(v || "login")}
          className="w-full"
          color="primary"
        >
          <Tabs.List justify="center">
            <Tabs.Tab
              value="login"
              leftSection={<ArrowRightEndOnRectangleIcon className="size-4" />}
            >
              {t("login")}
            </Tabs.Tab>
            <Tabs.Tab
              value="register"
              leftSection={<UserPlusIcon className="size-4" />}
            >
              {t("register")}
            </Tabs.Tab>
          </Tabs.List>

          <Box className="p-8 shadow-lg mt-8 rounded-md">
            <Tabs.Panel value="login">
              <LoginTab />
            </Tabs.Panel>
            <Tabs.Panel value="register">
              <RegisterTab />
            </Tabs.Panel>
          </Box>
        </Tabs>
      </Stack>
      <Affix position={{ bottom: 24, right: 24 }}>
        <Menu trigger="hover">
          <Menu.Target>
            <ActionIcon size="lg" radius="xl" color="secondary">
              <LanguageIcon className="size-5" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {Object.entries(Languages).map(([key, value]) => (
              <Menu.Item
                onClick={() => {
                  i18n.changeLanguage(key);
                }}
              >
                {value}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Affix>
    </>
  );
}
