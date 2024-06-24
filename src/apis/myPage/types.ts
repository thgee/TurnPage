export interface IUserInfo {
  name: string;
  email: string;
  profileImage: string;
  inviteCode: string;
  point: number;
  reportCount: number;
  saleCount: number;
  purchaseCount: number;
}

export interface IMySell {}
export interface IMyReport {}

export interface IFollowList {
  followingInfoList: [
    {
      followId: number;
      memberInfo: {
        memberId: number;
        name: string;
        profileImage: string;
      };
    }
  ];
  followerInfoList: [
    {
      followId: number;
      memberInfo: {
        memberId: number;
        name: string;
        profileImage: string;
      };
    }
  ];
  followingCount: number;
  followerCount: number;
}
