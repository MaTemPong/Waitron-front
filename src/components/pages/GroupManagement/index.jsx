import React, { useEffect, useState } from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";
import BgBtn from "../../atoms/BgBtn";
import Input from "../../atoms/Input";
import CheckBtn from "../../atoms/CheckBtn";
import { Cookies } from "react-cookie";
import ListWrap from "../../atoms/ListWrap";
import GroupList from "../../organisms/GroupList";

const GroupManagement = () => {
    const [searchValue, SetSerchValue] = useState('');
    const [groups, SetGroups] = useState([])
    const SaveSerchValue = (e) => {
        SetSerchValue(e.target.value)
    }

    const cookies = new Cookies();
    const userId = cookies.get('id')

    const createGroup = async() => {
        try{
            await fetch(`http://10.56.148.79:5500/createGroup`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    adminId: userId,
                    name: searchValue
                })

            }).then((response) => response.json())
            .then((result) => {
                SetSerchValue('');
            })
        } catch (error) {
            console.log(error)
        }
    }
    const RenderGroup = async() => {
        try{
            await fetch(`http://10.246.156.106:5500/getGroups/${userId}`,{
                method: 'GET'
            }).then((response) => response.json())
            .then((result) => {
                SetGroups(result);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        RenderGroup();
    }, [])
    useEffect(()=>{
        console.log(groups)
    }, [groups])

    return(
        <S.Wrap>
            <ManagementTitle text={"조직 관리"}/>
            <S.ContentsContainer>
                <S.CreateGroupWrap>
                    <div style={{display: 'flex', gap: '20px', alignItems:'center', marginBottom: '20px'}}>
                        <Input saveVal={searchValue} setSaveVal={SaveSerchValue} placeHolder={"조직을 생성합니다"}></Input>
                        <CheckBtn bgColor={'#D9EDBF'} event={createGroup}>조직 생성</CheckBtn>
                    </div>
                    <ListWrap>
                        {
                            groups.map(group => {
                                return <GroupList key={group._id}>{group.name}</GroupList>
                            })
                        }
                    </ListWrap>
                </S.CreateGroupWrap>
            </S.ContentsContainer>
        </S.Wrap>
    );
}

export default GroupManagement;