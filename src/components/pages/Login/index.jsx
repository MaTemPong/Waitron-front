import React, { useState } from "react";
import * as S from "./styled"
import img from '../../../asset/logo.png'
import Input from "../../atoms/Input";
import { Cookies } from "react-cookie";


const Login = () => { 
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const saveId = e => {setId(e.target.value)}
    const savePw = e => {setPw(e.target.value)}

    const onSubmit = async () => {
        try {
            await fetch('http://10.56.148.79:5500/signin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    password: pw
                })
            })
            .then((response) => response.json())
            .then((result) => {
                
                if(result.success){
                    const cookies = new Cookies();
                    cookies.set('id', id)
                    return window.location.replace('/choiceRole')
                }
                return alert(result.message)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <S.Wrap>
            <S.Aside>
                <S.Background />
                <S.Gradient />
                <S.Shadow_box>
                    <S.Title>WAITRON</S.Title>
                </S.Shadow_box>
            </S.Aside>
            <S.LoginModal>
                <S.Logo src={img}/>
                <S.Form>
                    <S.InputContainer>
                        <S.InputField>
                            아이디
                            <Input saveVal={id} setSaveVal={saveId}/>
                        </S.InputField>
                        <S.InputField>
                            비밀번호
                            <Input type={"password"} saveVal={pw} setSaveVal={savePw}/>
                        </S.InputField>
                    </S.InputContainer>
                    <S.LinkToRegister href="./register">계정 등록을 원하시나요?</S.LinkToRegister>
                    <S.CenterWarp style={{gap: '20px'}}>
                        <S.SubmitBtn onClick={onSubmit}>로그인</S.SubmitBtn>
                    </S.CenterWarp>
                </S.Form>
            </S.LoginModal>
        </S.Wrap>
    );
}
export default Login;