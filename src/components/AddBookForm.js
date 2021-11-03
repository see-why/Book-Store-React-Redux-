import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import CategoryOptions from './CategoryOptions';

const AddBookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'Fun',
    completed: '0%',
    id: '',
  });

  const Options = () => {
    const bookCategories = [
      { value: 'Fun', content: 'Fun' },
      { value: 'Adventure', content: 'Adventure' },
      { value: 'Sci-Fi', content: 'Sci-Fi' },
      { value: 'Fantasy', content: 'Fantasy' },
    ];

    const categoryOptions = bookCategories.map((category) => {
      const { value, content } = category;
      return (<CategoryOptions key={uuidv4()} value={value} content={content} />);
    });

    return categoryOptions;
  };

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { title, author, category } = book;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input name="title" type="text" placeholder="Book title" value={title} onChange={hangleChange} className="book-title" />
        <input name="author" type="text" placeholder="Author" value={author} onChange={hangleChange} className="book-author" />
        <select name="category" value={category} onChange={hangleChange} id="books">
          {Options()}
        </select>
        <button
          type="button"
          className="add-book-btn"
          onClick={() => {
            const newBook = {
              ...book,
              id: uuidv4(),
            };
            dispatch(addBook(newBook));
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
