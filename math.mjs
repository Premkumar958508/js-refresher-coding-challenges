class Dog {
    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        return `${this.name} says Woof!`;
    }
}
export default Dog;