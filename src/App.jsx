import { useEffect, useState } from "react";
import { AllAuthors } from "./components/AllAuthors";
import { AddNewAuthor } from "./components/AddNewAuthor";
import "./style.css";

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

  const onAddNewAuthorClickHandler = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;

    fetch(`${API_URL}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setAuthors((prevAuthors) => [...prevAuthors, data]);
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
      <h1>Authors</h1>
      <AddNewAuthor onAdd={onAddNewAuthorClickHandler} />
      <AllAuthors authors={authors} onDelete={onDeleteAuthorClickHandler} />
    </>
  );
}

export default App;
