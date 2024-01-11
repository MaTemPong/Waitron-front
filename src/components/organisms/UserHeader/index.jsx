import { useState } from "react";
import * as S from './styled';
import logo from '../../../asset/logo.png'
import MainList from "../../atoms/MainList";
import AdminInfoView from "../../atoms/InfoView"

const UserHeader = ({}) => {

    const [wait, setWait] = useState(false);
    const [person, setPerson] = useState(false);
    const [group, setGroup] = useState(false);
    
    const onClick = (props) => {
        if(props === 'wait'){
            setWait(true);
            setPerson(false);
            setGroup(false);
        }else if(props === 'person'){
            setWait(false);
            setPerson(true);
            setGroup(false);
        }else{
            setWait(false);
            setPerson(false);
            setGroup(true);
        }
    }

    return (
        <S.StyledHeader>
            <div>
                <img src={logo} width={"100%"} style={{padding: "20px"}}/>
                <S.Menu>
                    <MainList state={wait} onClick={() => onClick('wait')} link={'/user/notificationList'}>알림 목록</MainList>
                    <MainList state={group} onClick={() => onClick('group')} link={'/user/joinRequest'}>참가 요청</MainList>
                </S.Menu>
            </div>
            <AdminInfoView curRole={"사용자"}></AdminInfoView>
        </S.StyledHeader>
    );
}

export default UserHeader;