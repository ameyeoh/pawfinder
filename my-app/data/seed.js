const csvWriter = require('csv-write-stream');
const fs = require('fs');

const recordsWriter = csvWriter();

const dogUrls = [
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-1.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-2.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-3.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-4.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-5.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-6.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-7.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-8.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-9.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-10.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-11.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-12.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-13.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-14.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-15.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-16.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-17.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-18.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-19.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-20.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-21.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-22.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-23.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-24.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-25.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-26.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-27.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-28.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-29.jpg',
  'https://fec-ay.s3-us-west-1.amazonaws.com/dog-30.jpg',
];

const petNames = [
  'Fido', 'NA', 'NA', 'NA', 'Bella',
  'NA', 'NA', 'NA', 'NA', 'Loki',
  'NA', 'NA', 'Reggie', 'NA', 'Baxter',
  'Oreo', 'NA', 'NA', 'Harley', 'NA',
  'NA', 'Coco', 'NA', 'NA', 'NA',
  'NA', 'NA', 'NA', 'Luna', 'NA',
];

const dogLocations = [
  {lat: '37.411768163273244', lon: '-122.1605769378445'}, {lat: '37.431339185560525', lon: '-122.17765181025737'}, {lat: '37.45109752231137', lon: '-122.20850953373967'},
  {lat: '37.39349256734626', lon: '-122.23088117745068'}, {lat: '37.473719607778484', lon: '-122.27934084468714'}, {lat: '37.75063345896962', lon: '-122.44676789909717'},

  {lat: '37.71316258128853', lon: '-122.4079724297058'}, {lat: '37.5036500777946', lon: '-122.27850260432092'}, {lat: '37.646455572022276', lon: '-122.1113415759699'},
  {lat: '37.37436439880163', lon: '-122.10687288933282'}, {lat: '37.29327003792412', lon: '-121.9554075763288'}, {lat: '37.69170332795757', lon: '-122.48316010932268'},

  {lat: '37.42534807364474', lon: '-122.25203844399711'}, {lat: '37.46205500300867', lon: '-122.23510942141704'}, {lat: '37.55865757706235', lon: '-122.27200624148253'},
  {lat: '37.342216347465445', lon: '-122.11420748823764'}, {lat: '37.318438466473125', lon: '-122.2212048498692'}, {lat: '37.314591', lon: '-122.325456'},

  {lat: '37.42143930175691', lon: '-122.04353532495573'}, {lat: '37.378613', lon: '-122.035771'}, {lat: '37.33021976568861', lon: '-122.04589089838892'},
  {lat: '37.57344119481304', lon: '-122.36609872754065'}, {lat: '37.35215099093684', lon: '-122.09400376983301'}, {lat: '37.55915595213314', lon: '-122.27347316707086'},

  {lat: '37.46681727298555', lon: '-122.42404209847022'}, {lat: '37.76701763845048', lon: '-122.43064324054482'}, {lat: '37.79186229398032', lon: '-122.46040077354641'},
  {lat: '37.76867420859891', lon: '-122.47129789830757'}, {lat: '37.785237868996965', lon: '-122.40172394790947'}, {lat: '37.690609476697425', lon: '-122.4170218345934'},
];

const cities = [
  'Stanford', 'Menlo Park', 'Portola Valley', 'Atherton', 'Visitacion Valley', 'Twin Peaks',
  'Emerald Hills', 'San Carlos', 'Hayward', 'Los Altos', 'Campbell', 'Daly City',
  'Woodside', 'Woodside Plaza', 'Foster City', 'Los Altos Hills', 'La Honda', 'Bellvale',
  'Sunnyvale', 'Sunnyvale', 'Cupertino', 'Hillsborough', 'Los Altos', 'Foster City',
  'Half Moon Bay', 'Duboce Triangle', 'Presidio', 'Golden Gate Park', 'Yerba Buena', 'Brisbane'
];

const times = [
  '8 days ago', '4 days ago', '3 hours ago', '1 hour ago', '2 days ago',
  '15 days ago', '3 days ago', '6 hours ago', '23 hours ago', '14 days ago',
  '10 minutes ago', '20 hours ago', '5 days ago'
]

const userNos = [
  '5102223545', '6264448796', '7143435545', '9250908877', '7602327767',
  '6612223545', '2024448796', '8053435545', '8180908877', '8052327767',
  '5106068898', '6266068897', '7144548878', '9252234546', '7605546768',
  '6615456656', '2028789453', '8057678809', '8187769909', '8052215412',
  '5105456676', '6269981213', '7141125545', '9256557787', '7608879123',
  '6615569879', '2024448796', '8056567823', '8183466788', '8054346678',
];

const dogDescriptions = [
  'green collar', 'NA', 'minor scar on the left ear', 'NA', 'spots on the back',
  'NA', 'NA', 'limping right leg', 'NA', 'light blue collar',
  'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA',
  'NA', 'NA', 'large brown patches on the left side of body', 'NA', 'NA',
  'brown collar with gold rings', 'NA', 'NA', 'burmese mountain dog', 'NA'
]

// create 30 records
const createRecords = (urls, petNames, coordinates, cities, times, contactNos, descriptions) => {
  recordsWriter.pipe(fs.createWriteStream('dogs.csv'));
  for (let i = 0; i < 30; i += 1) {
    recordsWriter.write({
      url: urls[i],
      petName: petNames[i],
      lat: coordinates[i].lat,
      lon: coordinates[i].lon,
      city: cities[i],
      time: times[Math.floor(Math.random() * 13)],
      contactNo: contactNos[i],
      description: descriptions[i]
    });
  }
  recordsWriter.end()
}

createRecords(dogUrls, petNames, dogLocations, cities, times, userNos, dogDescriptions);

