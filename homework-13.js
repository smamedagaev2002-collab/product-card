class Drink {

  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Drink - абстрактный класс, создать его напрямую нельзя");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name}, ${this.size} мл, ${this.price} руб., ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }
  setTemperature(value) {
    if (typeof value !== "number" || value < -20 || value > 100) {
      console.log(`[Ошибка] Недопустимая температура: ${value}`);
      return;
    }
    this.#temperature = value;
    console.log(`[Температура] ${this.name}: теперь ${value}°C`);
  }

  #prepare() {
    console.log(`[Готовка] Начинаем готовить: ${this.name}`);
    this.addExtras(); 
    console.log(`[Готовка] ${this.name} готов`);
  }

 
  addExtras() {}

  
  serve() {
    console.log(`[Подача] Принимаем заказ: ${this.name}`);
    this.#prepare();
    console.log(`[Подача] Подаём: ${this.getInfo()}`);
  }
}


class Coffee extends Drink {
  constructor(size, price, beans, milk) {
    super("Кофе", size, price, 20);
    this.beans = beans;
    this.milk = milk;
  }


  getInfo() {
    return `${super.getInfo()}, зёрна: ${this.beans}, молоко: ${this.milk}`;
  }

  addExtras() {
    console.log(`[Кофе] Мелем зёрна ${this.beans}, добавляем ${this.milk} молоко`);
    this.setTemperature(85);
  }
}

class Tea extends Drink {
  constructor(size, price, type, withLemon) {
    super("Чай", size, price, 20);
    this.type = type;
    this.withLemon = withLemon;
  }

  getInfo() {
    return `${super.getInfo()}, сорт: ${this.type}, лимон: ${this.withLemon ? "да" : "нет"}`;
  }

  addExtras() {
    console.log(`[Чай] Завариваем ${this.type} чай`);
    if (this.withLemon) console.log("[Чай] Добавляем лимон");
    this.setTemperature(80);
  }
}

class Lemonade extends Drink {
  constructor(size, price, flavor, hasIce) {
    super("Лимонад", size, price, 20);
    this.flavor = flavor;
    this.hasIce = hasIce;
  }

  getInfo() {
    return `${super.getInfo()}, вкус: ${this.flavor}, лёд: ${this.hasIce ? "да" : "нет"}`;
  }

  addExtras() {
    console.log(`[Лимонад] Смешиваем лимонад со вкусом "${this.flavor}"`);
    if (this.hasIce) console.log("[Лимонад] Добавляем лёд");
    this.setTemperature(5);
  }
}

class Smoothie extends Drink {
  constructor(size, price, fruits, base) {
    super("Смузи", size, price, 20);
    this.fruits = fruits;
    this.base = base;
  }

  getInfo() {
    return `${super.getInfo()}, фрукты: ${this.fruits.join(", ")}, основа: ${this.base}`;
  }

  addExtras() {
    console.log(`[Смузи] Взбиваем в блендере: ${this.fruits.join(", ")} и ${this.base}`);
    this.setTemperature(8);
  }
}


class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", адрес: ${this.location}`;
  }

  order(drink) {
    if (!(drink instanceof Drink)) {
      console.log("[Кафе] Это не напиток, заказ отклонён");
      return;
    }
    console.log(`\n[Кафе] Новый заказ в "${this.name}"`);

    drink.serve();
  }
}

const cafe = new Cafe("Уют", "ул. Ленина, 5");
console.log(cafe.getInfo());

const coffee = new Coffee(250, 200, "арабика", "овсяное");
const tea = new Tea(300, 150, "чёрный", true);
const lemonade = new Lemonade(400, 180, "мята", true);
const smoothie = new Smoothie(350, 220, ["банан", "клубника"], "йогурт");

console.log("\nИнформация про напиток:");
console.log(coffee.getInfo());

cafe.order(coffee);
cafe.order(tea);
cafe.order(lemonade);
cafe.order(smoothie);
cafe.order("не напиток");

console.log("\nТемпература кофе после подачи:", coffee.getTemperature());

coffee.setTemperature(500);

