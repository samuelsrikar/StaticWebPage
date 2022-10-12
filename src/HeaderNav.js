import { useState } from 'react';
import './HeaderNav.css';

function anchorClick(i,arr)
{
    const [j,seti,name,setAsideName] = arr;

    seti(!j);

    setAsideName(name);

    console.log(name);
}

function Anchor(props)
{
    //  let style2 = {
    //     backgroundColor:"lightgrey",
    //     display: "flex",
    //     flexDirection: "row",
    //     textDecoration: "none",
    //     height: "100%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "25%",
    //     fontWeight:"bold"
    //  };

    //  let style3 = {
    //     backgroundColor:"aqua",
    //     display: "flex",
    //     flexDirection: "row",
    //     textDecoration: "none",
    //     height: "100%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "25%",
    //     fontWeight:"bold"
    //  };

    return (
        <a className="a-style" onClick={(e)=>{anchorClick(e,[props.i,props.setI,props.name,props.setAsideName])}} href={props.href} >{props.name}</a>
        );
}

function NavBar(props)
{
    const [i1,SetI1] =useState(false);
    const [i2,SetI2] =useState(false);
    const [i3,SetI3] =useState(false);
    const [i4,SetI4] =useState(false);
    const [i5,SetI5] =useState(false);
    const [i6,SetI6] =useState(false);

 function setICommon(arr)
 {
            SetI1(arr[0]);
            SetI2(arr[1]);
            SetI3(arr[2]);
            SetI4(arr[3]);
            SetI5(arr[4]);
            SetI6(arr[5]);
 }
    function send1 (i) 
    {
        setICommon([i,0,0,0,0,0]);

    }
    function send2 (i) 
    {
        setICommon([0,i,0,0,0,0]);

    }
    function send3 (i) 
    {
        setICommon([0,0,i,0,0,0]);

    }
    function send4 (i) 
    {
        setICommon([0,0,0,i,0,0]);

    }
    function send5 (i) 
    {
        setICommon([0,0,0,0,i,0]);

    }
    function send6 (i) 
    {
        setICommon([0,0,0,0,0,i]);
    }

    return (
        <div class="header-nav">
            <Anchor i={i1} setI={send1} setAsideName={props.setAsideName} href="#" name="HTML"/>
            <Anchor i={i2} setI={send2} setAsideName={props.setAsideName} href="#" name="CSS"/>
            <Anchor i={i3} setI={send3} setAsideName={props.setAsideName} href="#" name="JS"/>
            <Anchor i={i4} setI={send4} setAsideName={props.setAsideName} href="#" name="React"/>
            <Anchor i={i5} setI={send5} setAsideName={props.setAsideName} href="#" name="C"/>
            <Anchor i={i6} setI={send6} setAsideName={props.setAsideName} href="#" name="C++"/>
        </div>
    );
}

export {NavBar};