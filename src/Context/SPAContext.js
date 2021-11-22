import React, { useState, createContext } from "react";

export const SPAContext = createContext();

export function SPAProvider({ children }) {
  const [sectionId, setSectionId] = useState(1);
  const [questions, setQuestions] = useState({
    question1_s1: "",
    question2_s1: "",
    question3_s1: "",
    question1_s2: "",
    question2_s2: "",
  });

  const [answers, setAnswers] = useState({
    answer1_s1: "",
    answer2_s1: "",
    answer3_s1: "",
    answer1_s2: "",
    answer2_s2: "",
  });

  const values = {
    sectionId,
    questions,
    answers,
    setSectionId,
    setQuestions,
    setAnswers,
  };
  return <SPAContext.Provider value={values}>{children}</SPAContext.Provider>;
}
