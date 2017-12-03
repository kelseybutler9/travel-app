const newTrip = {
  title: 'Halloween Weekend Trip',
  place: 'Los Angeles, California',
  startDate: '2017-10-30T06:00:00.000Z',
  endDate: '2017-10-31T06:00:00.000Z',
  transportation: [{
    transType: 'Flight',
    transInformation: 'Afternoon flight, $700' },
    {transType: 'Flight Home',
    transInformation: 'Morning flight, $500' }],
  residence: [{
    residenceName: 'Hilton Inn',
    residenceInformation: 'nice staff, clean room'}],
  restaurants: [{
    restaurantName: 'Taco Bell',
    restaurantInformation: 'great burritos' }],
  activities: [{
    activityName: 'Surfing',
    activityInformation: 'Fun!'
  }]
};

module.exports = newTrip;
