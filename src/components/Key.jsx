import { useState } from "react"

export default function Key( { style, content, onClick}) {
  const [animate, setAnimate] = useState("");

  const handleClick = () => {
    setAnimate("opacity-[0.5]");
    setTimeout(() => setAnimate(""), 100);
    onClick(content);
    
  }

  return(
    <div className={`${style} ${animate}`} onClick={handleClick}>
      {content}
    </div>
  )
}