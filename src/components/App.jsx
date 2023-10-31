import { Profile } from "./Profile/Profile";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Wrapper } from "./App.styled";
export const App = () => {
  return (
    <Wrapper
      style={{
backgroundColor: '#B0C4DE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '0 40px',
        marginTop: '50px',
        border: '2px dashed red',



      }}
    >

      <Profile items={user}/>
      <Statistics title='Upload Stats' stats={data}/>
      <FriendList friends={friends}/>


      <TransactionHistory items={transactions}/>
    </Wrapper>

  );
};
