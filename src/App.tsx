import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <div className="font-VazirMediumt">
        <Header />
        {router}
        <Footer />
      </div>
    </>
  );
}

export default App;
