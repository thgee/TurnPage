import * as Style from "./styles";
import { IBestSellerPreviewProps } from "./types";

const BestSellerPreview = ({ bookInfo }: IBestSellerPreviewProps) => {
  return (
    <Style.Container>
      <Style.BookImgBox>
        <img src={bookInfo.img} alt="책 표지 사진" />
      </Style.BookImgBox>

      <Style.BookInfoWrap>
        <h1>{bookInfo.title}</h1>
        <p>{bookInfo.desc}</p>
        <span>{bookInfo.author}</span>
        <span>{bookInfo.date}</span>
      </Style.BookInfoWrap>
    </Style.Container>
  );
};

export default BestSellerPreview;
