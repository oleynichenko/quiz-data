function ceilUp (number, fraction = 0) {
  const multiplier = Math.pow(10, fraction);

  return (number % 1 === 0) ? number : Math.ceil(number * multiplier) / multiplier;
}

function _calcOptionCost (pointsAvailable, optionsQuantity, correctOptionsQuantity) {
  const wrongOptionsQuantity = optionsQuantity - correctOptionsQuantity;

  const wrongOptionsCost = (wrongOptionsQuantity === 0)
    ? 0
    : pointsAvailable / wrongOptionsQuantity;

  const correctOptionsCost = pointsAvailable / correctOptionsQuantity;

  return {
    wrong: ceilUp(wrongOptionsCost, 4),
    right: ceilUp(correctOptionsCost, 4)
  };
}
