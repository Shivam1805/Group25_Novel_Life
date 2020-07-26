// @author : Rishabh Baheti


// import React, { Component } from 'react';
import React, {useEffect, useState, Component } from "react";
import {Card, Nav} from 'react-bootstrap';
import axios from "axios";

function EduHelp() {
    const [latest,setLatest] = useState([]);
    const [results, setResults] =useState([]);
    useEffect(() => { 
        axios
            .all([
                axios.get("http://localhost:8080/api/edu"),
            ])
            .then((responseArr) => {
                setResults(responseArr[0].data);

            })
            .catch((err) => {
                console.log(err);
            });

    },[]);

    return (
        <div>
        <h1 style={{color:"#FFFFFF"}}>EDUCATIONAL RESOURCES</h1>
        <div className="card-wrap" style={{display:"flex"}}>
        {
            results.map( data=> {
                return(
                    <Card style={{ width:"16rem",padding:"0 15px", textAlign:"center", minHeight: "100%"}} className=""  key={data.id}>
                        <Card.Title style={{ background:"#fff",fontSize:"20px", padding: "15px", borderRadius: "5px", textTransform:"capitalize", minHeight: "100%",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                        <Card.Img  src={data.path} style={{ width:"100"}}/>
                        <Nav.Link href={data.hyperlink} target="_blank">{data.name}</Nav.Link>
                        </Card.Title>
                    </Card>
                         
                );
            })
        }
        </div>
        </div>
    )
}
export default EduHelp;