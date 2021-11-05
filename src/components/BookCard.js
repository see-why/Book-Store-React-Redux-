import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeFromServer } from '../redux/books/books';

const BookCard = ({
  title,
  author,
  chapter,
  category,
  completed,
  id,
}) => {
  const dispatch = useDispatch();

  const offSetValue = (completed) => {
    let pct = 0;
    let val = parseInt(completed, 10);
    if (Number.isNaN(val)) {
      val = 100;
    } else {
      const base = 315;
      pct = (((val) / 100) * 250.48) + base;
    }

    return pct;
  };

  const percentage = `${completed}%`;
  const dashOffset = offSetValue(completed);

  return (
    <div className="book-Card">
      <div className="book-info">
        <ul id={id}>
          <li className="category">{category}</li>
          <li className="title">{title}</li>
          <li className="author">{author}</li>
        </ul>
        <button className="book-card-buttons" type="button">Comments</button>
        <button className="book-card-buttons" type="button" onClick={() => { dispatch(removeFromServer(id)); }}>Remove</button>
        <button className="book-card-buttons" type="button">Edit</button>
      </div>
      <div className="circle_box">
        <svg version="1.1">
          <circle cx="50" cy="50" r="40" />
          <circle className="bar" style={{ strokeDashoffset: dashOffset }} cx="50" cy="50" r="40" />
        </svg>
        <ul className="circle-box-completed-info">
          <li className="percent-Complete">{percentage}</li>
          <li className="completed">Completed</li>
        </ul>
      </div>
      <div className="vertical-Line" />
      <div className="chapter-info">
        <ul>
          <li className="current-Chapter">CURRENT CHAPTER</li>
          <li className="current-Lesson">{chapter}</li>
          <button className="progress-button" type="button">UPDATE PROGRESS</button>
        </ul>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  chapter: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default BookCard;
