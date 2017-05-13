import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 1,
      text: 'Use Redux',
    });
  });

  it('removeTodo should create REMOVE_TODO action', () => {
    expect(actions.removeTodo(1)).toEqual({
      type: 'REMOVE_TODO',
      id: 1,
    });
  });
});
