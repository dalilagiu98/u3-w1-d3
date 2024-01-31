import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import MyFooter from "./component/MyFooter";
import BookList from "./component/BookList";
import Books from "./data/fantasy.json";
function App() {
  return (
    <div className='App'>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <Welcome></Welcome>
        <BookList books={Books} />
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
