
import './App.css'
import Grenpa from './Compunets/Gronpa/Grenpa'
// import ReuseForm from './Compunets/ResueForm/ReuseForm'
// import Hookform from './Compunets/Hookform/Hookform'
// import RefForm from './Compunets/RefForm/RefForm'
// import SimpleFrom from './Compunets/SimpleFrom/SimpleFrom'
// import StutefulForm from './Compunets/StutedfulForm/StutefulForm'

function App() {

 

  // const handlerSignUpSubmit = date =>{
  //  console.log('Sign Up data', date)
  // }
  // const handlerUpdateSubmit = date =>{
  //   console.log('Update Profile', date)
  // }


  return (
    <>
   

   <h1>Form Master</h1>
   <Grenpa></Grenpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StutefulForm></StutefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReuseForm 
      handlerSubmit={handlerSignUpSubmit} 

      SubmitForm={'Sign Up'} 
      handlerbutton={'Submit'}>
              <div>
                <h2>Sign Up</h2>
                <p>please sign up right now</p>
              </div>
      </ReuseForm>
      <ReuseForm
       handlerSubmit={handlerUpdateSubmit} 
       SubmitForm={'Profile Update'} 
       handlerbutton={'Update'}>
        <div>
          <h2>Update Profile</h2>
        </div>
       </ReuseForm> */}
   
    </>
  )
}

export default App
