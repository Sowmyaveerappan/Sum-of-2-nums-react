import { useState } from "react"

import style from "./style.css"
function Adding(){
   const[fnum,setfnum] = useState("")
   const[lnum,setlnum] = useState("")
   const[Result,setResult] = useState("Result")

   function handleFnum(event){
    setfnum(event.target.value)
   }

   function handlelnum(event){
    setlnum(event.target.value)
   }


   function handleResult(event){
    event.preventDefault()
    var fnum =document.getElementById("fnum")
    var lnum = document.getElementById("lnum")
    var Ans = Number(fnum.value)+Number(lnum.value)
    console.log(Ans)
    setResult("Result="+Ans)
   }

    return(
        <div className="container">
            <form className="formbox">
                <input value ={fnum} onChange={handleFnum} id="fnum"></input><br>
                </br>
                <input value ={lnum} onChange={handlelnum} id="lnum"></input><br>
                </br>
                <button onClick ={handleResult} id="add">Add</button>
            </form>
            <h1>{Result}</h1>
        </div>
    )
}
export default Adding