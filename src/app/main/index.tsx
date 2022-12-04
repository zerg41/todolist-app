import React, { FC, useCallback, useEffect, useState } from 'react';
// components
import { CardList, Toolbar } from 'components';
// style
import './styles.css';
// utils
import { TodoSelectionOptions } from 'utils/constants';

const Main: FC = React.memo(() => {
  let [selectedTodoOption, setSelectedTodoOption] = useState<string>(TodoSelectionOptions.ALL);

  let handleFilterChange = useCallback((evt: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTodoOption(evt.target.value);
  }, []);

  return (
    <main className='app__content'>
      <Toolbar onFilterChange={handleFilterChange} />
      <CardList filter={selectedTodoOption} />
    </main>
  );
});

export default Main;
