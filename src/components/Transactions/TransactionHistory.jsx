import styles from './styles.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className="transactionHistory">
    <thead>
      <tr>
        <th className={styles.tableHeader}>Type</th>
        <th className={styles.tableHeader}>Amount</th>
        <th className={styles.tableHeader}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item, index) => {
        const line = index;
        return (
          <tr
            className={line % 2 === 0 ? styles.highlight : null}
            key={item.id}
          >
            <th className={styles.tr}>{item.type}</th>
            <th className={styles.tr}>{item.amount}</th>
            <th className={styles.tr}>{item.currency}</th>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
