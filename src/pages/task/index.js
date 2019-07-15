import React from "react";
import { useSelector, useDispatch } from "react-redux";

function addTaskAction(task) {
  return { type: "addTask", task };
}

export default function Task() {
  const tasks = useSelector(state => state.task);
  const dispatch = useDispatch();

  function addTask() {
    dispatch(
      addTaskAction({
        _id: Date.now(),
        title: "fazer algo..",
        description: "alguma coisa q deveria fazer",
        comments: []
      })
    );
  }

  return (
    <>
      <div>
        {/* <h1>{user}</h1>
        <form>
          <input type="text" />
          <button type="button" onClick={addTask}>
            Add Task
          </button>
        </form>
        <nav>
          <Link to={"/newtask"}>New</Link>
        </nav> */}
        <h1>Tasks:</h1>
        {tasks ? (
          tasks.map(task => (
            <div key={task._id}>
              <h1>{task.title}</h1>
              <h3>{task.description}</h3>
              Comments:
              {task.comments.length > 0 ? (
                task.comments.map(comment => (
                  <p key={comment}>{comment.content}</p>
                ))
              ) : (
                <p>Nenhum comentario</p>
              )}
            </div>
          ))
        ) : (
          <p>Nenhuma task</p>
        )}
      </div>
    </>
  );
}
