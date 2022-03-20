import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../models/task';
import { createTask } from '../store/actions/tasks';

export const AddTask = () => {
  const [task, setTask] = useState<Task>({
    id: undefined,
    text: '',
    day: '',
    reminder: false,
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (!task.text.trim()) {
      alert('Please enter text!');
      return;
    }

    if (!task.day.trim()) {
      alert('Please enter day!');
      return;
    }

    dispatch(createTask(task));
    setTask({ id: undefined, text: '', day: '', reminder: false });
  };

  return (
    <>
      <div className="form-group">
        <label>Task</label>
        <input
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}
          className="form-control"
          placeholder="Task"
        />
      </div>
      <div className="form-group">
        <label>Day & Time</label>
        <input
          value={task.day}
          onChange={(e) => setTask({ ...task, day: e.target.value })}
          className="form-control"
          placeholder="Task"
        />
      </div>
      <div className="form-group">
        <label>Set Reminder</label>
        <input
          checked={task.reminder}
          onChange={(e) => setTask({ ...task, reminder: e.currentTarget.checked })}
          type="checkbox"
          placeholder="Task"
        />
      </div>

      <button onClick={onSubmit}>Save</button>
    </>
  );
};
