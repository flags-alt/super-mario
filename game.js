kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

// Proviamo a caricare solo Mario e il blocco base
loadRoot('/assets/')

// IMPORTANTE: Controlla se i file si chiamano davvero così (tutto minuscolo)
loadSprite('mario', 'mario.png')
loadSprite('block', 'block.png')

scene("game", () => {
  add([
    text("Se vedi questo, il codice gira!"),
    pos(10, 10),
  ])

  add([
    sprite('mario'),
    pos(80, 80),
    body(),
  ])

  add([
    sprite('block'),
    pos(80, 120),
    solid(),
  ])
})

start("game")
