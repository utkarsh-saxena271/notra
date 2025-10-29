import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/actions/userActions";
import MainRoutes from "./Routes/MainRoutes";
import NavBar from "./Components/NavBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <MainRoutes />
    </div>
  );
};

export default App;