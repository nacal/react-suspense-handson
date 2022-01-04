import "./App.css";
import { Suspense, useState } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SometimesSuspend: React.VFC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <button className="border p-1" onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  );
}

export default App;
