import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readTasks } from '../store/actions/tasks';
import { RootReducer } from '../store/root-reducer';
import { Task } from './Task';

export const Tasks = () => {
  const tasks = useSelector((state) => (state as RootReducer).tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readTasks());
  }, []);

  return (
    <>{tasks?.length > 0 ? tasks.map((task) => <Task key={task.id} task={task} />) : 'No Tasks'}</>
  );
};
