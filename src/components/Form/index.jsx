import { useState } from "react";

const Form = ({ addTodo }) => {
  const [valorInput, setValorInput] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="tarefa"
          onChange={(event) => setValorInput(event.target.value)}
        />
        <button onClick={() => addTodo(valorInput)}>Enviar</button>
      </div>
    </>
  );
};

export default Form;
