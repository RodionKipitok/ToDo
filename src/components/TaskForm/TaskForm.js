import { Button } from "components/Button/Button";
// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { addTask } from "../../redux/actions";
import css from "./TaskForm.module.css";

// Отправка экшенов

// Для того чтобы известить страницу о том, что в интерфейсе произошло какое-либо событие, необходимо отправить экшен. Для этого в библиотеке React Redux есть хук  [useDispatch()](<https:||react-redux.js.org/api/hooks#usedispatch>), который возвращает ссылку на функцию отправки экшенов  dispatch с объекта созданного нами ранее стор Redux.

// Створення завдання

// При сабміті форми в компоненті TaskForm необхідно надіслати екшен створення нового завдання, передавши йому значення, введене користувачем у текстове поле.

export const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
