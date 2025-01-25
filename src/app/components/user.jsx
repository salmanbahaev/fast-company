import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ onHandleDelete, onHandleToggleBookMark, ...user }) => {
  if (!user) {
    return (
      <tr>
        <td colSpan="6">Пользователь не найден</td>
      </tr>
    );
  }

  return (
    <>
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => (
            <Qualitie key={item._id} {...item} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <BookMark
            status={user.bookmark}
            onToggle={() => onHandleToggleBookMark(user._id)}
          />
        </td>
        <td>
          <button
            className={"btn btn-danger"}
            onClick={() => onHandleDelete(user._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
