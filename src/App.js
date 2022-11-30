import "./App.css";
import { useFormik } from "formik";
import { Header } from "./components/Header";
import { Primary } from "./components/Primary";
import { Agent } from "./components/Agent";
import { Emergency } from "./components/Emergency";
import { Routing } from "./components/Routing";
import { Queue } from "./components/Queue";
import { Holiday } from "./components/Holiday";
import { SpecialCondition } from "./components/SpecialCondition";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App({ signOut, user }) {
  const formik = useFormik({
    initialValues: {
      incomingNumber: "",
      welcomeMsg: "",
      afterHour: false,
      agentsNotAvailable: false,
      agentsNotStaffed: false,
      emergencyTurnedOn: false,
      emergencyConditionMsg: "",
      routingCallToQueue: false,
      callRoutingExtNumber: "",
      platOptionsMenu: false,
      menuOptionsMsg: "",
      enableVoiceMail: false,
      enableCallBack: false,
      queueMsg: "",
      holidayMsg: "",
      holiday: "",
      sDate: "",
      eDate: "",
      active: false,
      enableSpecialCondition: false,
      specialCondition: false,
    },
    onSubmit: function (values) {
      console.log("Values are ", values);
    },
  });


  return (
    <div className="container mx-auto px-4">
      <header className="mt-2">
        <Header />
      </header>
      <form onSubmit={formik.handleSubmit}>
        <Primary formik={formik} />
        <Agent formik={formik} />
        <Emergency formik={formik} />
        <Routing formik={formik} />
        <Queue formik={formik} />
        <Holiday formik={formik} />
        <SpecialCondition formik={formik} />
        <div className="submit-btn w-full flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 my-12">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default withAuthenticator(App);
