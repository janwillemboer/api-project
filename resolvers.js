const data = require("./data-access.js");

const resolvers = {
    Query: {
        pid: () => process.pid,
        recipe: async (_obj, {id}) => data.getRecipe(id)
    },
    Recipe: {
        ingredients: async(obj) => data.getIngredients(obj.id)
    }
};

module.exports = resolvers;