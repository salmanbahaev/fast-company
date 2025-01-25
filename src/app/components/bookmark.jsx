import React from "react";

const BookMark = ({status, onToggle}) => {
  return (
    <>
       <button onClick={onToggle}>
            <i className={"bi bi-bookmark" + (status ? '-heart-fill' : '')}></i>
        </button>
    </>
  );
};

export default BookMark;