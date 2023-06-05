import { useDispatch, useSelector } from 'react-redux';
import { followTweet, unFollowTweet } from 'redux/operation';
import { selectFollowers } from 'redux/selectors';
import {
  Avatar,
  Blocks,
  ButtonFw,
  ButtonFwg,
  ButtonText,
  CircleAvatar,
  DivStyled,
  Foll,
  Goit,
  Img,
  Pic,
  Rect,
  Tweets,
} from './UserCard.styled';

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const myFollowers = useSelector(selectFollowers);
  const isFollower = myFollowers.includes(Number(user.id));
  console.log(user.id);
  console.log(myFollowers);
  console.log(isFollower);

  const handleUnFollowTweet = () => {
    dispatch(unFollowTweet(user));
  };
  const handleFollowTweet = () => {
    dispatch(followTweet(user));
  };
  return (
    <DivStyled>
      <Goit />
      <Pic />
      <CircleAvatar />
      <Rect />
      <Avatar>
        <Img
          src={user.avatar}
          title={user.user}
          alt={user.user}
          width={63}
          height={63}
        />
      </Avatar>
      <Blocks>
        <Tweets>{user.tweets} tweets</Tweets>
        <Foll>
          {user.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          followers
        </Foll>
        {isFollower ? (
          <ButtonFwg onClick={handleUnFollowTweet}>
            <ButtonText>Following</ButtonText>
          </ButtonFwg>
        ) : (
          <ButtonFw onClick={handleFollowTweet}>
            <ButtonText>Follow</ButtonText>
          </ButtonFw>
        )}
      </Blocks>
    </DivStyled>
  );
};
