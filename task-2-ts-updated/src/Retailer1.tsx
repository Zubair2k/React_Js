import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import "./styles.css";

function Retailer1() {
  let n = useSelector((state: any) => state.user.mat);
  n = n.filter((c: any) => c.Value === 1);
  console.log(n);

  let final_total1 = 0;
  n.map((a: any) => (final_total1 += a.Total));

  const data1 = n.map((a: any) => (
    <TableRow>
      <TableCell align="center">{a.Product}</TableCell>
      <TableCell align="center">{a.Quantity}</TableCell>
      <TableCell align="center">{a.Price}</TableCell>
      <TableCell align="center">{a.Total}</TableCell>
    </TableRow>
  ));

  return (
    <div className="Retailer1">
      <h1>RETAILER-1</h1>
      <h5>
        Address :{" "}
        <span className="add">92,Nehru Street,Anna Nagar,Chennai.</span>
      </h5>
      <h5>
        Telephone : <span className="tel">0424-2275757</span>
      </h5>
      <TableContainer>
        <Table aria-label="a dense table">
          <TableHead id="tab_head">
            <TableRow>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data1}
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="center">{final_total1}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Retailer1;
