import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';
import css from './Task.module.css';

// Удаление задачи
// При нажатии на кнопку удаления в компоненте  Taskнеобходимо отправить экшен удаления задачи, передав ему идентификатор задачи. Этих данных будет достаточно для удаления задачи из массива объектов.

// Переключение статуса
// При нажатии на чекбокс в компоненте  Taskнеобходимо отправить экшен переключения статуса задачи, передав ему идентификатор задачи. Этих данных будет достаточно для того, чтобы найти задачу в массиве объектов и изменить значение свойства на обратное

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  console.log(dispatch);

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Вызываем генератор экшена и передаем идентификатор задачи
  // Отправляем результат – экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
