class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
}


class PersonBuilder {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    setWeight(weight) {
        this.weight = weight;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }

    build() {
        return new Person(this.name, this.age, this.weight, this.height);
    }
}


class SmartPerson {
    constructor({ name, age, weight, height } = {}) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
}




const hamed = new PersonBuilder("hamed", 24).setWeight(76).setHeight(178).build();
const smartHamed = new SmartPerson({ name: "smart hamed", age: 30, height: 180, weight: 65 });
// console.log(smartHamed);
// console.log(hamed);


class elasticsearchQuery {
    constructor(indexName, fields, filters, size, offset) {
        this.indexName = indexName;
        this.fields = fields;
        this.filters = filters;
        this.size = size;
        this.offset = offset;
    }
}
const result = elasticsearchQuery("jika_messages", ["name", "status"], ["hamed", true], 10, 0);
console.log(result);

function elasticQueryBuilder() {

}