// exports.getContact = (req, res) => {
//   res.render('locations', {
//     title: 'Locations'
//   });
// };

exports.getGoogleMaps = (req, res) => {
  res.render('locations/locations', {
    title: 'Locations'
  });
};
