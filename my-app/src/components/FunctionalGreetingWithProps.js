import React from "react";

const FunctionaGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello!, {props.greeting}</h1>;
}

export default FunctionaGreetingWithProps;