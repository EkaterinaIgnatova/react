import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../themeContext/themeContextProvider";
import "./app.css";
import { AuthContextProvider } from "../authContext/authContextProvider";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
