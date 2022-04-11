import { useEffect, useState } from "react";
import ListBooks from "./containers/ListBooks";
import Home from "./containers/Home/Home";

const App = () => {
    //setting state for Books
    const [booksRepo, setBooks] = useState([]);

    //setting state for search result
    const [search, setSearch] = useState("");

    // Gets book titles based on inputText
    const getBooks = async (searchTerm) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`,
        );
        const results = await response.json();

        setBooks(results.items);
    };

    useEffect(() => {
        if (search !== "" || undefined) {
            getBooks(search);
        }
    }, [search]);

    const handleSubmit = (searchInput) => {
        setSearch(searchInput);
    };

    return (
        <>
            <Home onSubmit={handleSubmit} setSearch={setSearch} />
            <ListBooks books={booksRepo} />
        </>
    );
};

export default App;
