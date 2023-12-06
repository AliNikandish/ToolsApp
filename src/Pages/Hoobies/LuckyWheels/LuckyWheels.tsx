import  { useState } from 'react'
import './LuckyWheels.css'
function LuckyWheels() {
  const [style,setStyle]=useState('')
  const [values,setValues]=useState({
      'one':'عنوان 1',
      'two':'عنوان 2',
      'three':'عنوان 3',
      'four':'عنوان 4',
      'five':'عنوان 5',
      'six':'عنوان 6',
      'seven':'عنوان 7',
      'eight':'عنوان 8',

  })

  const clickHandler = () =>{
      let number=Math.ceil(Math.random() * 10000)
    let newStyle = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 10000);
      setStyle(newStyle)
      console.log(newStyle);  
  }

  const changeHandler = (event:any)=>{
     const key = event.target.className
     const value=event.target.value
      setValues({...values,[key]:value})
  }
  
return (
  <div className='container mx-auto flex items-center justify-center mt-20 font-VazirMedium'>
      <span className="arrow mt-20"></span>
      <div className="wrapper" style={{transform:`${style}`}}>
      <button className='mt-10' id="spin" onClick={clickHandler} type='button'>چرخش</button>

          <input className="one"  value={values.one} onChange={changeHandler}/>
          <input className="two" value={values.two} onChange={changeHandler}/>
          <input className="three" value={values.three} onChange={changeHandler}/>
          <input  className="four" value={values.four} onChange={changeHandler}/>
          <input className="five" value={values.five} onChange={changeHandler}/>
          <input  className="six" value={values.six} onChange={changeHandler}/>
          <input className="seven" value={values.seven} onChange={changeHandler}/>
          <input className="eight" value={values.eight} onChange={changeHandler}/>
      </div>
  </div>
)
}

export default LuckyWheels