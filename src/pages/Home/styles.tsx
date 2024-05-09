import styled from "styled-components";

export const Container = styled.div``;

export const SectionA = styled.div`
  padding: 30px;
  .title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
export const SectionB = styled.div``;

export const TabWrap = styled.div`
  display: flex;
  position: sticky;
  top: 65px;

  // 탭 버튼 위쪽 공간에 backdrop filter을 주기 위함
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65px; /* 또는 원하는 높이 */
    top: -65px; /* 탭 위로 이동하여 탭 아래에 배치 */
    backdrop-filter: blur(8px); /* 원하는 필터 효과를 적용 */
  }
`;

export const Tab = styled.span<{ isClick: boolean }>`
  flex-grow: 0.5;
  border-radius: 8px;
  text-align: center;
  padding: 14px 0;
  cursor: pointer;
  background-color: ${(p) =>
    p.isClick
      ? p.theme.homeTab.tabActiveBgColor
      : p.theme.homeTab.tabInactiveBgColor};
  color: ${(p) => (p) =>
    p.isClick
      ? p.theme.homeTab.tabActiveTextColor
      : p.theme.tabInactiveTextColor};
`;
