import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "@mysten/dapp-kit/dist/index.css";
import "@radix-ui/themes/styles.css";

import { getFullnodeUrl } from "@mysten/sui.js/client";
import {
  SuiClientProvider,
  WalletProvider,
  createNetworkConfig,
} from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import './theme-config.css';

// import App from "./pages/App.tsx";
// import Quests from "./pages/Quests.tsx";
// import Quest from "./pages/Quest.tsx";

import { ComingSoon } from "./pages/ComingSoon.tsx"

const queryClient = new QueryClient();

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />,
    // element: <App/>,
  },
  // {
  //   path: "/quests",
  //   element: <Quests />
  // },
  // {
  //   path: "/quest/:questId/chapter/:chapterId",
  //   element: <Quest />
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
          <WalletProvider autoConnect>
            <RouterProvider router={router} />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
);
