import '../main.css';
import { useState } from 'react';
import BookAtt from './BookAtt';
import BookModel from './BookModel';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, nome: 'O Senhor dos Anéis: As Duas Torres', autor: 'J.R.R. Tolkien' },
    { id: 2, nome: 'Eragon', autor: 'Paolini,Christopher' },
    { id: 3, nome: 'Xml - Col. Schaum', autor: 'Tittel,Ed' },
  ]);

  
  function addBook() {
    setModelAdd(!modelAdd);
  }
  
  const [modelAdd, setModelAdd] = useState(false);

  return (
    <div className="container">
      <div className="catalog-h">
        <h3>Lista de livros</h3>
        <span>
          <button onClick={() => addBook()} className={modelAdd ? 'btn-cancel' : 'btn-add'}>
            Add
          </button>
        </span>
      </div>
        {modelAdd && <BookModel books={books} setBooks={setBooks} />}
      <div>
        <ul>
          {books.map((book) => (
            <BookAtt key={book.nome} nome={book.nome} autor={book.autor} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookList;