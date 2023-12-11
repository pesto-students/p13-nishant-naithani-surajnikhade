
import './App.css';
import BookList from './components/bookList/bookList';

const App = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];
  return (
    <div>
      <BookList books={books} />
    </div>
  );
}

export default App;
