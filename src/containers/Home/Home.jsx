import React from "react";
import styles from "./Home.module.scss";

//receiving the props from app.js
const Home = ({ setSearch, search }) => {
    //setting the value for the search bar
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    //rendering th
    return (
        <>
            <header className={styles.Header}>
                <h1>Google Books Library</h1>

                <div className={styles.SearchBar}>
                    <label htmlFor="searchInput"></label>
                    <input
                        className={styles.SearchBar__Input}
                        onChange={handleChange}
                        value={search}
                        id="searchInput"
                        type="text"
                    />
                </div>
            </header>
        </>
    );
};

export default Home;
