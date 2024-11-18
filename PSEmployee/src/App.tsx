import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Edit from "./Page/Edit";
import Add from "./Page/Add";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
