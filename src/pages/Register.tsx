import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const StyledHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 20px;
`;

const StyledBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
`;


const StyledExplain = styled.label`
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 8px;
  color: #898989;
`;

const StyledText = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  margin-top: 5px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: calc(100% - 20px);
  border: none;
  border-bottom: 1px solid #000000; opacity : 0.3;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  &:focus {
    border-bottom-color: #596AFF;
    outline: none; /* 포커스 효과 제거 */
  }
`;

const StyledVerificationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledVerificationButton = styled.button`
  background-color: #596AFF;
  color: white;
  border: none;
  border-radius: 5px; /* 모서리를 둥글게 만듭니다. */
  padding: 5px;
  font-size: 10px;
`;


const StyledSelect = styled.select`
  width: 100%;
  border: none;
  border-bottom: 1px solid black; opacity : 0.3;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('${process.env.PUBLIC_URL}/triangle.png') no-repeat right center;
  &:focus {
    border-bottom-color: #596AFF;
    outline: none; /* 포커스 효과 제거 */
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #596AFF;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px; /* 모서리를 둥글게 만듭니다. */
`;

const StyledOption = styled.option`
  padding: 20px;
`;



interface IRegisterProps {}

export const Register: React.FC<IRegisterProps> = () => {
  const navigate = useNavigate();


  const [school, setSchool] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [admissionYear, setAdmissionYear] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 제출 시 수행할 로직 작성
    console.log('폼이 제출되었습니다.');
  };

  const handleVerificationButtonClick = () => {
    // 인증번호 발송 로직 작성
    console.log('인증번호 발송');
  };

  const handleVerifyCodeButtonClick = () => {
    // 인증코드 확인 로직 작성
    console.log('인증코드 확인');
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로 이동
  };

  return (
    <div>
      <StyledHeader>
          <StyledBackButton onClick={handleGoBack}>
          <StyledImage src={process.env.PUBLIC_URL + '/arrow_back.png'} alt="프로필" />
          </StyledBackButton>
          <StyledText>회원가입</StyledText>
        </StyledHeader>
      <StyledContainer>
      
        <StyledImage src={process.env.PUBLIC_URL + '/AddImage.png'} alt="프로필" />

        <form onSubmit={handleFormSubmit}>
          <StyledLabel>학교를 선택해주세요</StyledLabel>
          <StyledSelect value={school} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSchool(e.target.value)}>
            <StyledOption value="option1">옵션 1</StyledOption>
            <StyledOption value="option2">옵션 2</StyledOption>
            <StyledOption value="option3">옵션 3</StyledOption>
          </StyledSelect>

          <StyledLabel>이름을 입력해주세요</StyledLabel>
          <StyledInput type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />

          <StyledLabel>학번(입학년도)을 입력해주세요</StyledLabel>
          <StyledExplain><br /> 입학년도 4자리를 입력해주세요 e.g.) 2023년 입학 -&gt;  2023</StyledExplain>
          <StyledInput type="text" value={admissionYear} onChange={(e: ChangeEvent<HTMLInputElement>) => setAdmissionYear(e.target.value)} />

          <StyledLabel>학교 이메일을 입력해주세요</StyledLabel>
          <StyledInputContainer>
            <StyledInput type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <StyledVerificationContainer>
              <StyledVerificationButton type="button" onClick={handleVerificationButtonClick}>
                인증번호 발송
              </StyledVerificationButton>
            </StyledVerificationContainer>
          </StyledInputContainer>

          <StyledLabel>인증코드 입력</StyledLabel>
          <StyledInputContainer>
            <StyledInput type="text" value={verificationCode} onChange={(e: ChangeEvent<HTMLInputElement>) => setVerificationCode(e.target.value)} />
            <StyledVerificationContainer>
            {/* 인증번호 확인 버튼 추가 */}
            <StyledVerificationButton type="button" onClick={handleVerifyCodeButtonClick}>
              인증번호 확인
            </StyledVerificationButton>
            </StyledVerificationContainer>
          </StyledInputContainer>

          <StyledButton type="submit">회원가입 완료</StyledButton>
        </form>
      </StyledContainer>
    </div>
  );
};
