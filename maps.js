/*Reglas:El final de cada nivel debe ser el inicio del siguiente*/

const emojis = {
    '-': ' ',
    'O': '🌌',
    'X': '🌠',
    'I': '🚀',
    'PLAYER': '🛸',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '💥',
    'WIN': '🏆',
    'HEART': '💜',
  };
  
  const maps = [];
  maps.push(`
    ---XXXXXXX
    -X--XXXXXX
    -XX-XXXXXX
    -XX------X
    -XX--XX--X
    -XX-XX-X-X
    -XX-XX---X
    -XX---X-XX
    -XXXXXX-IX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-X---X-XX
    X---X-X--X
    XXXXX-XXXX
    ------XXXX
    -XXXXXXXXX
    -X---X---X
    ---X---X-X
    XXXXX-XX--
    XX-X---OXX
    XXX--XXXXX
  `);
  