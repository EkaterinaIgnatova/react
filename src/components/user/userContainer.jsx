import { useGetUsersQuery } from "../redux/services/api";
import { User } from "./user";

export const UserContainer = ({ id }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.find((el) => el.id === id),
    }),
  });

  return <User userInfo={data} />;
};
