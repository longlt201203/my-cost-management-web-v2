import {
  Button,
  Group,
  LoadingOverlay,
  Modal,
  ModalProps,
  Stack,
  TextInput,
} from "@mantine/core";
import { BoardType } from "../../../../types/board";
import { useTranslation } from "react-i18next";
import CurrencySelect from "../../../components/CurrencySelect";
import LanguageSelect from "../../../components/LanguageSelect";

export interface BoardModalProps extends ModalProps {
  board: BoardType;
  isLoading?: boolean;
}

export default function BoardModal(props: BoardModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      {...props}
      withCloseButton={false}
      closeOnClickOutside={props.isLoading}
      title={props.board.id ? t("updateBoard") : t("newBoard")}
    >
      <Stack gap="xs">
        <TextInput label={t("title")} placeholder={t("enterTitle")} />
        {!props.board.id && (
          <>
            <CurrencySelect
              label={t("currencyUnit")}
              placeholder={t("selectCurrencyUnit")}
            />
            <LanguageSelect
              label={t("language")}
              placeholder={t("selectLanguage")}
            />
          </>
        )}
        <Group justify="end">
          <Button color="red" onClick={props.onClose}>
            {t("cancel")}
          </Button>
          <Button color="secondary">{t("save")}</Button>
        </Group>
      </Stack>
      <LoadingOverlay visible={props.isLoading} />
    </Modal>
  );
}
