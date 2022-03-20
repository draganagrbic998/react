import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { useSelector } from 'react-redux';
import { RootReducer } from './store/root-reducer';

const App = () => {
  const showAddTask = useSelector((state) => (state as RootReducer).showAddTask);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              {showAddTask && <AddTask />}
              <Tasks />;
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
