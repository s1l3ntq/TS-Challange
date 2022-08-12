import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../model';
import { IRootState } from '../Redux/Store';

const UsersList = () => {
  const users = useSelector((state: IRootState) => state.users);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Total Repos</th>
          <th>Called</th>
        </tr>
        {users.map((user: IUser) => {
          const { name, repos } = user;
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{repos}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersList;