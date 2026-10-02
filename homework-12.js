//Задание 3 — своя структура с наследованием

class BeautyProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  info() {
    console.log(`${this.name} — ${this.price}₽`);
  }
}

class Lipstick extends BeautyProduct {
  constructor(name, price, shade) {
    super(name, price);
    this.shade = shade;
  }
  showShade() {
    console.log(`Оттенок: ${this.shade}`);
  }
}

class Cream extends BeautyProduct {
  constructor(name, price, skinType) {
    super(name, price);
    this.skinType = skinType;
  }
  showSkinType() {
    console.log(`Для типа кожи: ${this.skinType}`);
  }
}