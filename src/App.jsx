import './App.css';
import AlarmList from './components/AlarmList';
import Header from './components/Header';
import { useAuthState, useDbData } from './utils/firebase';

const App = () => {
  const [currentUser] = useAuthState();
  const [data, error] = useDbData("/");

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <div>
      <Header
        currentUser={currentUser}
        users={Object.values(data.users)}
      />
      <AlarmList
        currentUser={currentUser}
        users={Object.values(data.users)}
        alarms={Object.values(data.alarms)}
      />
    </div>
  );
};

export default App;
