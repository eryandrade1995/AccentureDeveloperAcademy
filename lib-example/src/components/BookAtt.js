import '../main.css';

function BookItem({ nome, autor }) {
  return (
    <li>
      <div className="content">
        <h4>{nome}</h4>
        <p>{autor}</p>
      </div>
    </li>
  );
}

export default BookItem;