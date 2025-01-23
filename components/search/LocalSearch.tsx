"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFormUrlQuery } from "@/lib/url";
interface Props {
  placeholder: string;
  imgSrc: string;
  otherClasses?: string;
  route: string;
}

const LocalSearch = ({ placeholder, imgSrc, otherClasses, route }: Props) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathName == route) {
          const newUrl = removeKeysFormUrlQuery({
            keysToRemove: ["query"],
            params: searchParams.toString(),
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, route, router, searchParams]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow gap-4 rounded-[10px] px-4 items-center ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search..."
        className="cursor-pointer"
      />
      <Input
        type="string"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default LocalSearch;
