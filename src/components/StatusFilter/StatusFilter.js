// import { Button } from "components/Button/Button";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { getStatusFilter } from "../../redux/selectors";
// import { statusFilters } from "../../redux/constants";
// import css from "./StatusFilter.module.css";

// console.log(statusFilters);

// // Сохраним возможные значения фильтра как объекта, чтобы повторно использовать их в разных местах программы: компоненты  StatusFilter для вычисления текущего активного фильтра и отправки экшенов изменения фильтра

// // Компоненту  StatusFilter требуется значение фильтра по свойству  statusFilter состояния Redux, поэтому функция-селектор будет выглядеть как  state => state.filters.status.

// export const StatusFilter = () => {
//   // Отримуємо значення фільтра із стану Redux
//   const filter = useSelector(getStatusFilter);
//   return (
//     <div className={css.wrapper}>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

import { useSelector, useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
