const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { calc } = require('./calculator')

while (true) {
  // demande l'opération
  const op = readlineSync.question(chalk.blueBright('Opération : '))
  // demande nb1
  let nb1 = readlineSync.question(chalk.blueBright('1er nombre : '))
  nb1 = Number(nb1)
  // demande nb2
  let nb2 = readlineSync.question(chalk.blueBright('2eme nombre : '))
  nb2 = Number(nb2)

  console.log(chalk.greenBright.bold(calc(op, nb1, nb2)))
}