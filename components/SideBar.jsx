import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";

const SideBar = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="/"
          >
            <Image
              src="/assets/icons/trending.svg"
              width="24"
              height="24"
              alt={dict.trending}
            />
            <span>{dict.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="/"
          >
            <Image
              src="/assets/icons/newRelease.svg"
              width="24"
              height="24"
              alt={dict.newReleases}
            />
            <span>{dict.newReleases}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="/"
          >
            <Image
              src="/assets/icons/commingSoon.svg"
              width="24"
              height="24"
              alt={dict.comingSoon}
            />
            <span>{dict.comingSoon}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="/"
          >
            <Image
              src="/assets/icons/favourite.svg"
              width="24"
              height="24"
              alt={dict.favourites}
            />
            <span>{dict.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="/"
          >
            <Image
              src="/assets/icons/watchLater.svg"
              width="24"
              height="24"
              alt={dict.watchLater}
            />
            <span>{dict.watchLater}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
