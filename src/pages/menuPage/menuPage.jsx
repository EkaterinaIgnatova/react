import { useParams } from "react-router";
import { MenuContainer } from "../../components/menu/menuContainer";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <MenuContainer id={restaurantId} />;
};
