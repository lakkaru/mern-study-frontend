import React from "react";
import UserForm from "./UserForm";
import { Box } from "@mui/material";
import UsersTable from "./UsersTable";

export default function Users() {
  const users = [
    { id: 1, name: "Lakshman" },
    { id: 2, name: "Prabash" },
  ];
  return (
    <Box
      sx={{ width: "calc(100% - 100px)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
}
