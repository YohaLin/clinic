import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const locales: Record<string, { title: string }> = {
  en: { title: "English" },
  "zh-TW": { title: "繁體中文" },
};

const Footer = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  // 選擇不同語言網址也要改變
  const changeLanguageAndNavigate = (locale: string) => {
    i18n.changeLanguage(locale);
    const newUrl = window.location.pathname.replace(`/${lang}`, `/${locale}`);
    navigate(newUrl);
  };

  // url 改 lang 也要跟著改語言
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="fixed bottom-0 left-0 flex flex-col justify-center items-center w-full h-[58px] md:flex-row md:h-[52p] md:gap-3 bg-neutral-400">
      <p className="text-d2 font-normal">
        Copyright © 2024 Dental clinic appointment system
      </p>
      <div className="flex justify-center items-center">
        <p className="text-d1">登入管理系統</p>
        {/* 選擇多國語系 */}
        <select
          className="ml-2 p-1 bg-white border border-neutral-300 rounded"
          value={i18n.resolvedLanguage}
          onChange={(e) => changeLanguageAndNavigate(e.target.value)}
        >
          {Object.keys(locales).map((locale) => (
            <option key={locale} value={locale}>
              {locales[locale].title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Footer;
