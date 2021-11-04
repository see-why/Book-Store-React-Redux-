import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { sendToServer } from '../redux/books/books';
import CategoryOptions from './CategoryOptions';

const AddBookForm = () => {
  const [book, setBook] = useState({
    title: '',
    category: 'Fun',
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

  const { title, category } = book;
  const dispatch = useDispatch();

  const submitToStore = () => {
    if (title) {
      const newBook = {
        ...book,
        item_id: uuidv4(),
      };
      dispatch(sendToServer(newBook));
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input name="title" required type="text" placeholder="Book title" value={title} onChange={hangleChange} className="book-title" />
        <select name="category" value={category} onChange={hangleChange} id="books">
          {Options()}
        </select>
        <button
          type="submit"
          className="add-book-btn"
          onClick={submitToStore}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
