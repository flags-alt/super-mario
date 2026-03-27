kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

// Proviamo a caricare i file direttamente dalla cartella assets
loadSprite('mario', '/assets/mario.png')
loadSprite('block', '/assets/block.png')

scene("game", () => {
  add([
    text("SISTEMA ATTIVO!"),
    pos(10, 10),
  ])

  add([
    sprite('mario'),
    pos(100, 100),
    body(),
  ])

  add([
    sprite('block'),
    pos(100, 150),
    solid(),
  ])
})

start("game")
