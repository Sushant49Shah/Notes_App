import React, { useRef } from "react";
import Card from "./Card";

const Front = () => {
  const ref = useRef(null);
  const handleAddCard = () => {
    
  }
  
  return (
    <div ref={ref} className="fixed  z-20 w-screen h-screen">
      {/* <div className="add">
        <button onClick={handleAddCard}>Add</button>
      </div> */}
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
    </div>
  );
};

export default Front;
