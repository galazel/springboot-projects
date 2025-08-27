import { useState } from "react";
import FirstPage from "./FirstPage";
import NextPage from "./NextPage";
import MessageSent from "./MessageSent";

function App() {
  const [count, setCount] = useState(1);
  if(count == 3)
  {
    return <MessageSent/>
  }
  return (
    <form
      action=""
      className="mx-auto mt-10 max-w-lg p-5 border border-gray-300 rounded-lg shadow-lg bg-amber-100"
    >
      <div className="mx-auto text-center mb-8">
        <h1 className="text-5xl mb-5">Harvard University Registration Form</h1>
        <p>Please fill out the following information below</p>
        <p>Step{count}/2</p>
      </div>
      <div className="grid gap-2">
        {count == 1 && <FirstPage count={count} setCount={setCount} />}
        {count == 2 && <NextPage count={count} setCount={setCount} />}
      </div>
    </form>
  );
}

export default App;
