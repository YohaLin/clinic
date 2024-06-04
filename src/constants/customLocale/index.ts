import { zhTW } from "date-fns/locale";

// 自定義月份
export const customLocale = {
  ...zhTW,
  localize: {
    ...zhTW.localize,
    month: (n: number) => {
      const monthNames = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
      return monthNames[n];
    },
  },
};