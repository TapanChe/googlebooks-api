import React from "react";
import styles from "./ListBooks.module.scss";
import CardBook from "./../../components/CardBook";

//listing books
const ListBooks = ({ books }) => {
    return (
        <div className={styles.ListBooks}>
            <div className={styles.ListBooks__Grid}>
                {books.map((book) => {
                    return <CardBook key={book.id} book={book} />;
                })}
            </div>
        </div>
    );
};

export default ListBooks;
