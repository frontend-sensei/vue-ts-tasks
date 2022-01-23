// Task 1
interface BasicProductInterface {
  getProductName(): string;
  setProductName(name: string): this;
}

export class BasicProduct implements BasicProductInterface {
  private $productName = "";

  getProductName(): string {
    return this.$productName;
  }

  setProductName(name: string): this {
    this.$productName = name;
    return this;
  }
}

interface ProductInterface extends BasicProductInterface {
  getProductNameTitle(): string;
}

export class Product1 extends BasicProduct implements ProductInterface {
  getProductNameTitle(): string {
    return `Title ${super.getProductName()}`;
  }
}

// Task 2
interface Test1Interface {
  addValue(parameter: number): this;
  increaseAll1(): this;
  increaseAll2(): this;
  increaseAll3(): this;
  increaseValues(index: number): Array<number>;
}

type ValuesType = Array<number>;

export class Test1 implements Test1Interface {
  private values: ValuesType = [];
  addValue(parameter: number): this {
    this.values.push(parameter);
    return this;
  }
  increaseAll1(): this {
    this.values = this.increaseValues();
    return this;
  }
  increaseValues(index = 0): Array<number> {
    const increasedValue = ++this.values[index];
    const increasedIndex = ++index;

    if (this.values.length === increasedIndex) {
      return [increasedValue];
    }

    return [increasedValue, ...this.increaseValues(increasedIndex)];
  }
  increaseAll2(): this {
    this.values = Array.from(this.values, (value) => ++value);
    return this;
  }
  increaseAll3(): this {
    const increasedValues = [];
    while (this.values.length > 0) {
      let value = this.values.shift();
      if (!value) {
        continue;
      }
      increasedValues.push(++value);
    }
    this.values = increasedValues;
    return this;
  }
  getValues(): ValuesType {
    return this.values;
  }
}

// Task 3
type skuType = number;
type stockType = number;

interface Product2Constructor {
  new (sku: skuType, stock: stockType): Product2Interface;
}

interface Product2Interface {
  getSku(): skuType;
  getStock(): stockType;
  setStock(stock: stockType): this;
}

export const Product2: Product2Constructor = class Product2
  implements Product2Interface
{
  sku: number;
  stock: number;

  constructor(sku: skuType, stock: stockType) {
    this.sku = sku;
    this.stock = stock;
  }

  getSku(): skuType {
    return this.sku;
  }

  getStock(): stockType {
    return this.stock;
  }

  setStock(stock: stockType): this {
    this.stock = stock;
    return this;
  }
};

interface ProductDatasetInterface {
  addProduct(product: Product2Interface): this;
  setProductStockValue(sku: skuType, value: stockType): this;
}

export class ProductDataset implements ProductDatasetInterface {
  private readonly list = new Map();

  addProduct(product: Product2Interface): this {
    this.list.set(product.getSku(), product);
    return this;
  }

  setProductStockValue(sku: skuType, value: stockType): this {
    if (!this.list.has(sku)) {
      throw new Error(`sku ${sku} not found`);
    }
    this.list.get(sku).setStock(value);
    return this;
  }
}
/*
--------------------------------------------
Избегать скалярных значений (number, string)

To Read: https://refactoring.guru/ru/smells/primitive-obsession

Проблемы:
Нет линковки и больше уязвимостей в рантайме
Завтра придется изменить ключ по которому ищем
вместо числа может быть строка

getUserById(id: number)


Решение
getUserById(user: User) {
  fetch(user.id)
}

getUserBy(user: User, key: string) {
  // user - {}
  // key  - 'id'
  fetch(user[key])
}

--------------------------------------------
Писать код так, будто он сломан.

Если ситуация в микросервсах или просто изменить реализацию метода "getUserBy"
изменить нельзя, тогда создать обертку
для получаемого скалярного значения чтобы появилась линковка

 */
