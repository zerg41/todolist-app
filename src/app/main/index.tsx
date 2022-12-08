import React, { FC, useCallback, useState } from 'react';
// components
import { CardList, Toolbar } from 'components';
// style
import './styles.css';
// utils
import { TodoSelectionOptions } from 'utils/constants';

const Main: FC = () => {
  let [selectedTodoOption, setSelectedTodoOption] = useState<string>(TodoSelectionOptions.ALL);

  let handleFilterChange = useCallback((evt: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTodoOption(evt.target.value);
  }, []);

  return (
    <main className='app-content'>
      <Toolbar onFilterChange={handleFilterChange} />
      <CardList filter={selectedTodoOption} />
    </main>
  );
};

export default Main;
