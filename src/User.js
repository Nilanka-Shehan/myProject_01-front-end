import { Box } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";


const User = ()=>{
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selecteduser, setselecteduser] = useState({});
    const [isEdit, setisEdit] = useState(false);

    useEffect(() =>{
        getUser();
    },[]);
    const getUser =() =>{
        Axios.get('http://localhost:3001/api/getuser')
            .then(response =>{
                setUsers(response.data?.response ||[]);
            })
            .catch(error =>{
                console.error({'Error':error});
            })
    }
   
    const addUser =(data) =>{
        setSubmitted(true)
        const payload = {
            id:data.id,
            name:data.name
        }

        Axios.post('http://localhost:3001/api/createusers',payload)
            .then(() =>{
                getUser();
                setSubmitted(false);
            })
            .catch(error =>{
                console.error({'Error':error});
            })
    }

    const updateUser=(data)=>{
        setSubmitted(true);
        const payload = {
            id:data.id,
            name:data.name
        }
        Axios.put('http://localhost:3001/api/updateuser',payload)
            .then(()=>{
                getUser();
                setSubmitted(false);
                setisEdit(false)
            })
            .catch(error=>{
                console.error({'Error':error});
            })
    }

    // const deleteUser = (data)=>{
    //     const payload = {
    //         id: data.id
    //     }
    //     Axios.delete('http://localhost:3001/api/deleteuser',payload)
    //         .then(()=>{
    //             getUser();
    //         })
    //         .catch(error=>{
    //             console.error({'Error':error})
    //         })
    // }
    //delete method we pass the parameters different way
    const deleteUser = (data) => {
        Axios.delete('http://localhost:3001/api/deleteuser', { data: { id: data.id } })
            .then(() => {
                getUser();
            })
            .catch(error => {
                console.error({ 'Error': error });
            });
    };
    




    return (
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin:'auto',
                marginTop:'100px'
            }}
        >
            <UserForm 
                adduser = {addUser}
                updateuser = {updateUser}
                submitted={submitted}
                selectedData = {selecteduser}
                isedit={isEdit}
            />
            <UserTable 
                rows={users}
                selecteduser={data=>{
                    setselecteduser(data);
                    setisEdit(true)
                }}
                deleteuser={data=> window.confirm('Are you sure') && deleteUser(data)}
            />
        </Box>
    );
}

export default User;