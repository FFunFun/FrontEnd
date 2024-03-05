import styled from "styled-components";
import React from 'react';
import {IoChatboxEllipsesSharp} from "react-icons/io5";
import {FaHeart} from "react-icons/fa6";
import {TimelineItem} from "../pages/Timeline";

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

const TimelineList: React.FC<{ items: TimelineItem[] }> = ({items}) => {

    return (
        <div>
            <TimelineContent>
                {items.map((item: any) => (
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
        </div>
    );
}

export default TimelineList;