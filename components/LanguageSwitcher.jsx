"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "বাংলা",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    /* let path = pathname;
    if (pathname.includes(selectedLanguage.code)) {
      path = pathname.replace(selectedLanguage.code, lang);
    } */
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "বাংলা",
    });
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-8"
            src={
              selectedLanguage.language === "বাংলা"
                ? "/assets/bd.png"
                : "/assets/usa.png"
            }
            alt={selectedLanguage.language}
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-dark p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer"
              >
                <Image
                  className="max-w-8"
                  src={
                    entry.language === "বাংলা"
                      ? "/assets/bd.png"
                      : "/assets/usa.png"
                  }
                  alt={entry.language}
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
