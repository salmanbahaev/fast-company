import React, { useState } from "react";
import User from "./user";
import api from "../api";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

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

  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
    setCurrentPage(pageIndex)
  };
  
  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
      <h2>
        <SearchStatus length={count} />
      </h2>
      {count > 0 && (
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
            {userCrop.map((user) => (
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
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
