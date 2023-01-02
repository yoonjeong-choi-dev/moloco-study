import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({name}: GreetingProps) => {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    if (name) {
      setMsg(`Hello ~ from ${name} in Greeting Component!`);
    }
  }, [name]);

  return name ? <div>{msg}</div> : <div>no name given</div>;
}

export default Greeting;