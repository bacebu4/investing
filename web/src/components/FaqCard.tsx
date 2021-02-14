import styled from "styled-components";

type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCardWrapper = styled.section`
  max-width: 90%;
`;

const QuestionWrapper = styled.h3`
  font-size: 1.125rem;
  line-height: 1.8rem;
  font-weight: 600;
  margin-top: 44px;
`;

const AnswerWrapper = styled.p`
  margin-top: 16px;
  line-height: 1.6rem;
`;

export const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  return (
    <FaqCardWrapper>
      <QuestionWrapper>{question}</QuestionWrapper>
      <AnswerWrapper>{answer}</AnswerWrapper>
    </FaqCardWrapper>
  );
};
