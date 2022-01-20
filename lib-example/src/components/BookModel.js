import '../main.css';
import { useState } from 'react';

function BookModel(props) {
  const [nome, setNome] = useState();
  const [autor, setAutor] = useState();
  const { books, setBooks } = props;

  function addBook() {
    const newBook = { id: Math.random(), nome, autor };
    setBooks([newBook, ...books]);
  }

    return (
      <div className="form-container">
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '.5rem', color: '#fff', fontSize: '2rem' }}>
            Adicionar Livro
          </h4>
        </div>

        <form onSubmit={onSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="nome" name="nome" style={{ marginBottom: '1.3rem' }} onChange={(e) => setNome(e.target.value)}/>
          
          <label htmlFor="author">Autor:</label>
          
          <input type="text" id="autor" name="autor" onChange={(e) => setAutor(e.target.value)}/>
          
          <button type="submit" className="btn-sub" disabled={nome && autor ? false : true}>
            Adicionar
          </button>
        </form>
      </div>
    );
  


  function onSubmit(e) {
    addBook();
    e.preventDefault();
  }

}

export default BookModel;