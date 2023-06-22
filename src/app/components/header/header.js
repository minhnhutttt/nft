"use client"
import Link from 'next/link';
import Menu from './menu/menu';
import { usePathname } from 'next/navigation'
export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  return (
    <header id="header">
      <div className="flex h-20 items-center justify-between border-b border-solid border-b-[#1C2633] bg-[#c7e8ff] pb-0 pl-5 pr-0  pt-[5px] md:h-[124px] md:pl-[45px] md:pr-0 md:pt-2.5">
        <Link href="/">
          <img className="max-md:max-w-[200px]" src="/logo.png" alt="" />
        </Link>
        <Menu isHome={isHomePage} />
      </div>
    </header>
  );
}