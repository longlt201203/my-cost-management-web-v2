import {
  Button,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { listBoards } from "../../../apis/boards";
import BoardCard from "./BoardCard";
import BoardModal from "./BoardModal";
import { useDisclosure } from "@mantine/hooks";
import { BoardType } from "../../../../types/board";
import { CurrencyUnit } from "../../../../etc/currency-unit";
import { useState } from "react";

export default function DashboardBoardsPage() {
  const { t, i18n } = useTranslation();

  const emptyBoard: BoardType = {
    id: 0,
    title: "",
    language: i18n.language,
    currencyUnit: CurrencyUnit.kVND,
    createdAt: "",
    updatedAt: "",
  };
  const [board, setBoard] = useState(emptyBoard);
  const [boardModalOpened, boardModalControls] = useDisclosure(false);

  const openBoardModal = (board: BoardType) => {
    setBoard(board);
    boardModalControls.open();
  };

  const listBoardsQuery = useQuery({
    queryKey: ["listBoards"],
    queryFn: listBoards,
  });

  return (
    <>
      <Stack>
        <Title order={1}>{t("boards")}</Title>
        <Group>
          <Button color="secondary" onClick={() => openBoardModal(emptyBoard)}>
            {t("newBoard")}
          </Button>
        </Group>
        <SimpleGrid cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
          {listBoardsQuery.data?.map((item) => (
            <BoardCard
              key={item.id}
              board={item}
              onEdit={() => openBoardModal(item)}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <LoadingOverlay visible={listBoardsQuery.isLoading} />
      <BoardModal
        board={board}
        opened={boardModalOpened}
        onClose={boardModalControls.close}
      />
    </>
  );
}
