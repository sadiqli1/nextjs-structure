"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Products", key: "products" },
  { name: "Pricing", key: "pricing" },
  { name: "Blog", key: "blog" },
];

export default function Header({ lang }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (key) => {
    let newPath = pathname;
  
    if (key !== lang) {
      newPath = pathname.replace(/^\/[a-z]{2}/, `/${key}`);
      router.push(newPath);
    }
  };
  
  return (
    <header className="bg-[#1b1bd6] text-white">
      <div className="container py-2 flex gap-4 justify-between	">
        <Link className="hover:text-[#b19100] cursor-pointer" href={`/${lang}`}>
          Logo
        </Link>
        <ul className="flex gap-4">
          {pages?.map((value, index) => (
            <li key={index}>
              <Link href={`/${lang}/${value?.key}`}>{value?.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          <li>
            <button onClick={() => changeLanguage("az")}>Az</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("en")}>En</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("ru")}>Ru</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
