import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { sendToServer } from '../redux/books/books';
import CategoryOptions from './CategoryOptions';

const AddBookForm = () => {
  const [book, setBook] = useState({
    title: '',
    category: 'Fun',
    author: '',
    chapter: '',
    completed: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    title, category, author, chapter, completed,
  } = book;
  const dispatch = useDispatch();

  const submitToStore = () => {
    if (title && author && chapter && completed) {
      const newBook = {
        title: `${title}+${author}+${chapter}+${completed}`,
        category,
        item_id: uuidv4(),
      };
      dispatch(sendToServer(newBook));
    }
  };

  return (
    <div className="add-new-book-form">
      <h2 className="formtitle">Add New Book</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input name="title" required type="text" placeholder="Book title" value={title} onChange={handleChange} className="input-Panel" />
        <input name="author" required type="text" placeholder="Book author" value={author} onChange={handleChange} className="input-Panel" />
        <input name="chapter" required type="text" placeholder="Chapter" value={chapter} onChange={handleChange} className="input-Panel" />
        <input name="completed" required type="number" max="100" min="0" placeholder="(%)" value={completed} onChange={handleChange} className="input-Panel number" />
        <select name="category" value={category} onChange={handleChange} id="books" className="input-Panel options">
          {Options()}
        </select>
        <button
          type="submit"
          className="add-book-button"
          onClick={submitToStore}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
