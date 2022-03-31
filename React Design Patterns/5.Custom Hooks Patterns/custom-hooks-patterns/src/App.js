import logo from "./logo.svg";
import "./App.css";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    // <UserInfo />
    <>
      <UserInfo userId="123" />
      <UserInfo userId="234" />
      <UserInfo userId="345" />
    </>
  );
}

export default App;
