import styled, { css } from "styled-components";

export const BackgroundEditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: grey;
    opacity: 80%;
    border: none;
    padding: 8px 16px;
    border-radius: 40px;

    .camera-icon{
      color: white;
      width: 20px;
      height: 18px;
    }

    .banner-img {
      color: white;
    }

  }
`;

export const EditMain = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const LeftContainer = styled.div`
  min-width: 320px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 2px solid #f2f2f2;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: url(${props => props.avatarURL});
  background-position: center center;
  font-size: 40px;

  div{
    font-size: 30px;
  }
`;

export const Popover = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-top: 23px;

  >div{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 25px;

    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }

    >*{
      &:first-child {
        width: 24px;
        height: 24px;
        color: #a9a9a9
      }
    }

    >p {
      padding-left: 20px;
      font-size: 14px;
    }
  }
`;

export const LabelImg = styled.label`
  color: black;
  cursor: pointer;
  padding-left: 15px;
  font-size: 14px;
`;

export const InputImg = styled.input`
  display: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 20px 48px;
  mix-blend-mode: normal;
  border: 1px solid #f2f2f2;
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  background-color: white;
  color: #000000;
  text-transform: uppercase;
  font-size: 10px;

  &:hover {
    cursor: pointer;
    background-color: grey;
  }
  
  ${({ variant }) => variant === 'purple' && css`
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border: transparent;
    border-radius: 30px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InputGrid = styled.div`
  padding: 60px 60px 40px 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
`;

export const FormField = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  &.things-I-like {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  outline: none;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid grey;
`;

export const ThingsUserLikesContainer = styled.div`
  padding: 0 60px 60px 60px;
  display: flex;
  flex-direction: column;
`;

export const ThingsUserLikes = styled.div`
  width: 100%;  
  padding: 20px 0;
`;

export const Tag = styled.p`
  width: max-content;
  text-align: center;
  padding: 9px 16px;
  background: #f2f2f2;
  mix-blend-mode: normal;
  border-radius: 18px;
  color: black;
  float: left;
  margin: 0  8px 16px 0;
  display: flex;
  align-items: center;

  .deleteX {
    width: 10px;
    padding-left: 15px;
    cursor: pointer;
  }
`;
