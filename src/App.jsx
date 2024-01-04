import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Display from "./components/Display";
import ReactDOM from "react-dom";

const FooterPortal = () => {
  const portalRoot = document.getElementById("footer-root");
  return ReactDOM.createPortal(<Footer />, portalRoot);
};

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="text-bold text-black text-[72px] mt-12">WORDLE</h1>
        <Routes>
          <Route
            path="/reactjs-wordle"
            element={
              <>
                <Link
                  to="five"
                  className="text-white hover:text-white block text-3xl text-center transition duration-0 bg-green-500 hover:bg-yellow-300 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded mt-20"
                >
                  5 Letters &nbsp;&nbsp; ▶
                </Link>

                <Link
                  to="six"
                  className="text-white hover:text-white block text-3xl text-center transition duration-0 bg-green-500 hover:bg-yellow-300 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded mt-8"
                >
                  6 Letters &nbsp;&nbsp; ▶
                </Link>
                <Link
                  to="seven"
                  className="text-white hover:text-white block text-3xl text-center transition duration-0 bg-green-500 hover:bg-yellow-300 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-yellow-400 active:bg-gray-800 active:border-black rounded mt-8"
                >
                  7 Letters &nbsp;&nbsp; ▶
                </Link>
              </>
            }
          />
          <Route
            path="/reactjs-wordle/five"
            element={
              <>
                <h2 className="text-black text-[36px]">5 Letters</h2>
                <Display number={5} />
              </>
            }
          />
          <Route
            path="/reactjs-wordle/six"
            element={
              <>
                <h2 className="text-black text-[36px]">6 Letters</h2>
                <Display number={6} />
              </>
            }
          />
          <Route
            exact
            path="/reactjs-wordle/seven"
            element={
              <>
                <h2 className="text-black text-[36px]">7 Letters</h2>
                <Display number={7} />
              </>
            }
          />
        </Routes>
        <FooterPortal />
      </BrowserRouter>
    </>
  );
}

export default App;
