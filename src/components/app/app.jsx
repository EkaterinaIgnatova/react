import { Layout } from "../layout/layout";
import { restaurants } from "../../assets/mock";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../themeContext/themeContextProvider";
import "./app.css";
import { AuthContextProvider } from "../authContext/authContextProvider";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantsPage restaurantsList={restaurants} />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
