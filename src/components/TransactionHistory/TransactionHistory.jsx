import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th className={s.tableCategory}>Type</th>
                    <th className={s.tableCategory}>Amount</th>
                    <th className={s.tableCategory}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency}) =>(
                <tr key={id} className={s.transactionItem}>
                        <td className={s.transactionId}>{type}</td>
                        <td className={s.transactionId}>{amount}</td>
                        <td className={s.transactionId}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}
export default TransactionHistory;