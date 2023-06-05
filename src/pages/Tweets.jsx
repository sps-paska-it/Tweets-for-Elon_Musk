import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operation';
import { selectUsersAll } from 'redux/selectors';

export const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, isLoading, error } = useSelector(selectUsersAll);
  console.log(users, isLoading, error);

  return (
    <>
      <h2>Tweets</h2>
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {error && <p>{error}</p>} */}
      <ul>
        {/* {users.map(contact => ( */}
        <li>{/* <User /> */}</li>
        {/* ))} */}
      </ul>
    </>
  );
};
