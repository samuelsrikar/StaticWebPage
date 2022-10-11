import { useState } from 'react';
import './HeaderNav.css';

function anchorClick(i,arr)
{
    const [j,seti,name] = arr;

    if(j==false)
     document.getElementById("p-tag").innerHTML= `In page ${name}`;

    seti(!j);

    console.log(j);
}
function Anchor(props)
{

    console.log(props.setI);
    //console.log(`${i}`);

    
     let style2 = {
        backgroundColor:"lightgrey",
        display: "flex",
        flexDirection: "row",
        textDecoration: "none",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        fontWeight:"bold"
     };

     let style3 = {
        backgroundColor:"aqua",
        display: "flex",
        flexDirection: "row",
        textDecoration: "none",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        fontWeight:"bold"
     };

    return (
        <a style= {props.i ? style2 : style3} onClick={(e)=>{anchorClick(e,[props.i,props.setI,props.name])}} href={props.href} >{props.name}</a>
        );
}

function NavBar(props)
{
    console.log("nav");

    const [i1,SetI1] =useState(false);
    const [i2,SetI2] =useState(false);
    const [i3,SetI3] =useState(false);
    const [i4,SetI4] =useState(false);
    const [i5,SetI5] =useState(false);
    const [i6,SetI6] =useState(false);


    function send1 (i) 
    {
            SetI1(i);
            SetI2(false);
            SetI3(false);
            SetI4(false);
            SetI5(false);
            SetI6(false);

    }
    function send2 (i) 
    {
        SetI1(false);
        SetI2(i);
        SetI3(false);
        SetI4(false);
        SetI5(false);
        SetI6(false);
    }
    function send3 (i) 
    {
        SetI1(false);
        SetI2(false);
        SetI3(i);
        SetI4(false);
        SetI5(false);
        SetI6(false);
    }
    function send4 (i) 
    {
        SetI1(false);
        SetI2(false);
        SetI3(false);
        SetI4(i);
        SetI5(false);
        SetI6(false);
    }
    function send5 (i) 
    {
        SetI1(false);
        SetI2(false);
        SetI3(false);
        SetI4(false);
        SetI5(i);
        SetI6(false);
    }
    function send6 (i) 
    {
        SetI1(false);
        SetI2(false);
        SetI3(false);
        SetI4(false);
        SetI5(false);
        SetI6(i);
    }

    return (
        <div class="header-nav">
            <Anchor i={i1} setI={send1} href="#" name="HTML"/>
            <Anchor i={i2} setI={send2} href="#" name="CSS"/>
            <Anchor i={i3} setI={send3} href="#" name="JS"/>
            <Anchor i={i4} setI={send4} href="#" name="React"/>
            <Anchor i={i5} setI={send5} href="#" name="C"/>
            <Anchor i={i6} setI={send6} href="#" name="C++"/>
        </div>
    );
}

export {NavBar};