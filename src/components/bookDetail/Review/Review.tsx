import * as style from "./styles";

const Review = ({ bookId }: IReviewProps) => {
  return (
    <style.Container>
      <h1
        style={{
          width: "100%",
          height: 500,
          backgroundColor: "salmon",
          color: "#fff",
          marginTop: 100,
          fontSize: "1.5rem",
        }}
      >
        리뷰
      </h1>
    </style.Container>
  );
};

export default Review;

interface IReviewProps {
  bookId: number;
}
