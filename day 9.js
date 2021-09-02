//a) Get all the countries from Asia continent /region using Filter function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var asianCountries=data.filter(element=>element.region==="Asia")
                            .map(element=>element.name);
    console.log(asianCountries);
}

//output
//  ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan',
//  'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 
//  'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait',
//   'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 
//   'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman',
//    'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 
//    'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 
//    'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 
//    'Viet Nam', 'Yemen']

// b)Get all the countries with a population of less than 2 lakhs using Filter function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var population_LessThan_2Lakhs=data.filter(element=>element.population<200000)
                                       .map(element=>element.name);
    console.log(population_LessThan_2Lakhs);
}

//output
//  ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 
// 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 
// 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 
// 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island',
//  'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)',
//   'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 
//   'Guernsey', 'Heard Island and McDonald Islands', 'Holy See', 'Isle of Man', 'Jersey', 
//   'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 
//   'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 
//   'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 
//   'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 
//   'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
//    'Sao Tome and Principe', 'Seychelles', 'Sint Maarten (Dutch part)', 
//    'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga',
//     'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']


// c)Print the following details name, capital, flag using forEach function

// d)Print the total population of countries using reduce function
var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var totalPopulation=data.reduce((a,b)=>a+b.population,0);
    console.log(totalPopulation);
}

//output
//7349137231

// e)Print the country which uses US Dollars as currency.
