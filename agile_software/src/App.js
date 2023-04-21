import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Subchapter from "./Pages/Subchapter";
import Login from "./Pages/Login";
import Chapter from "./Pages/Chapter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/chapter/:chapterId" element={<Chapter/>}/>
        <Route path="/chapter/:chapterId/subchapter/:subchapterId" element={<Subchapter/>}/>
      </Routes>
    </div>
  );
}

export default App;


