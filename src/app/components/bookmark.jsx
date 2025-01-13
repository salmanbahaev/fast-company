import React from "react";

const BookMark = ({ bookmark }) => {
  console.log(bookmark);
  
  const classes = bookmark ? "bi bi-bookmark" : "bi bi-bookmark-heart-fill";
  return (
    <>
      <button>
        <i className={classes}></i>
      </button>
    </>
  );
};

export default BookMark;