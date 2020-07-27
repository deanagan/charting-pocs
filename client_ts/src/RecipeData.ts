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
    description: "A salad for all ages",
    author: "Bob"
},
];


export const getRecipes = (): RecipeData[] => {
    return recipes;
};
