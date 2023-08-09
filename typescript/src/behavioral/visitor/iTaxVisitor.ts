import AlcoholicDrink from "./products/AlcoholicDrink"
import Cigarette from "./products/Cigarette"
import Food from "./products/Food"

export default interface TaxVisitor {
  calculateTaxesForFood(food: Food): number
  calculateTaxesForCigarette(cigarette: Cigarette): number
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number
} 