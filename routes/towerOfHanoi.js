function towerOfHanoi(
  numDisks,
  sourceRod = "A",
  targetRod = "C",
  auxiliaryRod = "B"
) {
  if (numDisks === 1) {
    return [{ disk: 1, from: sourceRod, to: targetRod }];
  } else {
    const moves = [];
    moves.push(
      ...towerOfHanoi(numDisks - 1, sourceRod, auxiliaryRod, targetRod)
    );
    moves.push({ disk: numDisks, from: sourceRod, to: targetRod });
    moves.push(
      ...towerOfHanoi(numDisks - 1, auxiliaryRod, targetRod, sourceRod)
    );
    return moves;
  }
}

module.exports = towerOfHanoi;
