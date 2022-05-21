//  import TodoClass from './components/todolist/TodoClass';//verify by hardik sir
// import TodoFunction from './components/todolist/TodoFunction';//verify by hardik sir
import RegisterForm from './components/register/RegisterForm';
// import RegisterForm from './components/reg/RegisterForm';
// import { BrowserRouter,Route, Routes} from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";

import "./App.css";
// import RegisterForm from "./components/navbar/RegisterForm";
// import RegisterDetail from "./components/navbar/RegisterDetail";
// import Layout from "./components/navbar/Layout";

function App() {
  return (
    <div className="App">
      {/* <TodoClass /> */}
      {/* <TodoFunction /> */}
      <RegisterForm/>
      {/* <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route  path="registerForm" element={<RegisterForm/>}/>
        <Route  path="registerDetail" element={<RegisterDetail/>}/>

      </Routes>
      
      </BrowserRouter> */}
     
    </div>
  );
}

export default App;
