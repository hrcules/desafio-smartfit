import Forms from "./components/Forms";
import Header from "./components/Header";

import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Forms />
    </div>
  );
}

export default App;
