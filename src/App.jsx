
import './App.css'
import ReuseForm from './Compunets/ResueForm/ReuseForm'
// import Hookform from './Compunets/Hookform/Hookform'
// import RefForm from './Compunets/RefForm/RefForm'
// import SimpleFrom from './Compunets/SimpleFrom/SimpleFrom'
// import StutefulForm from './Compunets/StutedfulForm/StutefulForm'

function App() {


  return (
    <>
   

   <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StutefulForm></StutefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      <ReuseForm SubmitForm={'Sign Up'} handlerbutton={'Submit'}></ReuseForm>
      <ReuseForm SubmitForm={'Profile Update'} handlerbutton={'Update'}></ReuseForm>
   
    </>
  )
}

export default App
