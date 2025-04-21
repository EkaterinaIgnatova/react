import { useOutletContext } from "react-router";
import { MenuContainer } from "../../components/menu/menuContainer";

export const MenuPage = () => {
  const [restaurantInfo] = useOutletContext();

  return <MenuContainer restaurantInfo={restaurantInfo} />;
};
