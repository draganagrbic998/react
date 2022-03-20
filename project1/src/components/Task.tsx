import { Task as TaskModel } from '../models/task';
import { FaTimes } from 'react-icons/fa';

export const Task = (props: {
  task: TaskModel;
  toggleReminter: (id: number) => void;
  deleteTask: (id: number) => void;
}) => {
  return (
    <div
      style={{ backgroundColor: props.task.reminder ? 'red' : '' }}
      onDoubleClick={props.toggleReminter.bind(null, props.task.id)}
    >
      <h3>
        {props.task.text}
        <FaTimes
          onClick={props.deleteTask.bind(null, props.task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};
