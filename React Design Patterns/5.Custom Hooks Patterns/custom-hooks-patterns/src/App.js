import logo from "./logo.svg";
import "./App.css";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    // <UserInfo />
    <>
      <UserInfo userId="123" />
      {/* <UserInfo userId="234" />
      <UserInfo userId="345" /> */}

      <ProductInfo productId="1234" />
    </>
  );
}

export default App;
