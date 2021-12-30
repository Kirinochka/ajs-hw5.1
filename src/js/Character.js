class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  get name() {
    return this.$name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('имя - min - 2 символа, max - 10');
    }
    this.$name = value;
  }

  get type() {
    return this.$type;
  }

  set type(value) {
    if (value === 'Bowerman') {
      this.$attack = 25;
      this.$defence = 25;
    } else if (value === 'Swordsman') {
      this.$attack = 40;
      this.$defence = 10;
    } else if (value === 'Magician') {
      this.$attack = 10;
      this.$defence = 40;
    } else if (value === 'Daemon') {
      this.$attack = 10;
      this.$defence = 40;
    } else if (value === 'Undead') {
      this.$attack = 25;
      this.$defence = 25;
    } else if (value === 'Zombie') {
      this.$attack = 40;
      this.$defence = 10;
    } else {
      throw new Error('тип может быть только Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.$type = value;
  }

  get attack() {
    return this.$attack;
  }

  get defence() {
    return this.$defence;
  }
}

export default Character;
