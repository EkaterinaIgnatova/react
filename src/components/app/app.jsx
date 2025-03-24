import { Layout } from "../layout/layout";
import { restaurants } from "../../assets/mock";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";
import "./app.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurantsList={restaurants} />
    </Layout>
  );
};
