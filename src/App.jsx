import { useEffect, useState } from "react";
import { AllAuthors } from "./components/AllAuthors";

const API_URL = "http://localhost:8000";

function App() {
  const [authors, setAuthors] = useState([]);

  const onDeleteAuthorClickHandler = (id) => {
    fetch(`${API_URL}/authors/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setAuthors((prevAuthors) =>
          prevAuthors.filter((author) => author.id !== id)
        );
      }
    });
  };

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <>
      <h1>Authors should appear here</h1>
      <AllAuthors authors={authors} onDelete={onDeleteAuthorClickHandler} />
    </>
  );
}

export default App;
