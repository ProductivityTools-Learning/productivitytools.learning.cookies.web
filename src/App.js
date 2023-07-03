import { useState } from "react";
import axios from "axios";

function App() {
  const [date, setDate] = useState();
  const getDate = async () => {
    var response = await axios.get("https://localhost:7278/Date/Get", { withCredentials: true });
    console.log(response);
    setDate(response.data);
  };

  return (
    <div className="App">
      <img src="G.png" />
      <button onClick={getDate}>kliknij mnie</button>
      pawel
      <span>{date}</span>
      <img src="https://localhost:7278/Date/Image" />
    </div>
  );
}

export default App;
