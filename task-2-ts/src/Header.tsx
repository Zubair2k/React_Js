import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "./Slice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Data from "./products.json";

let data: any = [];

export default function Header() {
  const [retail1, setRetail1] = useState<boolean>(false);
  const [retail2, setRetail2] = useState<boolean>(false);
  const [retail3, setRetail3] = useState<boolean>(false);
  const [pro, setPro] = useState<any>([{ product: "", price: 0 }]);
  const [quan, setQuan] = useState<number>(0);
  const [mat, setMat] = useState<any>();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleRetail1Open = () => {
    setRetail1(true);
    setValue(1)
  };

  const handleRetail1Close = () => {
    setRetail1(false);
  };

  const handleRetail2Open = () => {
    setRetail2(true);
    setValue(2)
  };

  const handleRetail2Close = () => {
    setRetail2(false);
  };

  const handleRetail3Open = () => {
    setRetail3(true);
    setValue(3)
  };

  const handleRetail3Close = () => {
    setRetail3(false);
  };

  const handleProduct = (e: any) => {
    let a = Data.items.filter((item: any) => ( item.product === e.target.value));
    setPro(a);
  };

  const handleQuantity = (e: any) => {
    setQuan(e.target.value);
  };
  
  const handleCart = () => {
    data=Object.assign([],data)
    Data.items=Data.items.filter((item: any) => ( item.product !== pro[0].product));
    data.push({
      Product: pro[0].product,
      Quantity: quan,
      Price: pro[0].price,
      Total: pro[0].price * quan,
      Value: value
    });
    setMat(data);
    alert("Added To Cart Successfully")
  };

  const handleSubmit1 = () => {
    dispatch(update({ mat }));
    setRetail1((ps) => !ps);
  };

  const handleSubmit2 = () => {
    dispatch(update({ mat }));
    setRetail2((ps) => !ps);
  };

  const handleSubmit3 = () => {
    dispatch(update({ mat }));
    setRetail3((ps) => !ps);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WHOLESALE SHOP
          </Typography>
          <Button color="inherit" onClick={handleRetail1Open}>
            Retailer-1
          </Button>
          <Dialog open={retail1} onClose={handleRetail1Close}>
            <DialogTitle>RETAILER-1 PRODUCT</DialogTitle>
            <DialogContent>
              <Box component="form">
                <FormControl sx={{ m: 1, minWidth: 170 }}>
                  <InputLabel id="demo-dialog-select-label">Product</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Age" />}
                    onChange={handleProduct}
                  >
                    <MenuItem value="" disabled>
                      Select the Product
                    </MenuItem>
                    {Data.items.map((item: any, index:any) => (
                      <MenuItem value={item.product} key={index} id={index}>{item.product}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 110, marginRight: 2 }}>
                  <InputLabel id="demo-dialog-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Quantity" />}
                    onChange={handleQuantity}
                  >
                    <MenuItem value="" disabled>
                      Select the Quantity
                    </MenuItem>
                    {Data.items.map((item: any, index: any) => (
                      <MenuItem value={index + 1}>{index + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro && pro[0].price}</h3>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro[0].price * quan}</h3>
                </FormControl>
                <FormControl>
                  <Button onClick={handleCart} sx={{ width: 100 }}>
                    Add To Cart
                  </Button>
                </FormControl>
                  <div>
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
                        {data.map((a:any) => (
                            <TableRow>
                              <TableCell align="center">{a.Product}</TableCell>
                              <TableCell align="center">{a.Quantity}</TableCell>
                              <TableCell align="center">{a.Price}</TableCell>
                              <TableCell align="center">{a.Total}</TableCell>
                            </TableRow>                        
                        ))}
                      </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
              </Box>         
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRetail1Close}>Cancel</Button>
              <Button onClick={handleSubmit1}>Submit</Button>
            </DialogActions>
          </Dialog>
          <Button color="inherit" onClick={handleRetail2Open}>
            Retailer-2
          </Button>
          <Dialog open={retail2} onClose={handleRetail2Close}>
            <DialogTitle>RETAILER-2 PRODUCT</DialogTitle>
            <DialogContent>
              <Box component="form">
                <FormControl sx={{ m: 1, minWidth: 170 }}>
                  <InputLabel id="demo-dialog-select-label">Product</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Age" />}
                    onChange={handleProduct}
                  >
                    <MenuItem value="" disabled>
                      Select the Product
                    </MenuItem>
                    {Data.items.map((item: any) => (
                      <MenuItem value={item.product}>{item.product}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 110, marginRight: 2 }}>
                  <InputLabel id="demo-dialog-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Quantity" />}
                    onChange={handleQuantity}
                  >
                    <MenuItem value="" disabled>
                      Select the Quantity
                    </MenuItem>
                    {Data.items.map((item: any, index: any) => (
                      <MenuItem value={index + 1}>{index + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro[0].price}</h3>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro[0].price * quan}</h3>
                </FormControl>
                <FormControl>
                  <Button onClick={handleCart} sx={{ width: 100 }}>
                    Add To Cart
                  </Button>
                </FormControl>
                <div>
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
                        {/* {data.map((a:any) => (
                        <TableRow>
                          <TableCell align="center">{a.Product}</TableCell>
                          <TableCell align="center">{a.Quantity}</TableCell>
                          <TableCell align="center">{a.Price}</TableCell>
                          <TableCell align="center">{a.Total}</TableCell>
                      </TableRow>
                        ))} */}
                      </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRetail2Close}>Cancel</Button>
              <Button onClick={handleSubmit2}>Submit</Button>
            </DialogActions>
          </Dialog>
          <Button color="inherit" onClick={handleRetail3Open}>
            Retailer-3
          </Button>
          <Dialog open={retail3} onClose={handleRetail3Close}>
            <DialogTitle>RETAILER-3 PRODUCT</DialogTitle>
            <DialogContent>
              <Box component="form">
                <FormControl sx={{ m: 1, minWidth: 170 }}>
                  <InputLabel id="demo-dialog-select-label">Product</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Age" />}
                    onChange={handleProduct}
                  >
                    <MenuItem value="" disabled>
                      Select the Product
                    </MenuItem>
                    {Data.items.map((item: any) => (
                      <MenuItem value={item.product}>{item.product}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 110, marginRight: 2 }}>
                  <InputLabel id="demo-dialog-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    input={<OutlinedInput label="Quantity" />}
                    onChange={handleQuantity}
                  >
                    <MenuItem value="" disabled>
                      Select the Quantity
                    </MenuItem>
                    {Data.items.map((item: any, index: any) => (
                      <MenuItem value={index + 1}>{index + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro[0].price}</h3>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 30 }}>
                  <h3>{pro[0].price * quan}</h3>
                </FormControl>
                <FormControl>
                  <Button onClick={handleCart} sx={{ width: 100 }}>
                    Add To Cart
                  </Button>
                </FormControl>
                <div>
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
                        {/* {data.map((a:any) => (
                        <TableRow>
                          <TableCell align="center">{a.Product}</TableCell>
                          <TableCell align="center">{a.Quantity}</TableCell>
                          <TableCell align="center">{a.Price}</TableCell>
                          <TableCell align="center">{a.Total}</TableCell>
                      </TableRow>
                        ))} */}
                      </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRetail3Close}>Cancel</Button>
              <Button onClick={handleSubmit3}>Submit</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}