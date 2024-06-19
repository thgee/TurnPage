import { useParams } from "react-router-dom";
import * as style from "./styles";

const SellDetail = () => {
  const { sellId } = useParams();
  return <style.Container>{sellId}</style.Container>;
};

export default SellDetail;
