import * as Style from "./styles";

const HomeTabBtn = ({ tabState, SetTabState, className }: IHomeTabBtnProps) => {
  return (
    <Style.Container className={className}>
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
    </Style.Container>
  );
};

export default HomeTabBtn;

interface IHomeTabBtnProps {
  tabState: "report" | "store";
  SetTabState: React.Dispatch<React.SetStateAction<"report" | "store">>;
  className?: string;
}
