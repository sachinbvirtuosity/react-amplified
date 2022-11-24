import "./App.css";
import { Header } from "./components/Header";
import { Primary } from "./components/Primary";
import { Agent } from "./components/Agent";
import { Emergency } from "./components/Emergency";
import { Routing } from "./components/Routing";
import { Queue } from "./components/Queue";
import { Holiday } from "./components/Holiday";
import { SpecialCondition } from "./components/SpecialCondition";

function App() {
  return (
    <div className="container mx-auto px-4">
      <header className="mt-2">
        <Header />
      </header>
      <form>
        <Primary />
        <Agent />
        <Emergency />
        <Routing />
        <Queue />
        <Holiday />
        <SpecialCondition />
        <div className="submit-btn w-full flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 my-12">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
