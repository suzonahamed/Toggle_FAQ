import React,{useState} from 'react'
import style from './faq.module.css'
const FAQ = ({id,title,desc}) => {
  // const{id,title,desc}=props;
  const[toggle,setToggle]=useState(false)
    
   
  return (
    <article className={style.faq}>
     <div>
        <h2>
            {title}

        <button onClick={()=>{

          setToggle(!toggle)
            }}>

          {toggle ? "-":"+"}

          </button>
        </h2>
      
     </div>
     {toggle && <p>

      {desc}
      </p>}
    </article>
  )
}

export default FAQ
