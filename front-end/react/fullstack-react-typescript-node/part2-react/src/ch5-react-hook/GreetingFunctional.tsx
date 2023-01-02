import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
  message: string;
}

const GreetingFunctional: FC<GreetingProps> = ({message}: GreetingProps) => {
  return (
    <div>{message}</div>
  )
}

export default GreetingFunctional;