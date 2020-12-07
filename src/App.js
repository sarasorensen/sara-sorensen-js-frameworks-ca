import "./App.css";
import Heading from "./components/layout/Heading.js";
import Layout from "./components/layout/Layout.js";

export function App() {
  return (
    <div className="App">
      <Layout>
        <Heading title="Title from prop" />
      </Layout>
    </div>
  );
}

export default App;
