import React, { useEffect, useState } from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";
import Input from "../../atoms/Input";
import ListWrap from "../../atoms/ListWrap";
import JoinRequestList from "../../organisms/JoinRequestList";
import List from "../../atoms/List";
import { Cookies } from "react-cookie";


const JoinRequestFromUser = () => {
    const [searchValue, setSearchValue] = useState('');
    const SaveSearchValue = e => {
        setSearchValue(e.target.value);
    }
    const [users, SetUsers] = useState([]);
    const [requests, SetRequests] = useState([]);
    const [filterUsers, SetFilterUsers] = useState([]);
    
    const cookie = new Cookies();
    const [userId, SetUserId] = useState(cookie.get('id'));

    const FetchUsers = async () => {
        try {
            await fetch(`http://10.56.148.79:5500/getUsers`, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((result) => {
                SetUsers(result);
            })
        } catch (error) {
            console.log(error)
        }
    }

    const FetchRequest = async () => {
        try {
            await fetch(`http://10.56.148.79:5500/getAdminRequest/${userId}`, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((result) => {
                const format = [];
                result.forEach(item => {
                    format.push(item.admin_id);
                });
                console.log(format)
                SetRequests(format);
            })
        } catch (error) {
            console.log(error)
        }
    }
    const renderList = () => {
        if(searchValue !== ""){
            SetFilterUsers(users.filter(user => user.id.includes(searchValue)).sort())
        } else{
            SetFilterUsers(users);
        }
    }
    const init = async () =>{
        await FetchUsers();
        await FetchRequest();
    }

    useEffect(()=>{
        init()
    }, [])
    

    useEffect(()=>{
        renderList()
    }, [users])
    
    
    useEffect(()=>{
        renderList()
    }, [searchValue])

    return(
        <S.Wrap>
            <ManagementTitle text={"참가 요청"}/>
            <S.ContentsContainer>
                <div>
                    <Input saveVal={searchValue} setSaveVal={SaveSearchValue} placeHolder={"검색할 키워드를 입력하세요."}/>
                </div>
                <ListWrap>
                    {
                        filterUsers.map(user => {
                            const content = `${user.id}(${user.name})`
                            const state = Object.values(requests).includes(user.id);
                            console.log(state)
                            return <JoinRequestList key={user._id} id={user.id} state={state}>{content}</JoinRequestList>
                        })
                    }
                </ListWrap>
            </S.ContentsContainer>
        </S.Wrap>
    );
}

export default JoinRequestFromUser;