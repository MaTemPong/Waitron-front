import React, { useEffect, useState } from "react";
import ListWrap from "../../atoms/ListWrap";
import * as S from "./styled"
import { Cookies } from "react-cookie";
import PersonContentList from "../PersonContentList";
const PersonContent = () => {
    const [person, SetPerson] = useState([]);
    const cookies = new Cookies();
    const userId = cookies.get('id')
    const getAccessUsers = async() => {
        try{
            fetch(`http://10.246.156.106:5500/getAccessUsers/${userId}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }

            }).then((response) => response.json())
            .then((result) => {
                console.log(result)
                SetPerson(result);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAccessUsers()
    }, [])

    return (
        <S.Wrap>
            <ListWrap>
                {
                    person.map(user => {
                        const content = `${user.id}(${user.name})`
                        return <PersonContentList key={user._id}>{content}</PersonContentList>
                    })
                }
            </ListWrap>
        </S.Wrap>
    )
}

export default PersonContent;