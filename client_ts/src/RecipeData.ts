export interface CommentData {
    commentId: number;
    comment: string;
    author: string;
    created: Date;
}

export interface RecipeData {
    id: number;
    name: string;
    description: string;
    author: string;
    comments: CommentData[];
}

const recipes: RecipeData[] = [
{
    id: 1,
    name: "Hummus",
    description: `A simple dip with chickpeas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.`,
    author: "Joe",
    comments: [
        {
            commentId: 1,
            comment: "Can I sub with black beans?",
            author: "Bob",
            created: new Date()
        }

    ]
},
{
    id: 2,
    name: "No bake fudge",
    description: `A no bake brownie fudge! Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.`,
    author: "Greg",
    comments: [
        {
            commentId: 2,
            comment: "I find it nicer with soaked cashew nuts",
            author: "Mad Hatter",
            created: new Date()
        },
        {
            commentId: 3,
            comment: "I like walnuts better",
            author: "Alice",
            created: new Date()
        }
    ]
},
{
    id: 3,
    name: "Eggplant Salad",
    description: "A salad for all ages. This salad contains all the good stuff, eggplant, kale and arugula.",
    author: "Bob",
    comments: [
        {
            commentId: 4,
            comment: "I hate salad usually, but this is an exception!",
            author: "Goat",
            created: new Date()
        },
        {
            commentId: 5,
            comment: "Lol. Funny how you hate salads, I love any.",
            author: "Cow",
            created: new Date()
        }
    ]
},
];


export const getRecipes = async (): Promise<RecipeData[]> => {
    await wait(1000);
    return recipes;
};

const wait = (durationInMs: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, durationInMs))
};


export const getRecipe = async (
    recipeId: number
): Promise<RecipeData | null> => {
    await wait(500);
    const results = recipes.filter(r => r.id === recipeId);
    return results.length === 0 ? null : results[0];
};