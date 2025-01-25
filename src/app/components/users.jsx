import React, { useState } from "react";
import User from "./user";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleToggleBookMark = (id) => {
    const newUsers = users.map((user) => {
      return user._id === id ? { ...user, bookmark: !user.bookmark } : user;
    });

    setUsers(newUsers);
  };

  return (
    <>
      <h2>
        <SearchStatus length={users.length} />
      </h2>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                onHandleDelete={handleDelete}
                onHandleToggleBookMark={handleToggleBookMark}
                {...user}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
