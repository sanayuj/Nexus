import React, { useEffect, useState } from "react";
import "./TotalUsers.css";
import { userlist } from "../../../Services/adminApi";

export default function TotalUsers() {
  const [userDetails, setUserDetails] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    userlist().then((value) => {
      const users = value?.data?.userlist || [];
      setUserDetails(users);
      setFilteredUsers(users);
    });
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchQuery, userDetails]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterUsers = () => {
    let filtered = userDetails;

    if (searchQuery) {
      filtered = filtered.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.contactNo.includes(searchQuery)
      );
    }

    setFilteredUsers(filtered);
  };

  return (
    <div>
      <div id="div2">
        <div id='anav'>
          <input 
            type="text" 
            id='hsearch' 
            onChange={handleSearchChange} 
            placeholder='Search..'
          />
          <button id='hsearchicon'>
            <i className="bi bi-search" id='hsearch1'></i>
          </button>
        </div>
        <h2 id="th2">User Details</h2>
        <table className="table table-striped table-hover" id="tuser">
          <thead>
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((value, index) => (
              <tr key={value._id}>
                <th scope="row">{index + 1}</th>
                <td>{value.username}</td>
                <td>{value.contactNo}</td>
                <td>{value.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
