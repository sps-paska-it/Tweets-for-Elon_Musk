import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operation';
import { selectUsersAllInfo } from 'redux/selectors';
import { ButtonStyled, DivStyled, LiStyled, UlStyled } from './Tweets.styled';

const ITEMS_PER_PAGE = 3;

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { users, isLoading, error } = useSelector(selectUsersAllInfo);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const visibleUsers = users.slice(0, page * ITEMS_PER_PAGE);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <DivStyled>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      <UlStyled>
        {visibleUsers.map(user => (
          <LiStyled key={user.id}>
            <UserCard user={user} />
          </LiStyled>
        ))}
      </UlStyled>
      {visibleUsers.length < users.length && (
        <ButtonStyled type="button" onClick={onLoadMore}>
          Load more
        </ButtonStyled>
      )}
    </DivStyled>
  );
};
