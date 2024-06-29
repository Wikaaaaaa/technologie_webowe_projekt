import { useEffect, useState } from "react";
import { AllAuthors } from "./components/AllAuthors";

const API_URL = "http://localhost:8000";

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <>
      <h1>Authors should appear here</h1>
      <AllAuthors authors={authors} />
    </>
  );
}

export default App;
