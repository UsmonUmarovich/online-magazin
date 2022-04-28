import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Phone } from "./Pages/Phone";
import { Savdo } from "./Pages/Savdo";

function App() {
  const phones = [
    {
      id: 0,
      brand: "Iphone",
      model: " model: 13",
      memory: "memory: 1tb",
      color: 'color: black',
      ram: "ram: 12"
    },
    {
      id: 1,
      brand: "Iphone",
      model: " model: 11",
      memory: "memory: 512gb",
      color: 'color: silver',
      ram: "ram: 10"
    },
    {
      id: 2,
      brand: "Iphone",
      model: " model: X",
      memory: "memory: 512gb",
      color: 'color: gold',
      ram: "ram: 8"
    },
    {
      id: 3,
      brand: "Samsung",
      model: " model: S22",
      memory: "memory: 1tb",
      color: 'color: White',
      ram: "ram: 16"
    },
    {
      id: 4,
      brand: "Samsung",
      model: " model: S21",
      memory: "memory: 512gb",
      color: 'color: blue',
      ram: "ram: 10"
    },
    {
      id: 5,
      brand: "Samsung",
      model: " model: A21",
      memory: "memory: 64gb",
      color: 'color: White',
      ram: "ram: 8"
    },
  ]

  return (
    <div className="App">
      <div className="menu">
        <h1>Online-magazin</h1>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/savdo">Savdo</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home phones={phones} />} />
        <Route path="/savdo" element={<Savdo phones={phones} />} />
        <Route path="/phone/:id" element={<Phone phones={phones} />} />
      </Routes>
    </div>
  );
}

export default App;
