import Footer from "../components/Footer";
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {IoChatboxEllipsesSharp, IoAddCircleOutline} from "react-icons/io5";
import {FaHeart} from "react-icons/fa6";


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

    gap: 2rem;

    padding: 10vh 0;
    overflow-y: scroll;

    font-size: 12pt;

    //background-color: lightcoral;
`;
const TimelineContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`;
const TimelineBox = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 0.5rem;
`;
const TimelineText = styled.div`
    width: 30vw;
    font-weight: bold;
`;
const TimelineImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5%; /* 모서리를 둥글게 만들기 */
`;
const CommentContainer = styled.div`
    display: flex;
    justify-content: right;
    gap: 0.5rem;
    width: 100%;
    font-weight: bold;
`;
const Comment = styled.div`
    display: flex;
    align-content: center;
    color: ${props => props.color || 'transparent'}; /* 프롭스로부터 색상을 받음 */
    padding-right: 0.5rem;
`;
const Icon = styled.div`
    margin-right: 0.3rem;
    margin-top: 0.2rem;
`;
const AddBox = styled.div`
    display: flex; /* 아이콘과 텍스트를 가운데로 정렬하기 위해 flex 사용 */
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */

    width: 90vw;
    height: 8vh;

    margin: 0 auto; /* 가운데 정렬 스타일 추가 */

    border: 2px solid lightgray;
    border-radius: 1rem;

    font-size: 3rem;
    color: lightgray;
`;

interface MyListItem {
    date: string;
    content: string;
}

export default function Timeline() {
    const [jsonData, setJsonData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 임시 데이터 <<<<<<<<< 삭제 해야함
    const myList: MyListItem[] = [
        {date: '2023.03.02', content: '소전17 뻔 모임 시작'},
        {date: '2023.10.03', content: '두 번째 회식!'},
        {date: '2024.03.10', content: '처음 모두 모인 뻔모~!'},
    ];

    useEffect(() => {
        const fetchData = async () => {
            // 데이터를 가져오는 중임을 표시
            setIsLoading(true);

            try {
                // 가짜 데이터를 가져옴
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setJsonData(data.slice(0, 10));
            } catch (error) {
                console.error('Error fetching data: ', error);
            }

            // 데이터 가져오기 완료됨
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            <LogoContainer>
                <img src={process.env.PUBLIC_URL + 'img/logo/timeline_logo.png'} alt="Logo"/>
            </LogoContainer>
            <TimelineContainer>
                <WellcomeText>
                    '소전17' 뻔모의 시작을 축하해요!
                </WellcomeText>
                <div style={{width: '100%'}}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <TimelineContent>
                            {myList.map((item: any) => (
                                <TimelineBox>
                                    <TimelineText>
                                        {item.date}
                                        <br/>
                                        {item.content}
                                    </TimelineText>
                                    <div>
                                        <TimelineImg src={'https://picsum.photos/200/200'}/>
                                        <CommentContainer>
                                            <Comment color="gray">
                                                <Icon>
                                                    <IoChatboxEllipsesSharp/>
                                                </Icon>
                                                23
                                            </Comment>
                                            <Comment color="red">
                                                <Icon>
                                                    <FaHeart/>
                                                </Icon>
                                                7
                                            </Comment>
                                        </CommentContainer>
                                    </div>
                                </TimelineBox>
                            ))}
                        </TimelineContent>
                    )}
                </div>
                <AddBox>
                    <IoAddCircleOutline/>
                </AddBox>
            </TimelineContainer>
            <Footer/>
        </div>
    );
}
