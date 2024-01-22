import { Route, Routes, useNavigate } from 'react-router-dom';
import IDPs from '../IDPs/IDPs';
import style from './App.module.css';
import  CreateTask from '../CreateTask/CreateTask';
// import { Header } from '../Header/Header';
import LeftNavBar from '../LeftNavBar/LeftNavBar';

function App() {
  const navigate = useNavigate()

  function handleBackNavigate() {
      navigate(-1)
  }
  return (
    <section className={style.App}>
      {/* <Header /> */}
      <div className={style.mainContainer}>

        {/* Компоненты левого меню */}
        <LeftNavBar handleBackNavigate={handleBackNavigate} /> 
        
        <Routes>
          <Route exact path="/" element={<IDPs />} />
           {/* <Route exact path="/" element={<IDP />} /> */}
          {/* <Route exact path="/" element={<NewIDP />} /> */}
          <Route exact path="/newTask" element={<CreateTask />} /> 
          {/* <Route exact path="/" element={<EditTask />} />  */}
        </Routes>
      </div>
    </section>
  )
}

export default App
