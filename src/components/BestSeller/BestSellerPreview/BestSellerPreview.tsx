import { IBestSeller } from "../../../apis/bestseller/types";
import * as Style from "./styles";

const BestSellerPreview = ({ bookInfo }: { bookInfo: IBestSeller }) => {
  return (
    <Style.Container>
      <Style.BookImgBox>
        <img src={bookInfo.cover} height={250} />
      </Style.BookImgBox>
      <Style.BookInfoWrap>
        <h1 className="title">{bookInfo.title}</h1>
        {/* <p>{bookInfo.desc}</p> */}
        <span>{bookInfo.author}</span>
        <span>{bookInfo.publicationDate}</span>
      </Style.BookInfoWrap>
    </Style.Container>
  );
};

export default BestSellerPreview;
