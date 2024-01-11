import * as S from './styled';

const List = ({children, id, name}) => {
  return(
    <S.Li>
      {children}
    </S.Li>
  );
}

export default List;