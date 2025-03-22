import { Layout } from "../layout/layout";
import { restaurants } from "../../assets/mock";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurantsList={restaurants} />
    </Layout>
  );
};
