import React,{useState} from "react";
import {Card, CardContent,Grid} from "@mui/material"
import { Co } from "./Component/Co";

function App() {
  return (
  <Card sx={{bgcolor:"darkorchid"}}>
       <CardContent>
        <Co/>
       </CardContent>
   </Card>
  );
}

export default App;
