const { head, groupBy, groupWith } = require("ramda")

const input = [
  ['Bus 1', 'Stop 1', 'Wed', '15:00'],
  ['Bus 1', 'Stop 1', 'Wed', '16:00'],
  ['Bus 2', 'Stop 1', 'Thu', '17:00'],
  ['Bus 3', 'Stop 2', 'Mon', '10:00'],
]

// expect(parseSchedule(input)).to.eq({
//   'Stop 1': {
//     'Bus 1': ['Wed 15:00', 'Wed 16:00'],
//     'Bus 2': ['Thu 17:00']
//   },
//   'Stop 2': {
//     'Bus 3': ['Mon 10:00']
//   }
// })

const parseSchedule = (table) => table.reduce((acc, x) => acc[x[1]] = x, {})


// const obj = {}

// obj['1'] = 1

console.log(parseSchedule(input))