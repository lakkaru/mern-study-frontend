import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { Box } from "@mui/material";
import UsersTable from "./UsersTable";
import Axios from "axios";

export default function Users() {
  // const users = [
  //   { id: 1, name: "Lakshman" },
  //   { id: 2, name: "Prabash" },
  // ];
  useEffect(() => {
    getUser();
  }, []);

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState();
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const getUser = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((responce) => {
        // console.log("responce ", responce.data.responce);
        setUsers(responce.data?.responce || []);
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  const addUser = (data) => {
    // console.log(data);
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/adduser", payload)
      .then((responce) => {
        getUser();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then((responce) => {
        getUser();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  const deleteUser = (id) => {
    Axios.post("http://localhost:3001/api/deleteuser", id)
      .then((responce) => {
        getUser();
      })
      .catch((error) => {
        console.error("Axios error: ", error);
      });
  };

  return (
    <Box
      sx={{ width: "calc(100% - 100px)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm
        adduser={addUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
        updataeuser={updateUser}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(id) => {
          window.confirm("Are you sure?") && deleteUser(id);
        }}
      />
    </Box>
  );
}
