const bronze = "public/images/icons/trophy/bronze.svg";
const silver = 'public/images/icons/trophy/silver.svg';
const gold = 'public/images/icons/trophy/gold.svg';
const platinum = 'public/images/icons/trophy/platinum.svg';
const diamond = 'public/images/icons/trophy/diamond.svg';

export const getTrophyByValue = (value: number) => {
    if (value > 10 && value < 100) {
        value = (value - (value % 10)) / 10;
    }

    if (value % 2 == 1 && value != 1) value -= 1;
    if (value != 1 ) value /= 2;
    if (value == 50) value = 5;

      switch (value) {
        case 1:
          return bronze;
        case 2:
          return silver;
        case 3:
          return gold;
        case 4:
          return platinum;
        case 5:
          return diamond;
      }
}