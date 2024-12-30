import { Select, SelectProps } from "@mantine/core";
import { CurrencyUnit } from "../../etc/currency-unit";

export interface CurrencySelectProps extends SelectProps {}

export default function CurrencySelect(props: CurrencySelectProps) {
  return (
    <Select
      {...props}
      data={Object.keys(CurrencyUnit)}
      renderOption={({ option }) =>
        `${option.value} (${
          CurrencyUnit[option.value as keyof typeof CurrencyUnit]
        })`
      }
    />
  );
}
