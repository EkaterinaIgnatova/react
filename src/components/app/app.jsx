import { Layout } from "../layout/layout";
import { restaurants } from "../../assets/mock";

export const App = () => {
    return (
      <Layout restaurantsList={restaurants}/>
    )
}