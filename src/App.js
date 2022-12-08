import { Route } from "react-router-dom";
import {Routes} from 'react-router-dom';
import Home  from "./components/Home"
import Philosophy  from "./components/Philosophy"
import { NavLink } from "react-router-dom";

export function App() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/philosophy'>Philosophy</NavLink>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/philosophy" element={<Philosophy />} />
    </Routes>
    </div>
  )
}

export default App;
