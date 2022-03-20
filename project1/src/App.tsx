import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(true);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onAdd={() => setShowAddTask((temp) => !temp)} />
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
