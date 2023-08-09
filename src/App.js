import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/base/Layout";
import Books from "./pages/books";
import SignIn from "./pages/signIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Books />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
