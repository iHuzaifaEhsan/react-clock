import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return(()=>{
      clearInterval(interval);
    })
  }, []);

  
  return (
    <div>
      {time.toLocaleDateString()}
      <br></br>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTime;
