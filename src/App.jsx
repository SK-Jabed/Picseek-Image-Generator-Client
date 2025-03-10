import { Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
