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
    if (
      value === 'Bowerman'
      || value === 'Swordsman'
      || value === 'Magician'
      || value === 'Daemon'
      || value === 'Undead'
      || value === 'Zombie'
    ) {
      this.$type = value;
    } else {
      throw new Error(
        'тип может быть только Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      );
    }
  }
}

export default Character;
