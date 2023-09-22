"use client";
import { FC } from "react";
const ClientProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <header>{children}</header>;
};

export default ClientProvider;
