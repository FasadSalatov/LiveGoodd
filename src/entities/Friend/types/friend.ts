export interface IFriendNode extends IFriend{
  left: IFriendNode | null;
  right: IFriendNode | null;
}

export interface IFriend {
  avatar: string;
  username: string;
  friendsCount: number;
  lgCoinsAmount: number;
}
