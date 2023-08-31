import React,{useState} from "react";
import {Card,CardContent,Grid,TextField} from "@mui/material"

export const Co=()=>{
   const [data, setData]=useState("Enter Text Please...")
   
   
    return(
   <Grid container spacing={2} align="center">
    <Grid item xs={12}>
        <TextField onChange={(e)=>setData(e.target.value)} variant="outlined" fullWidth
        style={{background: "white"}} />

    </Grid>

      <Grid item xs={6}>
        <Card>
            <CardContent>
              <h2 style={{color:"red"}}>{data}</h2>  
            </CardContent>
        </Card>

      </Grid>
      <Grid item xs={6}>
        <Card>
            <CardContent>
            <h2 style={{color:"red"}}>{data}</h2>  
            </CardContent>
        </Card>
        
        </Grid>
      <Grid item xs={6}>
        <Card>
            <CardContent>
            <h2 style={{color:"red"}}>{data}</h2>  
            </CardContent>
        </Card>

        </Grid>
      <Grid item xs={6}>
        <Card>
            <CardContent>
            <h2 style={{color:"red"}}>{data}</h2>    
            </CardContent>
        </Card>


      </Grid>

   </Grid>


   )
  

}
