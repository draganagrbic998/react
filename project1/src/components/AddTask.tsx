import { useState } from 'react';
import { Task } from '../models/task';

export const AddTask = (props: { addTask: (task: Task) => void }) => {
  const [task, setTask] = useState<Task>({
    id: undefined,
    text: '',
    day: '',
    reminder: false,
  });
  const onSubmit = (e: Event) => {
    e.preventDefault();

    if (!task.text.trim()) {
      alert('Please enter text!');
      return;
    }

    if (!task.day.trim()) {
      alert('Please enter day!');
      return;
    }

    props.addTask(task);
    setTask({ id: undefined, text: '', day: '', reminder: false });
  };

  return (
    <form className="add-form">
      <div className="form-group">
        <label>Task</label>
        <input
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}
          type="text"
          className="form-control"
          placeholder="Task"
        />
      </div>
      <div className="form-group">
        <label>Day & Time</label>
        <input
          value={task.day}
          onChange={(e) => setTask({ ...task, day: e.target.value })}
          type="text"
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

      <input type="submit" value="Save" onClick={onSubmit.bind(null)} />
    </form>
  );
};
