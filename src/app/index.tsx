import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../etc/theme";
import { RouterProvider } from "react-router-dom";
import router from "../etc/router";
import { I18nextProvider } from "react-i18next";
import i18n from "../etc/i18n";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </MantineProvider>
    </I18nextProvider>
  );
}
