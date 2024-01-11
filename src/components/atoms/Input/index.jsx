import * as S from './styled';

const Input = ({type, saveVal, setSaveVal, placeHolder}) => {
  const setSaveValHandler = e => {
    setSaveVal(e)
  }
  return(
    <S.Input type={type} onChange={setSaveValHandler} placeholder={placeHolder}/>
  );
}

export default Input;