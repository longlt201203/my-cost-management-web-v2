import { Select, SelectProps } from "@mantine/core";
import { Languages } from "../../etc/i18n";

export interface LanguageSelectProps extends SelectProps {}

export default function LanguageSelect(props: LanguageSelectProps) {
  return (
    <Select
      {...props}
      data={Object.keys(Languages)}
      renderOption={({ option, checked }) =>
        `${Languages[option.value as keyof typeof Languages]}${
          checked ? " ✓" : ""
        }`
      }
    />
  );
}
