// React/Redux
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// My library
import { removeTodo } from '../actions';

const TodoListView = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      (
        <div key={todo.id}>
          <span>
            {todo.text}
          </span>
          <button
            onClick={() => onTodoClick(todo.id)}
          >
            X
          </button>
        </div>
      ),
    )}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  onTodoClick: removeTodo,
};

TodoListView.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListView);

export default TodoList;
