import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TaskActions from "../../store/actions/task";

class Task extends Component {
  render() {
    const { tasks } = this.props;
    console.log(tasks);

    return (
      <div>
        <form>
          <input type="text" />
          <button type="button">Add Task</button>
        </form>
        <h1>Tasks:</h1>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task._id}>
              <h1>{task.title}</h1>
              <h3>{task.description}</h3>
              Comments:
              {task.comments.length > 0 ? (
                task.comments.map(comment => (
                  <p key={comment._id}>{comment.content}</p>
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
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TaskActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
