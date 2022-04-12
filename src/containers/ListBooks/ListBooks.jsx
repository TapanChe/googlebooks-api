import React from "react";
import styles from "./ListBooks.module.scss";
import CardBook from "./../../components/CardBook";

//listing books
// rendering if some kind of value in books
const ListBooks = ({ books }) => {
    return (
        <>
            {books ? (
                <>
                    <div className={styles.ListBooks}>
                        <div className={styles.ListBooks__Grid}>
                            {books.map((book) => {
                                return <CardBook key={book.id} book={book} />;
                            })}
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default ListBooks;
