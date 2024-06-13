export const flashCardData = {
  _id: {
    $oid: "66521c076a280e6669f10f09",
  },
  user: {
    $oid: "661357c967533ace5491526a",
  },
  isSaved: false,
  type: "flash card",
  questions: [
    {
      question:
        "What are some of the skills listed in this individual's portfolio?",
      answer:
        "Some of the skills listed include Computer Vision, Image Processing, Natural Language Processing, Deep Learning, Machine Learning, Software Engineering, Backend Development, and proficiency in several programming languages such as Python, TypeScript, JavaScript, C++, and C.",
      question_num: 1,
    },
    {
      question:
        "What were some of the responsibilities and achievements in the role as a Software Engineer at Etranzact?",
      answer:
        'At Etranzact, this individual led the team that built a CRM tool from scratch in less than a month, spearheaded the backend team that took an in-house project to MVP in 2 months, performed KYC and face verification for users using computer vision techniques, implemented the "Beneficiary" feature in the in-house fintech app, and built the "investment" feature of the in-house fintech app.',
      question_num: 2,
    },
    {
      question:
        "What role does the Lead in the Community of OAU, Nigeria fulfill?",
      answer:
        "The Lead tutors community members on Data Science, Machine Learning, and Deep Learning topics.",
      question_num: 3,
    },
    {
      question:
        "What are the subjects that the Community Lead in OAU, Nigeria is teaching?",
      answer:
        "The subjects taught are Data Science, Machine Learning, and Deep Learning topics.",
      question_num: 4,
    },
  ],
  file_id: {
    $oid: "6628cf92c359758220538f1d",
  },
  recent_name: "4 Flash Cards",
  name: "4 Flash Cards (Pg1-Pg2)",
  createdAt: "2024-05-25T17:12:39.845+00:00",
};

export const mcq = {
  _id: {
    $oid: "6637da29f5ebc00de13391ba",
  },
  user: {
    $oid: "661357c967533ace5491526a",
  },
  isSaved: true,
  type: "mcq",
  questions: [
    {
      question_num: 1,
      question: "What is the current position of Isaac Oreoluwa?",
      options: {
        A: "Software Engineer at Etranzact",
        B: "Backend Developer / Machine Learning Engineer at Lost in A City",
        C: "Machine Learning(Computer Vision) Engineer at RectLabs",
        D: "Artificial Intelligence Engineer at AB InBev",
        E: "NONE",
      },
      answer: "D",
    },
    {
      question_num: 2,
      question:
        "What programming languages does Isaac Oreoluwa have prior experience with?",
      options: {
        A: "Python and TypeScript",
        B: "JavaScript and C++",
        C: "C and C++",
        D: "Python and JavaScript",
        E: "ALL OF THE ABOVE",
      },
      answer: "C",
    },
    {
      question_num: 3,
      question: "What project did Isaac Oreoluwa lead at Etranzact?",
      options: {
        A: "Building a recommender system for the products of the company",
        B: "Building a CRM TOOL from scratch",
        C: "Implementing face detection as an additional layer of authentication",
        D: "Development and deployment of an in-house recommendation system",
        E: "NONE",
      },
      answer: "B",
    },
    {
      question_num: 4,
      question: "What is the role of the individual in the context provided?",
      options: {
        A: "Data Scientist",
        B: "Machine Learning Engineer",
        C: "Community Lead",
        D: "Deep Learning Specialist",
        E: "NONE",
      },
      answer: "C",
    },
    {
      question_num: 5,
      question: "Which topics are tutored by the individual?",
      options: {
        A: "Data Science",
        B: "Machine Learning",
        C: "Deep Learning",
        D: "Artificial Intelligence",
        E: "ALL OF THE ABOVE",
      },
      answer: "E",
    },
  ],
  file_id: {
    $oid: "6628cf92c359758220538f1d",
  },
  recent_name: "5 MCQs",
  name: "5 MCQs (Pg1-Pg2)",
  createdAt: "2024-05-05T19:12:41.979+00:00",
};
