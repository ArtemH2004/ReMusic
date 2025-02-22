const none = "/public/images/icons/trophy/none.svg";
const bronze = "/public/images/icons/trophy/bronze.svg";
const silver = "/public/images/icons/trophy/silver.svg";
const gold = "/public/images/icons/trophy/gold.svg";
const platinum = "/public/images/icons/trophy/platinum.svg";
const diamond = "/public/images/icons/trophy/diamond.svg";

export const getTrophyByValue = (value: number) => {
  if (value >= 10 && value <= 100) {
    value = value - (value % 10);
  }

  switch (value) {
    case 20:
      return bronze;
    case 30:
      return bronze;
    case 40:
      return silver;
    case 50:
      return silver;
    case 60:
      return gold;
    case 70:
      return gold;
    case 80:
      return platinum;
    case 90:
      return platinum;
    case 100:
      return diamond;
    default:
      return none;
  }
};
