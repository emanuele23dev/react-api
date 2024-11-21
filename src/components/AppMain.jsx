import { useState, useEffect } from "react";
import "./AppMain.css";

export default function AppMain() {
  const [articoli, setArticoli] = useState([]);

  useEffect(() => {
    fetchArticoli();
  }, []);

  function fetchArticoli() {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then(({ data }) => setArticoli(data));
  }

  return (
    <>
      <h1 className="text-center text-white mt-5">React Api</h1>
      <div className="container-form mt-5">
        <form>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Titolo"
          />
          <input
            type="text"
            name="image"
            className="form-control mb-3"
            placeholder="Image"
          />
          <textarea
            name="content"
            className="form-control mb-3"
            placeholder="Content"
          />
          <select
            name="categoria"
            className="form-select mb-3"
            defaultValue=""
          >
            <option value="" hidden>Seleziona categoria</option>
            <option value="News">News</option>
            <option value="Cucina Vegan">Cucina Vegan</option>
            <option value="Animals">Animals</option>
          </select>
          <input
            type="text"
            name="tags"
            className="form-control mb-3"
            placeholder="#tags"
          />
          <div className="mb-3">
            <input
              type="checkbox"
              name="pubblicato"
              className="form-check-input me-2"
            />
            <label className="text-white">Pubblica</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Aggiungi Articolo
          </button>
        </form>

        <ul className="list-group mt-5 mb-5">
          {articoli.map((articolo, index) => (
            <li key={index} className="list-group-item rounded mb-5">
              <div>
                <h5>{articolo.title}</h5>
                {articolo.image && (
                  <img 
                    src={articolo.image} 
                    alt={articolo.title}
                    className="mb-3"
                    style={{ width: '200px' }}
                  />
                )}
                <p>{articolo.content}</p>
                <p>{articolo.categoria}</p>
                <small>
                  {articolo.tags?.join(', ')}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}