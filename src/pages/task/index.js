import React, { Component } from "react";
import api from "../../services/api";

export default class index extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    const res = await api.get("/tasks");
    const tasks = res.data.tasks;
    console.log(tasks);
    this.setState({ tasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>Tasks:</h1>
        {tasks.map(task => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <h3>{task.description}</h3>
            Comments:
            {task.comments.map(comment => (
              <p key={comment._id}>{comment.content}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
