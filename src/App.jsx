import { Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Creations from "./pages/Creations";
import SingleImage from "./pages/SingleImage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/creations" element={<Creations></Creations>}></Route>
          <Route
            path="/creation/:id"
            element={<SingleImage></SingleImage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;