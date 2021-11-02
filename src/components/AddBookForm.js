import React from 'react';
import CategoryOptions from './CategoryOptions';

const AddBookForm = () => {
  const Options = () => {
    const bookCategories = [
      { value: 'Fun', content: 'Fun' },
      { value: 'Adventure', content: 'Adventure' },
      { value: 'Sci-Fi', content: 'Sci-Fi' },
      { value: 'Fantasy', content: 'Fantasy' },
    ];

    const categoryOptions = bookCategories.map((category) => {
      const { value, content } = category;
      return (<CategoryOptions key={Math.random} value={value} content={content} />);
    });

    return categoryOptions;
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input type="text" placeholder="Book title" className="book-title" />
        <select name="books" id="books">
          {Options()}
        </select>
        <button type="button" className="add-book-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
