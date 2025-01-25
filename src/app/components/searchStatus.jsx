import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
      const lastOne = Number(number.toString().slice(-1));
  
      if (number > 4 && number < 15) return "Человек тусанет";
      if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
      if (lastOne === 1) return "Человек тусанет";
      return "человек тусанет";
    }

  return (
    <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
      {length > 0
        ? `${length} ${renderPhrase(length)} с тобой сегодня`
        : "Никто с тобой не тусанет"}
    </span>
  );
};

export default SearchStatus;
