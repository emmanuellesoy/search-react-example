import React, { useState, useEffect } from 'react';
import './style.css';

const getData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default function App() {
  const [inputValue, setInputValue] = useState('Search...');
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    getData().then((response) => setAllItems(response));
  }, []);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const dataFiltered = allItems.filter((element) =>
      element.title.includes(inputValue)
    );
    setItems(dataFiltered);
  }, [inputValue]);

  return (
    <div>
      <input value={inputValue} onChange={onChangeHandler} />
      {items.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}
