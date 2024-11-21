import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppMain.css";

export default function AppMain() {
  const [articoli, setArticoli] = useState([]);
  const [formData, setFormData] = useState({
    titolo: "",
    image: "",
    content: "",
    categoria: "",
    tags: "",
    pubblicato: false,
  });

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setArticoli([
      {
        id: Date.now(),
        ...formData,
      },
      ...articoli,
    ]);

    setFormData({
      titolo: "",
      image: "",
      content: "",
      categoria: "",
      tags: "",
      pubblicato: false,
    });
  }

  function deleteArticoli(e) {
    const dataIndex = e.target.getAttribute("data-index");
    const newArticoli = articoli.filter(
      (articolo, index) => dataIndex != index
    );
    setArticoli(newArticoli);
  }

  return (
    <>
      <h1 className="text-center text-white mt-5">React Form MultiField</h1>
      <div className="container-form mt-5">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Titolo"
              name="titolo"
              value={formData.titolo}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="Image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
            >
              <option className="text-secondary" value="">
                Seleziona categoria
              </option>
              <option value="tennis">Tennis</option>
              <option value="animals">Animals</option>
              <option value="videogames">Videogames</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="#tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 mt-5 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="pubblicato"
              name="pubblicato"
              checked={formData.pubblicato}
              onChange={handleInputChange}
            />
            <label
              className="form-check-label text-white ms-2"
              htmlFor="pubblicato"
            >
              Pubblica
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Aggiungi Articolo
          </button>
        </form>

        <ul className="list-group mt-5 mb-5">
          {articoli.map((articolo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <h5>{articolo.titolo}</h5>
                <small>
                  {articolo.categoria} - {articolo.tags} -
                  {articolo.pubblicato
                    ? " Pubblicato"
                    : " In corso di pubblicazione"}
                </small>
              </div>
              <button
                className="trash-icon"
                data-index={index}
                onClick={deleteArticoli}
              >
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
