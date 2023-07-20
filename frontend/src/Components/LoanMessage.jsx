import { useState } from "react";
import { MessageBubble, MessageContainer, MessageText } from "../Styles/Message";
import { OptionsHiddenContent, OptionsLink, OptionsTopic, OptionsWrapper } from "../Styles/LoanMessage";
import { topics } from "../data/data";

function LoanMessage({ isuser, text }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleTopicClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <MessageContainer isuser={isuser}>
            <MessageBubble isuser={isuser}>
                <MessageText>
                    {text}
                </MessageText>
                <OptionsWrapper>
                    {topics.map((topic, index) => (
                        <OptionsTopic key={index} onClick={() => handleTopicClick(index)}>
                            {topic.title}
                            <OptionsHiddenContent expanded={expandedIndex === index}>
                                <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                                {topic.link && (
                                    <OptionsLink href={topic.link.url}>{topic.link.text}</OptionsLink>
                                )}
                            </OptionsHiddenContent>
                        </OptionsTopic>
                    ))}
                </OptionsWrapper>
            </MessageBubble>
        </MessageContainer>
    );
}

export default LoanMessage;