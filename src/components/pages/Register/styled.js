import styled from "styled-components";
import { Input } from '../../atoms/Input/styled';

export const Wrap = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const Aside = styled.div`
    position: relative;
    width: 65%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
`;
    
export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #1882E3;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`;
    
export const Gradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(315deg, rgba(24, 130, 227, .5), rgba(61, 119, 228, .5));
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const Shadow_box = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
  font-weight: bold;
  display: table;
  overflow: hidden;
  float: left;
  margin:30px;
`;

export const Title = styled.h1`
  display: table-cell;
  vertical-align: middle;
  color: #fff;
  font-size: 10vw;
  text-align: center;
  overflow: hidden;
  mix-blend-mode: hard-light;
  text-shadow: 
  rgba(90, 90, 90, 1) 1px 1px,
  rgba(90, 90, 90, 1) 2px 2px,
  rgba(90, 90, 90, 1) 3px 3px,
  rgba(90, 90, 90, 1) 3px 3px,
  rgba(90, 90, 90, 1) 4px 4px,
  rgba(90, 90, 90, 1) 5px 5px,
  rgba(90, 90, 90, 1) 6px 6px,
  rgba(90, 90, 90, 1) 7px 7px,
  rgba(90, 90, 90, 1) 8px 8px,
  rgba(90, 90, 90, 1) 9px 9px,
  rgba(90, 90, 90, 1) 10px 10px,
  rgba(90, 90, 90, 1) 11px 11px,
  rgba(90, 90, 90, 1) 12px 12px,
  rgba(90, 90, 90, 1) 13px 13px,
  rgba(90, 90, 90, 1) 14px 14px,
  rgba(90, 90, 90, 1) 15px 15px,
  rgba(90, 90, 90, 1) 16px 16px,
  rgba(90, 90, 90, 1) 17px 17px,
  rgba(90, 90, 90, 1) 18px 18px,
  rgba(90, 90, 90, 1) 19px 19px,
  rgba(90, 90, 90, 1) 20px 20px,
  rgba(90, 90, 90, 1) 21px 21px,
  rgba(90, 90, 90, 1) 22px 22px,
  rgba(90, 90, 90, 1) 23px 23px,
  rgba(90, 90, 90, 1) 24px 24px,
  rgba(90, 90, 90, 1) 25px 25px,
  rgba(90, 90, 90, 1) 26px 26px,
  rgba(90, 90, 90, 1) 27px 27px,
  rgba(90, 90, 90, 1) 28px 28px,
  rgba(90, 90, 90, 1) 29px 29px,
  rgba(90, 90, 90, 1) 30px 30px,
  rgba(90, 90, 90, 1) 31px 31px,
  rgba(90, 90, 90, 1) 32px 32px,
  rgba(90, 90, 90, 1) 33px 33px,
  rgba(90, 90, 90, 1) 34px 34px,
  rgba(90, 90, 90, 1) 35px 35px,
  rgba(90, 90, 90, 1) 36px 36px,
  rgba(90, 90, 90, 1) 37px 37px,
  rgba(90, 90, 90, 1) 38px 38px,
  rgba(90, 90, 90, 1) 39px 39px,
  rgba(90, 90, 90, 1) 40px 40px,
  rgba(90, 90, 90, 1) 41px 41px,
  rgba(90, 90, 90, 1) 42px 42px,
  rgba(90, 90, 90, 1) 43px 43px,
  rgba(90, 90, 90, 1) 44px 44px,
  rgba(90, 90, 90, 1) 45px 45px,
  rgba(90, 90, 90, 1) 46px 46px,
  rgba(90, 90, 90, 1) 47px 47px,
  rgba(90, 90, 90, 1) 48px 48px,
  rgba(90, 90, 90, 1) 49px 49px,
  rgba(90, 90, 90, 1) 50px 50px,
  rgba(90, 90, 90, 1) 51px 51px,
  rgba(90, 90, 90, 1) 52px 52px,
  rgba(90, 90, 90, 1) 53px 53px,
  rgba(90, 90, 90, 1) 54px 54px,
  rgba(90, 90, 90, 1) 55px 55px,
  rgba(90, 90, 90, 1) 56px 56px,
  rgba(90, 90, 90, 1) 57px 57px,
  rgba(90, 90, 90, 1) 58px 58px,
  rgba(90, 90, 90, 1) 59px 59px,
  rgba(90, 90, 90, 1) 60px 60px,
  rgba(90, 90, 90, 1) 61px 61px,
  rgba(90, 90, 90, 1) 62px 62px,
  rgba(90, 90, 90, 1) 63px 63px,
  rgba(90, 90, 90, 1) 64px 64px,
  rgba(90, 90, 90, 1) 65px 65px,
  rgba(90, 90, 90, 1) 66px 66px,
  rgba(90, 90, 90, 1) 67px 67px,
  rgba(90, 90, 90, 1) 68px 68px,
  rgba(90, 90, 90, 1) 69px 69px,
  rgba(90, 90, 90, 1) 70px 70px,
  rgba(90, 90, 90, 1) 71px 71px,
  rgba(90, 90, 90, 1) 72px 72px,
  rgba(90, 90, 90, 1) 73px 73px,
  rgba(90, 90, 90, 1) 74px 74px,
  rgba(90, 90, 90, 1) 75px 75px,
  rgba(90, 90, 90, 1) 76px 76px,
  rgba(90, 90, 90, 1) 77px 77px,
  rgba(90, 90, 90, 1) 78px 78px,
  rgba(90, 90, 90, 1) 79px 79px,
  rgba(90, 90, 90, 1) 80px 80px,
  rgba(90, 90, 90, 1) 81px 81px,
  rgba(90, 90, 90, 1) 82px 82px,
  rgba(90, 90, 90, 1) 83px 83px,
  rgba(90, 90, 90, 1) 84px 84px,
  rgba(90, 90, 90, 1) 85px 85px,
  rgba(90, 90, 90, 1) 86px 86px,
  rgba(90, 90, 90, 1) 87px 87px,
  rgba(90, 90, 90, 1) 88px 88px,
  rgba(90, 90, 90, 1) 89px 89px,
  rgba(90, 90, 90, 1) 90px 90px,
  rgba(90, 90, 90, 1) 91px 91px,
  rgba(90, 90, 90, 1) 92px 92px,
  rgba(90, 90, 90, 1) 93px 93px,
  rgba(90, 90, 90, 1) 94px 94px,
  rgba(90, 90, 90, 1) 95px 95px,
  rgba(90, 90, 90, 1) 96px 96px,
  rgba(90, 90, 90, 1) 97px 97px,
  rgba(90, 90, 90, 1) 98px 98px,
  rgba(90, 90, 90, 1) 99px 99px,
  rgba(90, 90, 90, 1) 100px 100px;


`;

export const LoginModal = styled.div`
    width: 35%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;
`;

export const Form = styled.div`
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const InputField = styled.label`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 10px;
    > ${Input}{
        width: 350px;
        height: 50px;
        padding: 0 10px;
        border-radius: 5px;
        outline: none;
        border: solid 1px #333;
        font-size: 1.2rem;
    }
`;

export const Logo = styled.img`
    width: 300px;
    margin: 0 auto;
`;

export const LinkToRegister = styled.a`
    display: block;
    color: #247fe4ff;
    text-decoration: underline;
    text-underline-offset : 3px;
    width: 350px;
    text-align: left;
    padding: 10px 0;
    &:hover{
        filter: brightness(120%);
    }
`

export const CenterWarp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    width: 350px;
`;

export const SubmitBtn = styled.button`
    background-color: #247fe4ff;
    color: white;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 10px;
    font-family: 'WantedSans-Medium';
    cursor: pointer;
    border: none;
    &:hover{
        filter: brightness(120%);
    }
`;
