import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import ListWrap from "../../atoms/ListWrap";
import * as S from "./styled"
import AdminJoinRequestList from "../AdminJoinRequestList"
const AdminJoinRequestManagementContent = () => {
    const cookies = new Cookies();
    const uesrId = cookies.get('id')

    const [canAccessUsers, SetCanAccessUsers] = useState([])
    const getRequests = async () => {
        try {
            await fetch(`http://121.162.72.121:5500/getUserRequest/${uesrId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((result) => {
                SetCanAccessUsers(result);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getRequests();
    }, [])

    return (
        <S.Wrap>
            <ListWrap>
            {
                canAccessUsers.map(user => {
                    return <AdminJoinRequestList key={user.user_id} id={user.user_id} rerender={getRequests}>{user.user_id}</AdminJoinRequestList>
                })
            }
            </ListWrap>
        </S.Wrap>
    )
}

export default AdminJoinRequestManagementContent