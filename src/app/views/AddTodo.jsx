// React/Redux
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// My library
import { addTodo } from '../actions';

const AddTodoDispatcher = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodoDispatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = connect()(AddTodoDispatcher);

export default AddTodo;
