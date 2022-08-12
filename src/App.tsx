import { Provider } from 'react-redux';
import SearchUser from './Components/SearchUser';
import UsersList from './Components/UsersList';
import { store } from './Redux/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <SearchUser />
        <UsersList />
      </Provider>
    </>
  );
}

export default App;
