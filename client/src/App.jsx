import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import LoadingScreen from "./components/LoadingScreen";
import { ErrorProvider } from "./context/error/ErrorProvider";
import { AppProvider } from "./context/app/AppProvider";
function App() {
  return (
    <ErrorProvider>
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </ErrorProvider>
  );
}

export default App;
