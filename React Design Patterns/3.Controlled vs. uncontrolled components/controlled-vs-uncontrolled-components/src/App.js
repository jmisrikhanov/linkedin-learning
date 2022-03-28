import "./App.css";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

function App() {
  // const [shouldShowModal, setShouldShowModal] = useState(false);

  const StepOne = ({ goToNext }) => (
    <>
      <h1>Step 1</h1>
      <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
    </>
  );
  const StepTwo = ({ goToNext }) => (
    <>
      <h1>Step 2</h1>
      <button onClick={() => goToNext({ age: 50 })}>Next</button>
    </>
  );
  const StepThree = ({ goToNext }) => (
    <>
      <h1>Step 3</h1>
      <p>Congratulations! You qualify for our senior discount</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
  const StepFour = ({ goToNext }) => (
    <>
      <h1>Step 4</h1>
      <button onClick={() => goToNext({ hairColor: "Brown" })}>Next</button>
    </>
  );

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="App">
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledModal /> */}

      {/* <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button> */}

      {/* 
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}

      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </div>
  );
}

export default App;
