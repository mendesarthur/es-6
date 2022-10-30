"use strict";

// Média simples
var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (acum, num) {
    return (acum + num) / numbers.length;
  });
};
console.log("A m\xE9dia foi de :".concat(media(3, 5, 6, 7)));

// Média ponderada
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("A M\xE9dia Ponderada foi de: ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));

// Mediana

var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};

// console.log(`A Mediana foi de: ${median(2, 5, 99, 4, 42, 7)}`)
// console.log(`A Mediana foi de: ${median(15, 14, 8, 7, 3)}`)

// Moda

var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [[N, qtd], [N, qtd], [N, qtd]]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("A Moda foi de: ".concat(moda(5, 34, 31, 71, 71, 71, 71, 8, 2, 71)));
