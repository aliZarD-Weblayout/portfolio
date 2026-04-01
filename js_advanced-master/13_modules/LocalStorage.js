export async function localStorage(title) {
    let arayCases = JSON.parse(localStorage.getItem(title)) || [];
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = CreateTodoList();
    let tasks = arayCases;
    console.log(localStorage.getItem(title))
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    function Task1(description) {
        this.name = description;
        this.done = false;
    }
    const createTemplate = (Task1, index) => {
        return
    }
    const fillHtmlList = () => {
        tasks.forEach((item, index) => {
            todoList.append(createTodoItem(item.name).item)
        })
    }
    fillHtmlList()
    const updateLocal = () => {
        localStorage.setItem(title, JSON.stringify(tasks));
    }
    todoItemForm.form.addEventListener('submit', () => {
        tasks.push(new Task1(todoItemForm.input.value));
        updateLocal();
    })
}
