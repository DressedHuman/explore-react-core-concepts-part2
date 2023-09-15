import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  const handleClick = () => {
    alert("button clicked!");
  };

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(7) }>Seven</button> */}
    </>
  )
}

export default App
