import { PiStarBold, PiStarFill } from "react-icons/pi";

export const getStar = (num: number) => {
  num = Math.round(num);
  const stars = [];
  for (let _ = 0; _ < num; _++) {
    stars.push(<PiStarFill size={26} />);
  }

  for (let _ = 0; _ < 5 - num; _++) {
    stars.push(<PiStarBold size={26} />);
  }

  return stars;
};
