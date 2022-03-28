import "./App.css";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <div className="App">
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledModal /> */}

      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </div>
  );
}

export default App;
