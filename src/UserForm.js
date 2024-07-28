import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';


const UserForm = ({adduser,updateuser,isedit,submitted,selectedData}) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        if(!submitted){
            setId(0)
            setName('')
        }
    },[submitted])

    useEffect(()=>{
        if(selectedData?.id && selectedData.id != 0){
            setId(selectedData.id)
            setName(selectedData.name)
        }
    },[selectedData])

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block'
            }}
        >
            <Grid item xs={12}>
                <Typography component="h1" sx={{ color: '#000000' }}>
                    Welcome to User Form
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '18px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: "400px" }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '18px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: "400px" }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    sx={{
                        display: 'block',
                        margin: "auto",
                        marginBottom: "20px",
                        backgroundColor: "#00c6e6",
                        color: "#000000",
                        marginLeft: "15px",
                        marginTop: "20px",
                        '&:hover': {
                            opacity: "0.7",
                            backgroundColor: "#00a3c6"
                        }
                    }}

                    onClick={()=>{
                        isedit ? updateuser({id,name}) : adduser({id,name})
                        // submitted=true
                        // if(submitted){
                        //     setId(0)
                        //     setName('')
                        // } >>>>>>>>>>  //we can use useEffect() hook for do that 
                    }}
                >
                    {
                        isedit ? 'UPDATE' : 'ADD'
                    }
                </Button>
            </Grid>

        </Grid>
    );
};

export default UserForm;










