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

export default function DashboardPage() {
  const [opened, { toggle }] = useDisclosure();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const keys = pathname.split("/").slice(1);

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

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group gap="xs">
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
                    onClick={() => {
                      i18n.changeLanguage(key);
                    }}
                  >
                    {value}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
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
