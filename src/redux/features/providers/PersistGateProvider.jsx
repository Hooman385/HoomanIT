"use client"
import { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function PersistGateProvider({children}) {
  return (
    <PersistGate persistor={persistor}>
        {children}
    </PersistGate>
  )
}

export default PersistGateProvider