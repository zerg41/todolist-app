import React, { FC, useContext } from 'react';
// context
import { ModalContext } from 'context';
// components
import { Button } from 'components';
// style
import './styles.css';
// utils
import { TodoSelectionOptions } from 'utils/constants';

type ToolbarProps = {
  onFilterChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Toolbar: FC<ToolbarProps> = React.memo(({ onFilterChange }) => {
  let modal = useContext(ModalContext);

  function handleAddTodoButtonClick() {
    modal?.open();
  }

  return (
    <div className='toolbar'>
      <span className='toolbar__selector '>
        <label htmlFor='todo-select'>Todo Filter:</label>
        <select id='todo-select' onChange={(evt) => onFilterChange(evt)}>
          <option value={TodoSelectionOptions.ALL}>All</option>
          <option value={TodoSelectionOptions.COMPLETED}>Completed</option>
          <option value={TodoSelectionOptions.UNFINISHED}>Unfinished</option>
        </select>
      </span>
      <Button
        text='Add New Todo'
        variation='primary'
        className='toolbar__button'
        onClick={handleAddTodoButtonClick}
      />
    </div>
  );
});
