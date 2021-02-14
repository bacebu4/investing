import React from "react";
import { ExplanationText } from "../components/ExplanationText";
import { FaqCard } from "../components/FaqCard";
import { Title } from "../components/Title";

export const FAQ = () => {
  return (
    <>
      <Title mt="64px">FAQ</Title>

      <ExplanationText mt="16px">
        Make sure to go through all of them before you start your journey with
        our app
      </ExplanationText>

      <FaqCard
        question="How often to rearrange the portfolio?"
        answer="It all comes to the personal preferences but what we recommend according to the popular X book is to do it once every 6 month or so"
      />

      <FaqCard
        question="How often to rearrange the portfolio?"
        answer="It all comes to the personal preferences but what we recommend according to the popular X book is to do it once every 6 month or so"
      />

      <FaqCard
        question="How often to rearrange the portfolio?"
        answer="It all comes to the personal preferences but what we recommend according to the popular X book is to do it once every 6 month or so"
      />
    </>
  );
};
