import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1400px;
  margin: 0 auto;
  > .page-title {
    margin: 30px;
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 2rem;
  }
`;
export const Row1 = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .row1-col1 {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    .img-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > img {
        box-shadow: 0px 0px 10px 1px #879;
        cursor: pointer;
        transition: all 0.3s;
        /* object-fit: fill; */
        height: 240px;
        margin-bottom: 10px;
        display: block;

        &:hover {
          transform: scale(1.02);
        }
      }
    }

    .book-info-wrap {
      width: 300px;

      > li:not(:first-child) {
        margin-bottom: 8px;
        margin-left: 4px;
      }

      margin-left: 30px;
      color: ${(p) => p.theme.color.text.text3};

      > .title-wrap {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .title {
          margin-right: 8px;
          color: ${(p) => p.theme.color.text.text2};
          font-size: 1.2rem;
          margin-bottom: 4px;
        }
      }
    }
  }
`;

export const Row2 = styled.div`
  padding: 0 100px;

  .content-box {
    padding: 10px;
    background-color: ${(p) => p.theme.color.bg.bg2};
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 #aaa;
    width: 80%;
    height: 500px;
  }
`;
