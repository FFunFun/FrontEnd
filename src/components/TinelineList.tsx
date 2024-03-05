import styled from "styled-components";
import React from 'react';
import {IoChatboxEllipsesSharp} from "react-icons/io5";
import {FaHeart} from "react-icons/fa6";
import {TimelineItem} from "../pages/Timeline";
import {FaCircle} from "react-icons/fa6";


const TimelineContent = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 4rem;
    width: 100%;
`;

const TimelineBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;

    padding: 0 0.5rem 4rem 0.5rem;
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

const Circle = styled.div`
    position: absolute; /* 부모 요소에 상대적으로 위치 */
    left: 38vw; /* 부모 요소의 중앙에 위치 */
    transform: translate(-50%, -10%); /* 가운데 정렬 */

    color: blue;
    font-size: 1rem;
`;

const Line = styled.div`
    position: absolute; /* 부모 요소에 상대적으로 위치 */
    left: 38vw; /* 부모 요소의 중앙에 위치 */
    transform: translateX(-50%); /* 가운데 정렬 */

    background-color: blue;
    width: 3px;
    height: 40vh; /* 부모 요소의 높이에 맞게 설정 */
`;

const TimelineList: React.FC<{ items: TimelineItem[] }> = ({items}) => {

    return (
        <TimelineContent>
            {items.map((item: TimelineItem, key: number) => (
                <TimelineBox>
                    <TimelineText>
                        {item.date}
                        <br/>
                        {item.content}
                    </TimelineText>
                    <>
                        <Circle>
                            <FaCircle/>
                        </Circle>
                        {key < items.length - 1 ? (
                            <Line/>
                        ) : (
                            <br/>
                        )}
                    </>
                    <div>
                        <TimelineImg src={'https://picsum.photos/200/200'}/>
                        <CommentContainer>
                            <Comment color="gray">
                                <Icon>
                                    <IoChatboxEllipsesSharp/>
                                </Icon>
                                {(key + 2) * 7}
                            </Comment>
                            <Comment color="red">
                                <Icon>
                                    <FaHeart/>
                                </Icon>
                                {(key + 7) * 3}
                            </Comment>
                        </CommentContainer>
                    </div>
                </TimelineBox>
            ))}
        </TimelineContent>
    );
}

export default TimelineList;