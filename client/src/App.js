import First from "./Components/First";
import Second from "./Components/Second";
import axios from "axios";
import Form from "./pages/Form";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
