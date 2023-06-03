function apliAnalogiki(percentages) {
    const validParties = percentages.filter((percentage) => percentage >= 3);
    const totalValidPercentages = validParties.reduce((a, b) => a + b, 0);
    const seatDistribution = [];
    const threshold = 3;
    const totalSeats = 300;
  
    validParties.forEach((percentage) => {
      const seats = Math.floor((percentage / totalValidPercentages) * totalSeats);
      seatDistribution.push(seats);
    });
  
    const remainingSeats = totalSeats - seatDistribution.reduce((a, b) => a + b, 0);
    const remainingParties = percentages.length - validParties.length;
    const sumPercentageForOthers = 100 - validParties.reduce((a, b) => a + b, 0);
  
    if (remainingSeats > 0 && remainingParties > 0) {
      const remainingPercentage = sumPercentageForOthers - totalValidPercentages;
      const seatsPerParty = Math.floor((remainingPercentage / 100) * totalSeats);
      let extraSeats = remainingSeats - seatsPerParty * remainingParties;
  
      for (let i = 0; i < remainingParties; i++) {
        const seats = seatsPerParty + (extraSeats > 0 ? 1 : 0);
        seatDistribution.push(seats);
        extraSeats--;
      }
    }
  
    const seatSum = seatDistribution.reduce((a, b) => a + b, 0);
    const seatsToAdd = totalSeats - seatSum;
  
    // Distribute remaining seats to parties with the highest fractional parts
    if (seatsToAdd > 0) {
      const fractionalParts = validParties.map((percentage, index) => {
        const seats = seatDistribution[index];
        const fractionalPart = percentage / totalValidPercentages - seats / totalSeats;
        return { index, fractionalPart };
      });
  
      fractionalParts.sort((a, b) => b.fractionalPart - a.fractionalPart);
  
      for (let i = 0; i < seatsToAdd; i++) {
        const index = fractionalParts[i % fractionalParts.length].index;
        seatDistribution[index]++;
      }
    }
  
    return seatDistribution;
  }

  
function enisximeniAnalogiki(percentages) {
  const totalSeats = 300; // Total number of seats
  const threshold = 3; // Percentage threshold for proportional allocation

  const totalVotes = percentages.reduce((sum, percentage) => sum + percentage, 0);
  const allocatedSeats = [];

  // Calculate seats for proportional allocation
  const proportionalSeats = totalSeats - 50; // Remaining seats after allocating 50 for the first party
  for (let i = 0; i < percentages.length; i++) {
    if (percentages[i] >= threshold) {
      const seats = Math.round((percentages[i] / totalVotes) * proportionalSeats);
      allocatedSeats.push(seats);
    } else {
      allocatedSeats.push(0);
    }
  }

  // Add seats for the first party (plurality winner)
  const remainingSeats = totalSeats - allocatedSeats.reduce((sum, seats) => sum + seats, 0);
  allocatedSeats[0] += remainingSeats;

  return allocatedSeats;
}

  module.exports = {
    apliAnalogiki,enisximeniAnalogiki
  };