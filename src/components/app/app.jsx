import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../themeContext/themeContextProvider";
import "./app.css";
import { AuthContextProvider } from "../authContext/authContextProvider";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "../../pages/homePage/homePage";
import { RestaurantPage } from "../../pages/restaurantPage/restaurantPage";
import { MenuPage } from "../../pages/menuPage/menuPage";
import { ReviewsPage } from "../../pages/reviewsPage/reviewsPage";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="*" element={<Navigate to={"/"} replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
