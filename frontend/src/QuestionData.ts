export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}
export const getUnansweredQuestions = (): QuestionData[] => {
  return questions.filter((q) => q.answers.length === 0);
};

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'Who killed Kennedy?',
    content:
      'JFK was shot 22th november 1963 in Dallas by some guy, I would like to know who that was',
    userName: 'Kurvulon',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'L.H Oswald',
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'idk',
        userName: 'Fred',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'Why C is the worst programming language?',
    content: 'Why simple C is so clumpy and annoying?',
    userName: 'Bob',
    created: new Date(),
    answers: [],
  },
];
