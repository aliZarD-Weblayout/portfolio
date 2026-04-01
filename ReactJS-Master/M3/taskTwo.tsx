const myHometask: MyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

interface MyHometask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: { howIDoIt: string; simeArray: (string | number)[] }[];
}
