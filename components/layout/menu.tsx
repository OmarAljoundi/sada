"use client";
import Image from "next/image";
import Logo from "../../public/sada-logo.png";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { languages } from "@/app/i18n/settings";
const Menu: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng);
  const route = useRouter();
  console.log("lng", lng);
  return (
    <nav className="relative px-6 py-2 flex justify-between items-center z-10 bg-[#1c1c1c]">
      <a className="text-white text-3xl font-bold leading-none w-24" href="#">
        <Image src={Logo} alt="" />
      </a>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-white p-3">
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden   lg:mx-auto lg:flex lg:items-center lg:w-auto gap-8  w-1/2">
        {(
          t("Menu", { returnObjects: true }) as {
            label: string;
            href: string;
          }[]
        ).map((item) => (
          <li key={item.label}>
            <Link className="text-sm text-white hover:text-white " href="#">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Select onValueChange={(e) => route.push(`/${e}`)} defaultValue={lng}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((i) => (
              <SelectItem
                key={i.value}
                value={i.value}
                onClick={() => route.push(`/${i.value}`)}
              >
                {i.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default Menu;
