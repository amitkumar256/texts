import React,{useState} from 'react';

export default function TextForm(props) {

    const handleUpClick= ()=>{
        console.log("uppercase was clicked")
        let newSetText=text.toLocaleUpperCase();
        setText(newSetText);
    }
    const handleClear= ()=>{
      let newSetText=" "
      setText(newSetText);
      
  }

    const handleOnChange = (event) =>{
      setText(event.target.value);
    }

 
//document.getElementById('para').innerHTML="enabled"

    const[text,setText]=useState('enter text here');

  return (
    <>
  <div className="p-4 m-4" >
    <div className="container text-black">
    <h1 className={` text-${props.mode==='white'?'black':'white'}`}>{props.heading}</h1>
<div className="mb-3">
<textarea id="message" onChange={handleOnChange} value={text} rows="8" className="  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."> enter</textarea>
</div>
<button onClick={handleUpClick} className='px-1 m-4 text-white bg-green-700 w-50 btn-primary btn oncl'>Convert to upper case</button>
<button onClick={handleClear} className='px-1 m-4 text-white bg-green-700 w-50 btn-primary btn oncl'>clear text</button>
  
    </div>
    <div className={`container mx-3 my-3 text-${props.mode==='white'?'black':'white'}` }>
      <h1 className='p-2 m-2 text-2xl font-bold'>Your Text Summary</h1>
      <p className='p-2 m-2'>you enter {text.split(" ").length-1} words Or {text.length-text.split(" ").length+1} character</p>
    
    </div>
  </div>    
    </>
  )
}
