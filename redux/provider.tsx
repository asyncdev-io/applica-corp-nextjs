"use client";
import { Provider } from "react-redux";

import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  //  TODO: Fix this ts-ignore by adding the correct type to the Provider component
  // @ts-ignore
  return <Provider store={store}>{children}</Provider>;
}
