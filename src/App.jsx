import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import Spinner from "./components/spinner/Spinner";
import { useDispatch } from "react-redux";
import { SetLoading } from "./redux/loaderSlice";
import 'animate.css';

function App() {
  const { loading } = useSelector((state) => state.loaders);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    dispatch(SetLoading(true));
    setTimeout(() => {
      dispatch(SetLoading(false)); // Set loading to false when content is loaded
    }, 200); // Adjust the time as needed
  }, []);
  return (
    <div className="app">
      {loading && <Spinner />}

      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
