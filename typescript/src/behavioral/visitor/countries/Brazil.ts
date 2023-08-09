import TaxVisitor from "../iTaxVisitor";
import AlcoholicDrink from "../products/AlcoholicDrink";
import Cigarette from "../products/Cigarette";
import Food from "../products/Food";

export default class Brazil implements TaxVisitor {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.1
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5
  }
}