import { useState } from "react";
const Form = () => {
    const [ enterdTodo, setEnteredTodo ] = useState("");
    return (
        <div>
            <input type="text" value={enterdTodo}/>
        </div>
    );
}
export default Form;