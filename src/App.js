import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import MyFooter from "./components/footerCom";
import Welcome from "./components/welcome";
import BookList from "./components/BookList";
import AllBooks from "./components/AllTheBook";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Welcome />

			<BookList />

			<AllBooks />
			<MyFooter />
		</div>
	);
}

export default App;
