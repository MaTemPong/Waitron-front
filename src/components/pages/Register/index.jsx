import React, { useEffect, useState } from "react";
import * as S from "./styled"
import img from '../../../asset/logo.png'
import Input from "../../atoms/Input";

const Register = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const saveId = e => {setId(e.target.value)}
    const savePw = e => {setPw(e.target.value)}
    const savePwCheck = e => {setPwCheck(e.target.value)}
    const saveName = e => {setName(e.target.value)}
    const saveEmail = e => {setEmail(e.target.value)}

    const onSubmit = async () => {
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
        if(!id) return alert('아이디가 공백입니다.');

        if(!pw) return alert('비밀번호가 공백입니다.');
        if(!pwCheck) return alert('비밀번호를 재확인해주세요.');
        if(pw !== pwCheck) return alert('비밀번호가 일치하지 않습니다.');
        
        if(!name) return alert('이름이 공백입니다.');
        if(!regex.test(email)) return alert('이메일 형식이 잘못되었거나 공백입니다.');

        try {
            await fetch('http://10.56.148.79:5500/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    password: pw,
                    name: name,
                    email: email
                })
            })
            .then((response) => response.json())
            .then((result) => {
                if(result.success){return window.location.replace('/');}
                return alert(result.message)
            })
        } catch (error) {
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
                <S.InputContainer>
                <S.InputField>
                    아이디
                    <Input saveVal={id} setSaveVal={saveId}/>
                </S.InputField>
                <S.InputField>
                    비밀번호
                    <Input type={"password"} saveVal={pw} setSaveVal={savePw}/>
                </S.InputField>
                <S.InputField>
                    비밀번호 재확인
                    <Input type={"password"} saveVal={pwCheck} setSaveVal={savePwCheck}/>
                </S.InputField>
                <S.InputField>
                    이름
                    <Input saveVal={name} setSaveVal={saveName}/>
                </S.InputField>
                <S.InputField>
                    이메일
                    <Input saveVal={email} setSaveVal={saveEmail}/>
                </S.InputField>
                </S.InputContainer>
                <S.LinkToRegister href="/">계정이 있으신가요?</S.LinkToRegister>
                <S.CenterWarp style={{gap: '20px'}}>
                    <S.SubmitBtn onClick={onSubmit}>회원가입</S.SubmitBtn>
                </S.CenterWarp>
            </S.LoginModal>
        </S.Wrap>
    );
}
export default Register;