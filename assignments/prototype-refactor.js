/* Prototype Refactor */

/* === GameObject === */

class GameObject{
    constructor(atts) {
    this.createdAt = atts.createdAt;
    this.name = atts.name;
    this.dimensions = atts.dimensions;
  };

  destroy(){
    return `${this.name} was removed from the game`;
  };
};
  
 
  
  /* === CharacterStats === */
  
  class CharacterStats extends GameObject{
      constructor(charAtts){
    super(charAtts)
    this.healthPoints = charAtts.healthPoints;
  };

  takeDamage(){
    return `${this.name} took damage.`
  };
};
  
  
  
  /* === Humanoid (Having an appearance or character resembling that of a human.) === */
  
  class Humanoid extends CharacterStats{
      constructor(humAtts){
    super(humAtts)
    this.team = humAtts.team;
    this.weapons = humAtts.weapons;
    this.language = humAtts.language;
  };

  greet = function(){
    return `${this.name} offers a greeting in ${this.language}`
  };
};
  
  
  
    //Characters
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // My Characters

    const heroicHero = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 3,
        height: 6,
      },
      healthPoints: 32,
      name: 'Eamon',
      team: 'Holy Warriors',
      weapons: [
        'Greataxe',
        'Javelin',
      ],
      language: 'Celestial',
    });
  
    const villainousVillain = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 3,
        height: 3,
      },
      healthPoints: 40,
      name: 'Walter',
      team: 'Eldritch Castle',
      weapons: [
        'Staff of Evil-Doing',
        'Sneaks Dagger',
      ],
      language: 'Abyssal',
    });

    console.log(heroicHero.team);
    console.log(heroicHero.weapons);
    console.log(heroicHero.name);
    console.log(villainousVillain.name);
    console.log(villainousVillain.team);
    console.log(villainousVillain.language);