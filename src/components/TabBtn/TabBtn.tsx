import * as Style from "./styles";

const TabBtn = ({ tabState, SetTabState, className, mode }: ITabBtnProps) => {
  return (
    <Style.Container className={className}>
      {/* Home에서 부른 경우 */}
      {mode === "home" && (
        <>
          <Style.Tab
            isClick={"report" === tabState}
            onClick={() => SetTabState("report")}
          >
            친구들의 독후감
          </Style.Tab>
          <Style.Tab
            isClick={"store" === tabState}
            onClick={() => SetTabState("store")}
          >
            현재 판매중인 책
          </Style.Tab>
        </>
      )}
      {/* Mypage에서 부른 경우 */}
      {mode === "mypage" && (
        <>
          <Style.Tab
            isClick={"myReport" === tabState}
            onClick={() => SetTabState("myReport")}
          >
            내 독후감
          </Style.Tab>
          <Style.Tab
            isClick={"mySell" === tabState}
            onClick={() => SetTabState("mySell")}
          >
            내 판매글
          </Style.Tab>
        </>
      )}
    </Style.Container>
  );
};

export default TabBtn;

interface ITabBtnProps {
  tabState: "report" | "store" | "myReport" | "mySell";
  SetTabState: React.Dispatch<
    React.SetStateAction<"report" | "store" | "myReport" | "mySell">
  >;
  className?: string;
  mode: "home" | "mypage";
}
