// import { createStore } from "redux";
// import { statusFilters } from "./constants";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// СТРУКТУРА СОСТОЯНИЯ
// Состояние Redux – это всегда объект, внутрь которого добавляются свойства для состояния программы. Поэтому мы объявили свойство tasks для массива всех задач и filters для возможных фильтров. Состояние Redux может быть настолько простое или сложное, насколько этого требует функционал программы

// Стр. (store)

// Объект, содержащий полное состояние программы, методы доступа к состоянию и отправку экшенов. В приложении может быть только один с. Для создания стора есть функция  createStore(), которая принимает несколько параметров и возвращает новый объект стори.

// createStore(reducer, preloadedState, enhancer);

// reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
// preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
// enhancer - функція розширення можливостей стору. Необов'язковий параметр.

// Початкове значення стану Redux для кореневого редюсера,
//  якщо не передати параметр preloadedState.

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer(); enhancer
export const store = createStore(rootReducer);
