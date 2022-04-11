import React from "react";
import styles from "./Home.module.scss";
import { useState } from "react";

const Home = ({ setSearch }) => {
    //setting input value
    const [inputValue, setInputValue] = useState("");

    //searching based on change of text value in searchBar
    const handleChange = (event) => {
        setSearch(event.target.value);
        setInputValue(event.target.value);
    };

    return (
        <>
            <header className={styles.Header}>
                <h1>Google Books Library</h1>

                <div className={styles.SearchBar}>
                    <label htmlFor="searchInput"></label>
                    <input
                        className={styles.SearchBar__Input}
                        onChange={handleChange}
                        value={inputValue}
                        id="searchInput"
                        type="text"
                    />
                </div>
            </header>
        </>
    );
};

export default Home;
