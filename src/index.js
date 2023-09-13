import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import WalletAdapter from "./WalletAdapter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ChakraProvider>
      <WalletAdapter />
    </ChakraProvider>
  </StrictMode>
);
