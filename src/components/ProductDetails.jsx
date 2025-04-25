import { Table, TableContainer, TableHead, TableRow ,TableCell, TableBody, Button} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductDetails = () => {
     var[products,setproducts] = useState([]);
      var baseurl = import.meta.env.VITE_API_BASE_URL
      useEffect(()=>{
        axios.get(`${baseurl}/p/product`)
             .then((res)=>{
              setproducts(res.data)
              console.log(res)
             })
             .catch((err)=>{
              console.log(err)
             })
      },[])
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <strong>Product Name</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Price</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Stock</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Actions</strong>
                    </TableCell>
                </TableRow> 
            </TableHead>
            <TableBody>
                {products.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.pname}</TableCell>
                            <TableCell>{val.price}</TableCell>
                            <TableCell>{val.stock}</TableCell>
                            <TableCell>
                                <Button variant='contained'>Update</Button>
                                &nbsp;&nbsp;
                                <Button variant='contained'>Delete</Button>

                            </TableCell>


                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductDetails
