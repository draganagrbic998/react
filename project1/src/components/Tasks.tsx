import { Task as TaskModel } from '../models/task';
import { Task } from './Task';

export const Tasks = (props: {
  tasks: TaskModel[];
  toggleReminter: (id: number) => void;
  deleteTask: (id: number) => void;
}) => {
  return (
    <>
      {props.tasks?.length > 0
        ? props.tasks.map((task) => (
            <Task
              toggleReminter={props.toggleReminter}
              key={task.id}
              task={task}
              deleteTask={props.deleteTask}
            />
          ))
        : 'no tasks'}
    </>
  );
};
