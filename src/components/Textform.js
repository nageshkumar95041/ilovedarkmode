import React ,{useState} from 'react'

export default function Textform(props) {

  const handleUpclick=()=>{
// console.log("uppercase is clicked");
let newText= text.toUpperCase();
setText(newText);
// setText("you have clicked on upclick")
  }
  const handleclear=()=>{
// console.log("uppercase is clicked");
let newText= "";
setText(newText);
// setText("you have clicked on upclick")
  }
  const handleloclick=()=>{
// console.log("uppercase is clicked");
let newText= text.toLowerCase();
setText(newText);
// setText("you have clicked on upclick")
  }
  const handlecaptial=()=>{
// console.log("uppercase is clicked");
 let capital=text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
let newText= capital;
setText(newText);
// setText("you have clicked on upclick")
  }

  const handleOnchange=(event)=>{
// console.log("Onchange");
setText(event.target.value)
// console.log(event.target.value)
  }


  const [text,setText]=useState('enter your text here');

    return (
      <>
      <h1>{props.heading}</h1>
      <div className="form-floating">
  <textarea className="form-control " value={text} onChange={handleOnchange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea"></label>
</div>
<button type="button" onClick={handleUpclick} class="btn btn-primary my-2 m-2">Convert to uppercase</button>
<button type="button" onClick={handleloclick} class="btn btn-primary my-2 ">Convert to lowercase</button>
<button type="button" onClick={handleclear} class="btn btn-primary my-2 mx-2 ">Clear</button>
<button type="button" onClick={handlecaptial} class="btn btn-primary my-2 mx-2 ">Capitalize</button>
<div className="container">
  <h2>your text summary</h2>
  <p> your text has {text.split(" ").length} words and {text.length}characters</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
    )
}
