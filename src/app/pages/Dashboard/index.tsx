import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  Menu,
  NavLink,
  Text,
  Title,
} from "@mantine/core";
import McmIcon from "../../icons/mcm.icon";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  ChartBarSquareIcon,
  RectangleGroupIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { Languages } from "../../../etc/i18n";
import { useAuth } from "../../contexts/auth.context";
import { useEffect } from "react";

export default function DashboardPage() {
  const [opened, { toggle, close }] = useDisclosure();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const keys = pathname.split("/").slice(1);

  const { profile, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !profile) {
      window.location.href = "/auth";
    }
  }, [isLoading]);

  const navItems = [
    {
      key: "",
      label: t("home"),
      icon: <HomeIcon className="size-4" />,
    },
    {
      key: "boards",
      label: t("boards"),
      icon: <TableCellsIcon className="size-4" />,
    },
    {
      key: "analytics",
      label: t("analytics"),
      icon: <ChartBarSquareIcon className="size-4" />,
    },
    {
      key: "categories",
      label: t("categories"),
      icon: <RectangleGroupIcon className="size-4" />,
    },
  ];

  const handleLogout = () => {
    const callback = encodeURIComponent(`${window.location.origin}/auth`);
    const logoutUrl = `/api/auth/2/logout?callback=${callback}`;
    window.location.href = logoutUrl;
  };

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "xs", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Group gap="xs" visibleFrom="xs">
            <McmIcon size={48} />
            <Title order={2}>MCM App</Title>
          </Group>
          <Group gap="xs">
            <Button
              color="secondary"
              variant="transparent"
              rightSection={
                <ArrowRightStartOnRectangleIcon className="size-6" />
              }
              onClick={handleLogout}
            >
              {t("logout")}
            </Button>
            <Menu trigger="hover">
              <Menu.Target>
                <ActionIcon variant="transparent" color="secondary">
                  <LanguageIcon className="size-6" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                {Object.entries(Languages).map(([key, value]) => (
                  <Menu.Item
                    key={key}
                    onClick={() => {
                      i18n.changeLanguage(key);
                    }}
                  >
                    {value}
                    {i18n.language === key ? " ✓" : ""}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group gap="xs" hiddenFrom="xs">
          <McmIcon size={48} />
          <Title order={2}>MCM App</Title>
        </Group>
        {navItems.map((item) => (
          <NavLink
            key={item.key}
            label={item.label}
            leftSection={item.icon}
            color="primary"
            variant="filled"
            component={Link}
            active={keys.includes(item.key)}
            to={`/${item.key}`}
            onClick={close}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Text ta="center" size="xs">
          &copy; 2024 Le Thanh Long, Bui Phan Long. All rights reserved.
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
