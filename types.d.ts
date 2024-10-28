interface Quiz {
  id: number;
  question: string;
  seeMore: string | Element | any;
  hint: string;
  answer: boolean;
  myAnswer: undefined | boolean;
  image?: string;
}
