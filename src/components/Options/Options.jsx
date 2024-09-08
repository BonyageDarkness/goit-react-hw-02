import styles from "./Options.module.css";

const Options = ({ onFeedback, onReset, total }) => (
  <div className={styles.options}>
    <button onClick={() => onFeedback("good")}>Good</button>
    <button onClick={() => onFeedback("neutral")}>Neutral</button>
    <button onClick={() => onFeedback("bad")}>Bad</button>
    {total > 0 && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;
