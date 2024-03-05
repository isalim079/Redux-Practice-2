import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/features/todo/todoSlice";

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                Todos

                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                        >
                            {todo.text}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="px-2 py-1 bg-fuchsia-900 text-white ml-4"
                            >
                                Delete
                            </button>

                        </li>
                    ))
                }

            </div>
        </>
    );
};

export default Todos;
