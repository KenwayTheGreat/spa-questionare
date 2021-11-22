export const data = {
  sections: [
    {
      id: 1,
      questions: [
        {
          id: 1,
          section_id: 1,
          text: "Is your business model B2C or B2B or both ?",
          type: "choose",
          answers: [
            { id: 1, text: "B2C", question_id: 1 },
            { id: 2, text: "B2B", question_id: 1 },
            { id: 3, text: "Both", question_id: 1 },
          ],
        },
        {
          id: 2,
          section_id: 1,
          text: "Do you target all age brackets ?",
          type: "choose",
          answers: [
            {
              id: 1,
              text: "Yes",
              question_id: 2,
            },
            {
              id: 2,
              text: "No",
              question_id: 2,
            },
          ],
        },
        {
          id: 3,
          section_id: 1,
          text: "Do you target all industries ?",
          type: "choose",
          answers: [
            {
              id: 1,
              text: "Yes",
              question_id: 3,
            },
            {
              id: 2,
              text: "No",
              question_id: 3,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      questions: [
        {
          id: 1,
          section_id: 2,
          text: "Did you have an investment?",
          type: "choose",
          answers: [
            {
              id: 1,
              text: "Yes",
              question_id: 2,
            },
            {
              id: 2,
              text: "No",
              question_id: 1,
            },
          ],
        },
        {
          id: 2,
          section_id: 2,
          text: "How much was the investment ?",
          type: "Text",
          answers: [
            {
              id: 0,
              text: "Please Answer with only positive numbers.",
            },
          ],
        },
      ],
    },
  ],
};
