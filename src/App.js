import Landing from "./screens/Landing";
import "./App.css"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            {/*<Route path="/success" element={</>} />*/}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
