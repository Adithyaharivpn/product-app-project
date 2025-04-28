import { Table, TableContainer, TableHead, TableRow ,TableCell, TableBody, Button} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
     var[products,setproducts] = useState([]);
     var location = useLocation();
     var navigate = useNavigate();
     console.log('loc',location.state)
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
      const updateHandler = (pro) => {
        console.log(pro)
        navigate('/admin',{state:{pro}})
      }
      const updateHandler = ()=>{
        
      }
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
                                <Button variant='contained' 
                                onClick={()=>
                                {updateHandler(val)}}>
                                Update
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant='contained' onClick={delHandler}>Delete</Button>

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
