import React, { useState } from 'react';

function Todolist() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addActivity() {
    if (editIndex !== null) {
      const updatedListData = [...listData];
      updatedListData[editIndex] = activity;
      setListData(updatedListData);
      setActivity('');
      setEditIndex(null);
    } else {
      setListData([...listData, activity]);
      setActivity('');
    }
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((_, id) => i !== id);
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  function editActivity(i) {
    setActivity(listData[i]);
    setEditIndex(i);
  }

  return (
    <>
      <div className="container">
        <div className="header">TodoList</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button onClick={addActivity}>
          {editIndex !== null ? 'UPDATE' : 'ADD'}
        </button>
        <p className="listheading">Here Is Your List :</p>
        {listData.length > 0 &&
          listData.map((data, i) => (
            <div key={i} className="list-item">
              <div className="listData">{data}</div>
              <div className="btn-position">
                <button onClick={() => removeActivity(i)}>REMOVE (-)</button>
                <button onClick={() => editActivity(i)}>EDIT</button>
              </div>
            </div>
          ))}
        {listData.length >= 1 && (
          <button onClick={removeAll}>REMOVE ALL</button>
        )}
      </div>
    </>
  );
}

export default Todolist;