import Footer from "../components/Footer";
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {IoChatboxEllipsesSharp, IoAddCircleOutline} from "react-icons/io5";
import {FaHeart} from "react-icons/fa6";
import TimelineList from "../components/TinelineList";
import CircularProgress from '@mui/material/CircularProgress';


const LogoContainer = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;

    background-color: white;
`;

const WellcomeText = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center; /* 가로 중앙 정렬 */
    width: 100%;
    height: 10vh;

`;
const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10vh 0;
    overflow-y: scroll;

    font-size: 12pt;

    //background-color: lightcoral;
`;

const AddBox = styled.div`
    display: flex; /* 아이콘과 텍스트를 가운데로 정렬하기 위해 flex 사용 */
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */

    width: 90vw;
    height: 8vh;

    margin: 0 auto; /* 가운데 정렬 스타일 추가 */
    margin-top: 2rem;

    border: 2px solid lightgray;
    border-radius: 1rem;

    font-size: 3rem;
    color: lightgray;
`;

export interface TimelineItem {
    date: string;
    content: string;
}

export default function Timeline() {
    const [jsonData, setJsonData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 임시 데이터 <<<<<<<<< 삭제 해야함
    const myList: TimelineItem[] = [
        {date: '2023.03.02', content: '소전17 뻔 모임 시작'},
        {date: '2023.10.03', content: '두 번째 회식!'},
        {date: '2024.03.10', content: '처음 모두 모인 뻔모~!'},
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 데이터를 가져오는 중임을 표시
                setIsLoading(true);

                // 가짜 데이터를 가져옴
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setJsonData(data.slice(0, 10));

                // 1초 지연 후에 실행될 함수
                const timeoutId = setTimeout(() => {
                    // console.log('1초가 지났습니다.');
                    setIsLoading(false); // 로딩 상태 변경
                }, 1500);

                // useEffect의 정리(clean-up) 함수에서 setTimeout 함수를 해제
                return () => clearTimeout(timeoutId);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setIsLoading(false); // 에러 발생 시 로딩 상태 변경
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <LogoContainer>
                <img src={process.env.PUBLIC_URL + 'img/logo/timeline_logo.png'} alt="Logo"/>
            </LogoContainer>
            <TimelineContainer>
                <div style={{width: '100%'}}>
                    {isLoading ? (
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh'}}>
                            <CircularProgress/>
                        </div>
                    ) : (
                        <>
                            <WellcomeText>
                                '소전17' 뻔모의 시작을 축하해요!
                            </WellcomeText>
                            <TimelineList items={myList}/>
                            <AddBox>
                                <IoAddCircleOutline/>
                            </AddBox>
                        </>
                    )}
                </div>
            </TimelineContainer>
            <Footer/>
        </div>
    );
}
