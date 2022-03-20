import { Task as TaskModel } from '../models/task';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions/tasks';

export const Task = (props: { task: TaskModel }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ backgroundColor: props.task.reminder ? 'red' : '' }}
      onDoubleClick={() =>
        dispatch(updateTask(props.task.id, { ...props.task, reminder: !props.task.reminder }))
      }
    >
      <h3>
        {props.task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => dispatch(deleteTask(props.task.id))}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};
