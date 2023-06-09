import styled from '@emotion/styled';
import picture2 from 'images/picture2.png';
import vector from 'images/vector.svg';
import circle from 'images/сircle.png';
import line from 'images/line.png';

export const DivStyled = styled.div`
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Goit = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
  background: url(${vector}) no-repeat;
`;

export const Pic = styled.div`
  position: absolute;
  margin: 28px 36px 264px;
  width: 308px;
  height: 168px;
  background: url(${picture2}) no-repeat;
`;

export const CircleAvatar = styled.div`
  position: absolute;
  margin: 178px 145px 202px;
  width: 90px;
  height: 89px;
  background: url(${circle}) no-repeat;
  z-index: 2;
`;

export const ButtonFw = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const ButtonFwg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;
  width: 196px;
  height: 50px;

  background: #6bb7c6;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const ButtonText = styled.span`
  height: 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const Avatar = styled.div`
  position: absolute;
  margin: 187px 159px 211px;

  /* border-radius: 50%; */
  z-index: 1;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 63px;
  height: 63px;
`;

export const Rect = styled.div`
  position: absolute;
  margin-top: 214px;
  margin-bottom: 238px;
  width: 100%;
  height: 8px;
  background: url(${line}) no-repeat;
`;

export const Blocks = styled.div`
  position: absolute;
  margin-top: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
`;

export const Tweets = styled.div`
  height: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Foll = styled.div`
  margin-top: 16px;
  height: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
