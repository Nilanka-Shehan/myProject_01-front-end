import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from 'react';

const UserTable = ({rows,selecteduser,deleteuser})=>{
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
                    {
                        rows.length>0? rows.map(row=>(
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:'0'}}}>
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={()=>{
                                        selecteduser({id:row.id,name:row.name})
                                    }}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={()=>{
                                        deleteuser({id:row.id})
                                    }}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                        )):(
                            <TableRow sx={{'&:last-child td, &:last-child th':{border:'0'}}}>
                                <TableCell component="th" scope="row">Nodata</TableCell>
                            </TableRow>
                        )  
                    }
                    </TableBody>
                </Table>
         </TableContainer>
    );
}

export default UserTable;