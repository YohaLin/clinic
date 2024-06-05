import Step from "../stepEnum";
import avatar from "../../../public/avatar.svg"

const stepperList = [
  {
    step: Step.items,
    text: "選項目",
    value: "items",
  },
  {
    step: Step.doctors,
    text: "選醫師",
    value: "doctors",
  },
  {
    step: Step.dates,
    text: "選日期",
    value: "dates",
  },
  {
    step: Step.datas,
    text: "填資料",
    value: "datas",
  },
  {
    step: Step.complete,
    text: "完成",
    value: "complete",
  },
];

const itemList = [
  {
    id: 0,
    name: "基礎治療",
  },
  {
    id: 1,
    name: "定期檢查/3M塗氟",
  },
  {
    id: 2,
    name: "ClearCorrect隱形矯正",
  },
  {
    id: 3,
    name: "基礎治療",
  },
  {
    id: 4,
    name: "定期檢查/3M塗氟",
  },
  {
    id: 5,
    name: "ClearCorrect隱形矯正",
  },
];

const doctorList = [
  {
    id: 0,
    name: "陳星皓",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
  {
    id: 1,
    name: "廖韻如",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
  {
    id: 2,
    name: "顏凱翔",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
  {
    id: 3,
    name: "甄士凱",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
  {
    id: 4,
    name: "李忠明",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
  {
    id: 5,
    name: "李詩婷",
    description:
      "贋復牙科（固定假牙、活動假牙、全口重建、顳顎關節治療）、一般牙疾診治",
    image: avatar
  },
];

// 早上門診
const morningClinicList = [
  { id: 0, time: "09:00" },
  { id: 1, time: "09:30" },
  { id: 2, time: "10:00" },
  { id: 3, time: "10:30" },
  { id: 4, time: "11:00" },
  { id: 5, time: "11:30" },
  { id: 6, time: "12:00" },
];

// 下午門診
const afternoonClinicList = [
  { id: 0, time: "15:00" },
  { id: 1, time: "15:30" },
  { id: 2, time: "16:00" },
  { id: 3, time: "16:30" },
  { id: 4, time: "17:00" },
  { id: 5, time: "17:30" },
  { id: 6, time: "18:00" },
];

// 晚上門診
const nightClinicList = [
  { id: 0, time: "18:30" },
  { id: 1, time: "19:00" },
  { id: 2, time: "19:30" },
  { id: 3, time: "20:00" },
  { id: 4, time: "20:30" },
  { id: 5, time: "21:00" },
  { id: 6, time: "21:30" },
];

export {
  stepperList,
  itemList,
  doctorList,
  morningClinicList,
  afternoonClinicList,
  nightClinicList,
};
