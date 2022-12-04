import React, { FC, useContext, useState } from 'react';
// components
import { CardList, Button } from 'components';
// style
import './styles.css';
// utils
import { TodoSelectionOptions } from 'utils/constants';
import { ModalContext } from 'context';

const Main: FC = () => {
  let [selectedTodoOption, setSelectedTodoOption] = useState<string>(TodoSelectionOptions.ALL);
  let modal = useContext(ModalContext);

  function handleFilterChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    let selectedOption = evt.target.value;

    setSelectedTodoOption(selectedOption);
  }

  function handleAddTodoButtonClick() {
    modal.open();
  }

  return (
    <main className='app__content'>
      <div className='app__toolbar'>
        <span className='toolbar__selector '>
          <label htmlFor='todo-select'>Todo Filter:</label>
          <select id='todo-select' onChange={(evt) => handleFilterChange(evt)}>
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
      <CardList filter={selectedTodoOption} />
    </main>
  );
};

export default Main;
