const pool = require("../../db")
const Recipe = require("./queries")

const getRecipeALL = async (req, res) => {
  try {
    const recipes = await Recipe.findAll()
    res.json(recipes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

const CreateRecipe = async (req, res) => {
  const { name, price, description } = req.body
  console.log(req.body)
  try {
    const Recipes = await Recipe.create({ name, price, description })

    res.status(201).json(Recipes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

const FindRecipeById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByPk(id)
    if (!product) {
      res.status(404).json({ error: "Product not found" })
    } else {
      res.json(product)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

const UpdateRecipeById = async (req, res) => {
  const { id } = req.params
  const { name, price, description } = req.body
  try {
    const Recipes = await Recipes.findByPk(id)
    if (!Recipes) {
      res.status(404).json({ error: "Recipes not found" })
    } else {
      await Recipes.update({ name, price, description })
      res.json(Recipes)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

const DeteteRecipeById = async (req, res) => {
  const { id } = req.params
  try {
    const Recipes = await Recipes.findByPk(id)
    if (!Recipes) {
      res.status(404).json({ error: "Recipes not found" })
    } else {
      await Recipes.destroy()
      res.status(204).end()
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error" })
  }
}

module.exports = {
  getRecipeALL,
  FindRecipeById,
  UpdateRecipeById,
  DeteteRecipeById,
  CreateRecipe,
}
