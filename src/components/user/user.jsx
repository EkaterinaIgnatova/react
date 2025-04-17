import Skeleton from "react-loading-skeleton";

export const User = ({ userInfo }) => {
  return <h4>{userInfo?.name || <Skeleton width={100} />}</h4>;
};
