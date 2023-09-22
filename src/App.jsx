// import SimpleForm from "./components/SimpleForm/SimpleForm"
// import StatefulForm from "./components/StatefulForm/StatefulForm"
// import RefForm from "./components/RefForm/RefForm"

import Grandpa from "./components/Gradpa/Grandpa"

// import { data } from "autoprefixer";
// import ReusableForm from "./components/ReusableForm/ReusableForm"

// import HookForm from "./components/HookForm/HookForm"

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update profile data', data);
  // }

  return (
    <div className="flex flex-col justify-center my-80 w-3/5 mx-auto">

      <h1 className="text-center text-5xl font-bold text-cyan-600 mb-6">Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2 className="text-center text-5xl my-4 font-bold text-cyan-800">Sign Up</h2>
          <p className="text-center text-xl my-2 font-medium text-teal-500">Sign Up if you didn't already</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        submitBtnText={'Update'}
        handleSubmit={handleUpdateProfile}>
        <div>
          <h2 className="text-center text-5xl my-4 font-bold text-emerald-800">Update Profile</h2>
          <p className="text-center text-xl my-2 font-medium text-lime-700">Keep Profile up to date</p>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </div>
  )
}

export default App
