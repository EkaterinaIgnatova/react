import { Layout } from "../layout/layout";
import { restaurants } from "../../assets/mock";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../themeContext/themeContextProvider";
import "./app.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <RestaurantsPage restaurantsList={restaurants} />
      </Layout>
    </ThemeContextProvider>
  );
};
