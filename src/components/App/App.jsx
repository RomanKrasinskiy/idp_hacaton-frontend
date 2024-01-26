import { Route, Routes, useLocation } from "react-router-dom";
import IDPs from "../IDPs/IDPs";
import NewIDP from "../NewIDP/NewIDP";
import style from "./App.module.css";
import CreateTask from "../CreateTask/CreateTask";
// import { Header } from '../Header/Header';
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NotFound from "../NotFound/NotFound";

function App() {
  const location = useLocation();
  const showLeftNavBar = ["/", "/idp", "/newTask"].includes(location.pathname);

  return (
    <section className={style.App}>
      {/* <Header /> */}
      <div className={style.mainContainer}>
        {/* Компоненты левого меню */}
        {showLeftNavBar && <LeftNavBar />}
        <Routes>
          <Route path="/" element={<IDPs />} />
          {/* <Route exact path="/" element={<IDP />} /> */}
          <Route path="/idp" element={<NewIDP />} />
          <Route path="/newTask" element={<CreateTask title='Новая задача' buttonText='Создать'/>} />
          {/* <Route exact path="/" element={<EditTask />} />  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
