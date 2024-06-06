// config file
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// 偵測瀏覽器語言
import LanguageDetector from 'i18next-browser-languagedetector';
// 用來加載語言檔案
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    lng: "zh-TW", // 一進入頁面，初始的語言
    fallbackLng: 'zh-TW', // 如果找不到區域設定的話，就用英文
    returnEmptyString: false // 如果是空值，就會顯示成字串
  });

export default i18n;