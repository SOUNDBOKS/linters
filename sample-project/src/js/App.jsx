console.log("JS App");
import { Text } from "./Text";

function App() {
  const text = "text";

  return (
    <div>
      <h1>JavaScript Sample</h1>
      <p>{text}</p>
      <Text value="abc" />
    </div>
  );
}

export default App;
