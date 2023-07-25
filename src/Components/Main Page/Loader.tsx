import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading] = useState(true);
  let [color] = useState("#4475F2");

  return (
    <div className="sweet-loading mt-12">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        height={15}
        width={5}
        radius={2}
        margin={2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;