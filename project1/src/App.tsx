import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from './store/root-reducer';
import { RouteEnum } from './constants/router';
import { toggleTaskForm } from './store/actions/ui-data';
import { useTranslation } from 'react-i18next';

const App = () => {
  const showAddTask = useSelector((state) => (state as RootReducer).ui.showAddTaskForm);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <Header />
      <div>{t('test1.text')}</div>
      <button onClick={changeLanguage.bind(null, 'en')}>EN</button>
      <button onClick={changeLanguage.bind(null, 'de')}>DE</button>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button onClick={() => dispatch(toggleTaskForm())}>TOGGLE</button>
              {showAddTask && <AddTask />}
              <Tasks />
              <Footer />
            </>
          }
        />
        <Route path={RouteEnum.ABOUT} element={<About />} />
      </Routes>
    </>
  );
};

export default App;
