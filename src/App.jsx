import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill } from './store/actions.js';

const App = () => {
  const [newSkill, setNewSkill] = useState('');
  const skills = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    dispatch(addSkill(newSkill));
    setNewSkill('');
  };

  const handleDeleteSkill = (skill) => {
    dispatch(deleteSkill(skill));
  };

  return (
    <div>
      <h1>Мое резюме</h1>
      <h2>Навыки</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}
            <button onClick={() => handleDeleteSkill(skill)}>X</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newSkill}
        onChange={e => setNewSkill(e.target.value)}
      />
      <button onClick={handleAddSkill}>Добавить навык</button>
    </div>
  );
};

export default App;