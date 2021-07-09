import { writable } from 'svelte/store';

export const dataInit = {
  "actions": [
    { "name": "autodidact",
      "desc": "+1 attribute point (except skill)",
      "price": "2*at+1",
      "visible": true
    },
    { "name": "common knowledge",
      "desc": "help from rulebook",
      "price": "1*pl",
      "visible": false
    },
    { "name": "crown's favor",
      "desc": "supply or service from the crown",
      "price": 1,
      "visible": true
    },
    { "name": "expert trick",
      "desc": "+2 quality for next feat",
      "price": 3,
      "visible": false
    },
    { "name": "focus",
      "desc": "+1 to your next feat",
      "price": 2,
      "visible": true
    },
    { "name": "keep safe",
      "desc": "+2 armor until the end of combat",
      "price": "1*ar",
      "visible": false
    },
    { "name": "mentor's teaching",
      "desc": "transfer xp from one player to another",
      "price": "floor(dxp*log(amount+1))",
      "visible": true
    },
    { "name": "meta knowledge",
      "desc": "help from the gamemaster",
      "price": "5*pl",
      "visible": false
    },
    { "name": "mixologist",
      "desc": "full potion effect",
      "price": "2*ingredients",
      "visible": true
    },
    { "name": "mystique",
      "desc": "full scroll ritual effect",
      "price": "1*sygils",
      "visible": true
    },
    { "name": "new horizons",
      "desc": "create a new specialization",
      "price": "2je+sp+pl",
      "visible": true
    },
    { "name": "seasoned traveller",
      "desc": "1attr + 1spe + 1xp for each tile visited",
      "price": 10,
      "visible": false
    },
    { "name": "studious",
      "desc": "+1 specialization point",
      "price": "2je+sp+1",
      "visible": true
    },
    { "name": "tour de force",
      "desc": "+2 strength until the end of combat",
      "price": "1*st",
      "visible": false
    },
    { "name": "unbelievable luck",
      "desc": "cheat fate, depends on the \\# of players saved",
      "price": "ceil(60%gxp)",
      "visible": false
    }
  ],
  "characters": {
    "Domingo-Rodrigez don Velasquez": {
      "info": {
        "custodian": "remi",
        "status": "healthy"
      },
      "spe": {
        "architect": 3,
        "meteorologist": 0
      },
      "stats": {
        "life": 6,
        "prestige": 0,
        "skill": 0,
        "xp": 9
      }
    },
    "Eliza Rovenstein": {
      "info": {
        "custodian": "celine",
        "status": "healhty"
      },
      "spe": {
        "entomologist": 3,
        "geologist": 0
      },
      "stats": {
        "life": 6,
        "prestige": 0,
        "skill": 0,
        "xp": 9
      }
    },
    "Estrella Nunes": {
      "info": {
        "custodian": "marie",
        "status": "healthy"
      },
      "spe": {
        "linguist": 0,
        "zoology": 3
      },
      "stats": {
        "life": 6,
        "prestige": 1,
        "skill": 0,
        "xp": 7
      }
    },
    "Janus Petit": {
      "info": {
        "custodian": "guillaume",
        "status": "healthy"
      },
      "spe": {
        "arborist": 3,
        "ornithologist": 0
      },
      "stats": {
        "life": 6,
        "prestige": 0,
        "skill": 0,
        "xp": 9
      }
    },
    "Karl Munz le Second": {
      "info": {
        "custodian": "valentin",
        "status": "healthy"
      },
      "spe": {
        "archeology": 0,
        "chemistry": 3
      },
      "stats": {
        "life": 6,
        "prestige": 0,
        "skill": 0,
        "xp": 7
      }
    },
    "Sir Hubert de Nori": {
      "info": {
        "custodian": "kevin",
        "status": "healthy"
      },
      "spe": {
        "botany": 0,
        "ethnology": 3
      },
      "stats": {
        "life": 6,
        "prestige": 1,
        "skill": 0,
        "xp": 10
      }
    }
  },
  "version": "20200123-234514",
  "wordlists": {
    "env": [
      "sun",
      "sky",
      "water",
      "grass",
      "trees",
      "bushes",
      "stairs",
      "wall",
      "smooth",
      "rough"
    ],
    "magic": [
      "none",
      "ancient",
      "powerful",
      "spectacular",
      "guilty",
      "protecting",
      "lingering",
      "insidious"
    ],
    "npc": [
      "poor/wealthy",
      "collector",
      "weak/vigorous",
      "hurt-disabled/able",
      "drunk/straight",
      "clever-witty/dull",
      "nosy/uninterested",
      "senile/youthful",
      "drugged-sedated/energetic-quick-restless",
      "evasive-hesitant-afraid",
      "malicious-conspiring/grateful",
      "authoritarian/obligated",
      "repulsive/charming",
      "belligerent/agreeable",
      "larcenous/lawful",
      "politicallyinclined/clumsy-awkward",
      "shy/brash",
      "grumpy/jovial",
      "tasteconscious-cultivated/uncaring",
      "sore/proud"
    ],
    "quest": [
      "concentrate-transport-steer",
      "salvage-recover",
      "chase-secure-jail",
      "expose-reveal",
      "prevent-destroy-delay",
      "discover-retrace",
      "plea-face-explain-advise-introduce",
      "move-unlock",
      "serve-please-honor",
      "cure-solve",
      "signal-send",
      "heal-mend-repair",
      "dress-decorate",
      "improve-program-rule",
      "mine-gather-collect",
      "arrange-modify",
      "create-manufacture-build"
    ]
  }
}

export const data = writable(dataInit);