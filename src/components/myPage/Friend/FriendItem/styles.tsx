import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .profile-img {
    border-radius: 100px;
    border: 2px solid ${(p) => p.theme.color.border.border2};
    width: 50px;
    height: 50px;
  }

  .name {
    flex-grow: 1;
    font-size: 1.2rem;
    margin-left: 14px;
  }
`;
