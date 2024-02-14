// Фильтр по статусу

// Сохраним возможные значения фильтра как объекта, чтобы повторно использовать их в разных местах программы: компоненты  StatusFilter для вычисления текущего активного фильтра и отправки экшенов изменения фильтра, компоненты  TaskList для вычисления списка видимых задач, а также функции-редюсеры, в которой затем будем обрабатывать экшен изменения фильтра.

export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  completed: "completed",
});