import {
  ActionIcon,
  Box,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { BoardType } from "../../../../types/board";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Languages } from "../../../../etc/i18n";
import { CurrencyUnit } from "../../../../etc/currency-unit";

export interface BoardCardProps {
  board: BoardType;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function BoardCard({ board, onEdit, onDelete }: BoardCardProps) {
  const { t } = useTranslation();

  return (
    <Card shadow="sm">
      <Group gap="xs" justify="space-between">
        <Box component={Link} to={`/boards/${board.id}`} className="flex-grow">
          <Title order={4}>{board.title}</Title>
          <Text>
            {t("currencyUnit")}:{" "}
            {CurrencyUnit[board.currencyUnit as keyof typeof CurrencyUnit]}
          </Text>
          <Text>
            {t("language")}:{" "}
            {Languages[board.language as keyof typeof Languages]}
          </Text>
        </Box>
        <Stack>
          <ActionIcon variant="outline" color="secondary" onClick={onEdit}>
            <PencilSquareIcon className="size-4" />
          </ActionIcon>
          <ActionIcon variant="outline" color="red" onClick={onDelete}>
            <TrashIcon className="size-4" />
          </ActionIcon>
        </Stack>
      </Group>
    </Card>
  );
}
