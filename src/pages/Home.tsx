import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 나열하기 위한 설정 */
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  height: 100vh;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 100px;
`;

const StyledButton = styled.img`
  margin-top: 10px; /* 버튼 간격 조정 */
`;

export default  function Home() {
    return(
        <div>
            <StyledContainer>
                <StyledImage src={process.env.PUBLIC_URL + '/FfunLogo.png'} alt="Logo" />
                <StyledButton src={process.env.PUBLIC_URL + '/NaverLogin.png'} alt="Naver"/>
                <StyledButton src={process.env.PUBLIC_URL + '/KakaoLogin.png'} alt="Kakao" />
                <StyledButton src={process.env.PUBLIC_URL + '/GoogleLogin.png'} alt="Google" />
            </StyledContainer>
        </div>
    )
}