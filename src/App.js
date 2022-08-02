import logo from "./logo.svg";
import "./App.css";
import { CharacterList } from "./pages/characterList";
import { Route, Routes } from "react-router";
import { Character } from "./pages/character";
import { Search } from "./pages/search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
