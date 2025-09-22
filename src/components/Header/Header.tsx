import { BASE_PATH } from "@/constants";
import Image from "next/image";
import { Units } from "../Units";

export function Header() {
  return (
    <header>
      <Image
        src={`${BASE_PATH}/logo.svg`}
        alt="Weather app logo"
        width={138}
        height={28}
        priority
      />
      <Units />
    </header>
  );
}
