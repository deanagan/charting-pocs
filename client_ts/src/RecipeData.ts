import { Language } from 'prism-react-renderer';

export interface CommentData {
  commentId: number;
  comment?: string;
  created: Date;
}

export interface RecipeData {
  id: number;
  name: string;
  description: string;
  code: string;
  author?: string;
  language: Language;
  comments: CommentData[];
}

const recipes: RecipeData[] = [
  {
    id: 1,
    name: 'Emulating Switch/Case Statements With Dicts',
    description: `Python doesn’t have switch/case statements so it’s sometimes necessary
                  to write long if…elif…else chains as a workaround.

                  One way to deal with long if…elif…else statements is to replace
                  them with dictionary lookup tables that emulate the behavior of
                  switch/case statements.
                  `,
    code: `def dispatch_dict(operator, x, y):
  return {
    'add': lambda: x + y,
    'sub': lambda: x - y,
    'mul': lambda: x * y,
    'div': lambda: x / y,
  }.get(operator, lambda: None)()`,
    language: 'python',
    author: 'Dan Bader, Python Tricks: The Book',
    comments: [
      {
        commentId: 1,
        comment: '',
        created: new Date(),
      },
    ],
  },
  {
    id: 2,
    name: 'Reversing a string',
    description: `This snippet came from a code kata to reverse a string in Typescript using the spread operator.`,
    code: `function reverse(value: string): string {
    return [...value].reverse().join('');
}`,
    language: 'typescript',
    comments: [
      {
        commentId: 1,
        comment: 'The spread operator requires es6 or es2015.',
        created: new Date(),
      },
    ],
  },
];

export const getRecipes = async (): Promise<RecipeData[]> => {
  await wait(1000);
  return recipes;
};

const wait = (durationInMs: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, durationInMs));
};

export const getRecipe = async (
  recipeId: number,
): Promise<RecipeData | null> => {
  await wait(500);
  const results = recipes.filter((r) => r.id === recipeId);
  return results.length === 0 ? null : results[0];
};
