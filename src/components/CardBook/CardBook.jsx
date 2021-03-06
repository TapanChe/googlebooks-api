import styles from "./CardBook.module.scss";

//

const CardBook = ({ book }) => {
    // setting book details

    let title = book.volumeInfo.title ? book.volumeInfo.title : "Title Unknown";
    let authors = book.volumeInfo.authors
        ? book.volumeInfo.authors
        : "Unknown Author(s)";
    let description = book.volumeInfo.description
        ? book.volumeInfo.description
        : "Sorry, there is no description for this title.";

    let image =
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            ? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png";

    //cutting down description to 250 characters
    if (description !== undefined && description.length > 150) {
        description = description.slice(0, 150) + " ...";
    }

    return (
        <div className={styles.CardBook}>
            <img src={image} alt="Book" />
            <h3>{title}</h3>
            <p>Written By: {authors}</p>
            <p>{description}</p>
        </div>
    );
};

export default CardBook;
