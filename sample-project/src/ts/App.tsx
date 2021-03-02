console.log("TS App");
import { Text } from "./Text";

function App(): JSX.Element {
  const text = "text";

  return (
    <div>
      <h1>TypeScript Sample</h1>
      <p>{text}</p>
      <Text value="abc" />
    </div>
  );
}

export default App;
