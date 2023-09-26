export const selectTodos = (state) => state.todos.todos;

export const selectIsLoading = (state) => state.todos.isLoading;

export const selectEditId = (state) => state.todos.editId;

export const selectErrorMsg = (state) => state.options.errorMsg;

export const selectValue = (state) => state.options.value;

export const selectSearchValue = (state) => state.options.searchValue;

export const selectIsSorted = (state) => state.options.isSorted;

export const selectRefreshTodos = (state) => state.options.refreshTodos;
