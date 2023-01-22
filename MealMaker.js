const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, the total price of your course is $${totalPrice}.`
  },
};

// adding appetizers to menu
menu.addDishToCourse ('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse ('appetizers', 'Pram Salad', 7.99);
menu.addDishToCourse ('appetizers', 'Fruit Salad', 3.55);
menu.addDishToCourse ('appetizers', 'Pohovana Daska', 19.99);
// adding main dishes to menu
menu.addDishToCourse ('mains','Steak', 12.99);
menu.addDishToCourse ('mains','T-Bone steak', 18.99);
menu.addDishToCourse ('mains','Salmon', 15.50);
menu.addDishToCourse ('mains','Pasta', 13.25);
// adding desserts to menu
menu.addDishToCourse ('desserts', 'Ice cream', 4.00);
menu.addDishToCourse ('desserts', 'Hot n\' Cold', 8.00);
menu.addDishToCourse ('desserts', 'Cake', 5.50);
menu.addDishToCourse ('desserts', 'Waffle - \'Palacinka\'', 3.50);

const meal = menu.generateRandomMeal();
console.log(meal);
