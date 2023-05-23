// Завдання №1
import Profile from "./Profile/Profile";
import user from "./json/user.json";
// Завдання №2
import Statistics from "./Statistics/Statistics";
import data from './json/data.json';
// Завдання №3
import FriendList from "./FriendList/FriendList";
import friends from "./json/friends.json";
// Завдання №4
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./json/transactions.json";
export const App = () => {
  return (
    <div
      style={{
        margin: '100px',
        display: 'flex',
        gap:  '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
};
