import { useEffect } from 'react';
import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Task } from './models/task';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components/About';

const App = () => {
  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = async (id: number) => {
    const toToggle = await fetchTask(id);
    const updated = { ...toToggle, reminder: !toToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updated),
    });

    const data = await res.json();

    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task))
    );
  };
  const addTask = async (task: Task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = (await res.json()) as Task;

    setTasks((tasks) => [...tasks, data]);
  };
  const [showAddTask, setShowAddTask] = useState<boolean>(true);
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    const temp = async () => {
      setTasks(await fetchTasks());
    };
    temp();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = (await res.json()) as Task[];
    return data;
  };

  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = (await res.json()) as Task;

    return data;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onAdd={() => setShowAddTask((temp) => !temp)} />
              {showAddTask && <AddTask addTask={addTask} />}
              <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminter={toggleReminder} />;
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
