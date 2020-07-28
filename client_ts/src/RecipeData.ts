export interface RecipeData {
    id: number;
    name: string;
    description: string;
    author: string;
}

const recipes: RecipeData[] = [
{
    id: 1,
    name: "Hummus",
    description: "A simple dip with chickpeas",
    author: "Joe"
},
{
    id: 2,
    name: "No bake fudge",
    description: "A no bake brownie fudge!",
    author: "Greg"
},
{
    id: 3,
    name: "Eggplant Salad",
    description: "A salad for all ages. This salad contains all the good stuff, eggplant, kale and arugula.",
    author: "Bob"
},
];


export const getRecipes = async (): Promise<RecipeData[]> => {
    await wait(1000);
    return recipes;
};

const wait = (durationInMs: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, durationInMs))
};
