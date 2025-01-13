import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (user) => {
  if (!user) {
    return (
      <tr>
        <td colSpan="6">Пользователь не найден</td>
      </tr>
    );
  }

  const handleToggle = () => {
    user.bookmark = !user.bookmark; // Переключаем значение bookmark
    console.log(`Bookmark is now: ${user.bookmark}`); // Логируем новое состояние
  };

  return (
    <>
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => (
            <Qualitie {...item} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><BookMark key={user._id} bookmark={user.bookmark} onToggle={handleToggle} /></td>
        <td>
          <button
            className={"btn btn-danger"}
            onClick={() => user.onHandleDelete(user._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
