import styled from "styled-components";

const BestSellerPreview = ({ bookInfo }: IBestSellerPreviewProps) => {
  return (
    <Container>
      <BookImgBox>
        <img src={bookInfo.img} alt="책 표지 사진" />
      </BookImgBox>

      <BookInfoWrap>
        <h1>{bookInfo.title}</h1>
        <p>{bookInfo.desc}</p>
        <span>{bookInfo.author}</span>
        <span>{bookInfo.date}</span>
      </BookInfoWrap>
    </Container>
  );
};

export default BestSellerPreview;

interface IBestSellerPreviewProps {
  bookInfo: {
    img?: string;
    title?: string;
    desc?: string;
    author?: string;
    date?: string;
  };
}

const Container = styled.div``;
const BookImgBox = styled.div``;
const BookInfoWrap = styled.div``;
