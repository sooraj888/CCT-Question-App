import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import InputDetailsForm from "./pages/InputDetailsForm";
import Qusetion from "./pages/Qusetion";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<InputDetailsForm></InputDetailsForm>}></Route>
        <Route path="questions/:id" element={<Qusetion></Qusetion>}></Route>
        <Route path="result" element={<Result></Result>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
