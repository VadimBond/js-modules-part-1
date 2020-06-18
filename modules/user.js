function user() {
  // private, get, set (not used)
  class User {
    constructor(name) {
      this._name = name;
    }

    #surname = "Bond";

    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name;
    }

    get surname() {
      return this.#surname;
    }

    set surname(surname) {
      this.#surname = surname;
    }
  }

  let vadim = new User("Vadim");
  console.log(`${vadim.name} ${vadim.surname}`);
  vadim.surname = "Bondarev";
  vadim.name = "VVV";
  console.log(`${vadim.name} ${vadim.surname}`);
}
