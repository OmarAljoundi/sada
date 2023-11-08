"use client";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("/en");
  }, []);
  return <></>;
};

export default MainPage;
