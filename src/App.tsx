import {Component, createEffect, createSignal} from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const [double, setDouble] = createSignal(0);
  
    const increment = () => setCount(count() + 1);

  createEffect(() => {
    setDouble(count() * 2);
  });
  
  return (
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              class={styles.link}
              href="https://github.com/solidjs/solid"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
        <div>
          <span>Count: {count()}</span>{" "}
          <span>Double: {double()}</span>{" "}
          {/* ✅ will update when `count()` changes. */}
          <button type="button" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
  );
};

export default App;
