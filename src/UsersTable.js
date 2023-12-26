import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function UsersTable({ rows }) {
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((val, key) => {
              return (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td &:last-child th": { border: 0 } }}
                >
                  <TableCell component={"th"} scope="row">
                    {val.id}
                  </TableCell>
                  <TableCell component={"th"} scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell>
                    <Button sx={{ margin: "0px 1-px" }} onClick={() => {}}>
                      {" "}
                      Update
                    </Button>
                    <Button sx={{ margin: "0px 1-px" }} onClick={() => {}}>
                      {" "}
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell component={"th"} scope="row">
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
