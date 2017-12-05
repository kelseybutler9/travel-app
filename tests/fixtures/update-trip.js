const updateTrip = {
  title: 'Fourth of July Camping Trip',
  place: 'Yosemite National Park',
  startDate: '2017-07-02T06:00:00.000Z',
  endDate: '2017-07-06T06:00:00.000Z',
  transportation: [
    {
      transType: 'Flight',
      transInformation: 'Afternoon flight, $700'
    }],
  residence: [
    {
      residenceName: 'Cathedral Lakes',
      residenceComments: 'camping ground'
    }],
  restaurants: [
    {
      restaurantName: 'Campfire meals!',
      restaurantComments: 'hot dogs'
    }],
  activities: [
    {
      activityName: 'Hiking',
      activityInformation: 'Fantastic views'
    },
    {
      activityName: 'Swimming',
      activityInformation: 'Freezing cold!'
    }]
};

module.exports = updateTrip;
