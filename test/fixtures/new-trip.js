const newTrip = {
  title: 'Vacation Test',
  place: 'Chicago, Illinois',
  startDate: '1992-10-21',
  endDate: '1992-10-30',
  transportation: [{
    transType: 'Flight',
    transInformation: 'Afternoon flight, $700' }],
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
