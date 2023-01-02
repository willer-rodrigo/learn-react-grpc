import logo from "./logo.svg";
import "./App.css";

const { ProductServiceClient } = require("./products_grpc_web_pb");
const { Product, ProductList, Empty } = require("./products_pb.js");

const { PingPongServiceClient } = require("./ping_pong_grpc_web_pb");
const { PingRequest, PongResponse } = require("./ping_pong_pb.js");

var client = new ProductServiceClient("http://localhost:8080", null, null);
var client2 = new PingPongServiceClient("http://localhost:8080", null, null);

function App() {
  const callGrpcService = () => {
    // const request2 = new PingRequest();
    // request2.setPing("Ping");

    // client2.pingPong(request2, {}, (err, response) => {
    //   if (response == null) {
    //     console.log("error", err);
    //   } else {
    //     console.log("success", response.getPong());
    //   }
    // });

    client.list(new Empty(), null, (error, response) => {
      if (!error) {
        console.log(response?.getProductList());
      } else {
        console.error(error);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => callGrpcService()}>learn react</button>
      </header>
    </div>
  );
}

export default App;
