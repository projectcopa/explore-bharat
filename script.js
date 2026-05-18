const MAP_URL = "https://code.highcharts.com/mapdata/countries/in/in-all.geo.json";

const fallbackProfile = {
  capital: "Update from official state portal",
  chiefMinister: "Verify current office holder",
  ministers: ["Cabinet list should be maintained from the official state government website"],
  areaKm2: "Official figure pending",
  population: "Latest census/projection pending",
  rivers: ["Update river list"],
  mountains: "Varies by district",
  animal: "State animal pending",
  languages: ["Official/regional languages pending"],
  touristPlaces: [
    { name: "Tourism data pending", description: "Add verified destinations from the official tourism board." }
  ],
  education: {
    primarySchools: "Pending",
    highSchools: "Pending",
    colleges: "Pending",
    universities: "Pending",
    itiInstitutes: "Pending"
  },
  transport: {
    roads: ["National and state highways data pending"],
    url: "https://morth.nic.in/"
  }
};

const stateProfiles = {
  "Andhra Pradesh": {
    capital: "Amaravati",
    chiefMinister: "N. Chandrababu Naidu",
    ministers: ["Nara Lokesh", "Pawan Kalyan", "K. Atchannaidu"],
    areaKm2: "162,975",
    population: "49.6 million",
    rivers: ["Godavari", "Krishna", "Penna", "Tungabhadra", "Vamsadhara"],
    mountains: "Eastern Ghats",
    animal: "Blackbuck",
    languages: ["Telugu", "Urdu"],
    touristPlaces: [
      { name: "Tirupati", description: "Major pilgrimage city known for Sri Venkateswara Temple." },
      { name: "Araku Valley", description: "Hill valley with coffee estates and tribal culture." },
      { name: "Visakhapatnam Coast", description: "Beaches, ports, museums, and hill viewpoints." }
    ],
    education: { primarySchools: "45,000+", highSchools: "10,000+", colleges: "1,800+", universities: "25+", itiInstitutes: "450+" },
    transport: { roads: ["NH 16", "NH 44", "NH 65", "NH 216"], url: "https://aprsc.ap.gov.in/" }
  },
  "Arunachal Pradesh": {
    capital: "Itanagar",
    chiefMinister: "Pema Khandu",
    ministers: ["Chowna Mein", "Biyuram Wahge", "Nyato Dukam"],
    areaKm2: "83,743",
    population: "1.6 million",
    rivers: ["Siang", "Subansiri", "Lohit", "Kameng", "Dibang"],
    mountains: "Eastern Himalaya",
    animal: "Mithun",
    languages: ["English", "Nyishi", "Adi", "Apatani", "Monpa"],
    touristPlaces: [
      { name: "Tawang", description: "Monastery town surrounded by high Himalayan scenery." },
      { name: "Ziro Valley", description: "Cultural landscape known for Apatani villages and music festivals." }
    ],
    education: { primarySchools: "2,000+", highSchools: "300+", colleges: "40+", universities: "5+", itiInstitutes: "10+" },
    transport: { roads: ["NH 13", "NH 415", "Trans-Arunachal Highway"], url: "https://pwd.arunachal.gov.in/" }
  },
  "Assam": {
    capital: "Dispur",
    chiefMinister: "Himanta Biswa Sarma",
    ministers: ["Ranjeet Kumar Dass", "Atul Bora", "Keshab Mahanta"],
    areaKm2: "78,438",
    population: "35 million",
    rivers: ["Brahmaputra", "Barak", "Manas", "Subansiri", "Dibang"],
    mountains: "Patkai and surrounding hill systems",
    animal: "Indian Rhinoceros",
    languages: ["Assamese", "Bodo", "Bengali"],
    touristPlaces: [
      { name: "Kaziranga National Park", description: "UNESCO site famous for one-horned rhinoceros." },
      { name: "Majuli", description: "River island with Vaishnavite monasteries and crafts." }
    ],
    education: { primarySchools: "45,000+", highSchools: "8,000+", colleges: "700+", universities: "20+", itiInstitutes: "80+" },
    transport: { roads: ["NH 27", "NH 37", "NH 15"], url: "https://pwdroads.assam.gov.in/" }
  },
  "Bihar": {
    capital: "Patna",
    chiefMinister: "Nitish Kumar",
    ministers: ["Samrat Choudhary", "Vijay Kumar Sinha", "Vijay Kumar Chaudhary"],
    areaKm2: "94,163",
    population: "124 million",
    rivers: ["Ganga", "Gandak", "Kosi", "Sone", "Bagmati"],
    mountains: "Kaimur Range in the southwest",
    animal: "Gaur",
    languages: ["Hindi", "Urdu", "Maithili", "Bhojpuri", "Magahi"],
    touristPlaces: [
      { name: "Bodh Gaya", description: "UNESCO Buddhist pilgrimage destination." },
      { name: "Nalanda", description: "Ancient university ruins and heritage museum." }
    ],
    education: { primarySchools: "70,000+", highSchools: "10,000+", colleges: "900+", universities: "25+", itiInstitutes: "1,000+" },
    transport: { roads: ["NH 19", "NH 31", "NH 27", "NH 22"], url: "https://state.bihar.gov.in/roadconstruction/" }
  },
  "Chhattisgarh": {
    capital: "Raipur",
    chiefMinister: "Vishnu Deo Sai",
    ministers: ["Arun Sao", "Vijay Sharma", "O. P. Choudhary"],
    areaKm2: "135,192",
    population: "30 million",
    rivers: ["Mahanadi", "Indravati", "Shivnath", "Hasdeo", "Arpa"],
    mountains: "Maikal Range and Bastar Plateau",
    animal: "Wild Buffalo",
    languages: ["Hindi", "Chhattisgarhi"],
    touristPlaces: [
      { name: "Chitrakote Falls", description: "Wide waterfall on the Indravati River." },
      { name: "Sirpur", description: "Historic Buddhist, Hindu, and Jain archaeological site." }
    ],
    education: { primarySchools: "32,000+", highSchools: "5,000+", colleges: "600+", universities: "15+", itiInstitutes: "200+" },
    transport: { roads: ["NH 30", "NH 53", "NH 43"], url: "https://pwd.cg.gov.in/" }
  },
  "Goa": {
    capital: "Panaji",
    chiefMinister: "Pramod Sawant",
    ministers: ["Vishwajit Rane", "Mauvin Godinho", "Rohan Khaunte"],
    areaKm2: "3,702",
    population: "1.6 million",
    rivers: ["Mandovi", "Zuari", "Chapora", "Sal"],
    mountains: "Western Ghats",
    animal: "Gaur",
    languages: ["Konkani", "Marathi", "English"],
    touristPlaces: [
      { name: "Old Goa", description: "UNESCO churches and colonial heritage." },
      { name: "Dudhsagar Falls", description: "Four-tier waterfall near the Western Ghats." }
    ],
    education: { primarySchools: "1,200+", highSchools: "500+", colleges: "60+", universities: "3+", itiInstitutes: "10+" },
    transport: { roads: ["NH 66", "NH 748", "NH 566"], url: "https://www.pwd.goa.gov.in/" }
  },
  "Gujarat": {
    capital: "Gandhinagar",
    chiefMinister: "Bhupendra Patel",
    ministers: ["Kanubhai Desai", "Rushikesh Patel", "Harsh Sanghavi"],
    areaKm2: "196,244",
    population: "70 million",
    rivers: ["Narmada", "Tapi", "Sabarmati", "Mahi", "Banas"],
    mountains: "Aravalli, Satpura, Gir hills",
    animal: "Asiatic Lion",
    languages: ["Gujarati", "Hindi"],
    touristPlaces: [
      { name: "Statue of Unity", description: "World's tallest statue near Kevadia." },
      { name: "Gir National Park", description: "Only natural home of Asiatic lions." },
      { name: "Rann of Kutch", description: "Salt desert known for winter cultural festivals." }
    ],
    education: { primarySchools: "34,000+", highSchools: "12,000+", colleges: "2,000+", universities: "95+", itiInstitutes: "500+" },
    transport: { roads: ["NH 48", "NH 27", "NH 64", "NH 51"], url: "https://rnb.gujarat.gov.in/" }
  },
  "Haryana": {
    capital: "Chandigarh",
    chiefMinister: "Nayab Singh Saini",
    ministers: ["Anil Vij", "Krishan Lal Panwar", "Rao Narbir Singh"],
    areaKm2: "44,212",
    population: "30 million",
    rivers: ["Yamuna", "Ghaggar", "Markanda", "Sahibi"],
    mountains: "Shivalik foothills in the north",
    animal: "Blackbuck",
    languages: ["Hindi", "Haryanvi", "Punjabi"],
    touristPlaces: [
      { name: "Kurukshetra", description: "Historic and religious city linked with the Mahabharata." },
      { name: "Sultanpur National Park", description: "Bird sanctuary near Gurugram." }
    ],
    education: { primarySchools: "14,000+", highSchools: "5,000+", colleges: "700+", universities: "55+", itiInstitutes: "400+" },
    transport: { roads: ["NH 44", "NH 48", "NH 9", "KMP Expressway"], url: "https://pwdharyana.gov.in/" }
  },
  "Himachal Pradesh": {
    capital: "Shimla",
    chiefMinister: "Sukhvinder Singh Sukhu",
    ministers: ["Mukesh Agnihotri", "Harshwardhan Chauhan", "Rohit Thakur"],
    areaKm2: "55,673",
    population: "7.5 million",
    rivers: ["Beas", "Sutlej", "Ravi", "Chenab", "Yamuna"],
    mountains: "Western Himalaya, Dhauladhar, Pir Panjal",
    animal: "Snow Leopard",
    languages: ["Hindi", "Pahari languages"],
    touristPlaces: [
      { name: "Shimla", description: "Hill capital with colonial architecture and ridge views." },
      { name: "Manali", description: "Adventure and mountain tourism hub in Kullu Valley." }
    ],
    education: { primarySchools: "10,000+", highSchools: "2,800+", colleges: "150+", universities: "25+", itiInstitutes: "140+" },
    transport: { roads: ["NH 5", "NH 3", "NH 44"], url: "https://hppwd.hp.gov.in/" }
  },
  "Jharkhand": {
    capital: "Ranchi",
    chiefMinister: "Hemant Soren",
    ministers: ["Radhakrishna Kishore", "Deepak Birua", "Irfan Ansari"],
    areaKm2: "79,716",
    population: "39 million",
    rivers: ["Damodar", "Subarnarekha", "Koel", "Barakar", "Sankh"],
    mountains: "Chota Nagpur Plateau, Parasnath Hills",
    animal: "Indian Elephant",
    languages: ["Hindi", "Santali", "Nagpuri", "Khortha"],
    touristPlaces: [
      { name: "Netarhat", description: "Hill station known for sunrise and plateau landscapes." },
      { name: "Betla National Park", description: "Forest reserve with forts and wildlife." }
    ],
    education: { primarySchools: "35,000+", highSchools: "5,000+", colleges: "500+", universities: "20+", itiInstitutes: "300+" },
    transport: { roads: ["NH 18", "NH 20", "NH 33", "NH 43"], url: "https://www.jharkhand.gov.in/road-construction" }
  },
  "Karnataka": {
    capital: "Bengaluru",
    chiefMinister: "Siddaramaiah",
    ministers: ["D. K. Shivakumar", "G. Parameshwara", "K. H. Muniyappa"],
    areaKm2: "191,791",
    population: "68 million",
    rivers: ["Kaveri", "Krishna", "Tungabhadra", "Sharavathi", "Kabini"],
    mountains: "Western Ghats, Baba Budangiri, Nilgiri foothills",
    animal: "Indian Elephant",
    languages: ["Kannada", "Tulu", "Konkani", "Urdu"],
    touristPlaces: [
      { name: "Hampi", description: "UNESCO ruins of the Vijayanagara Empire." },
      { name: "Mysuru", description: "Palace city known for heritage and Dasara." },
      { name: "Coorg", description: "Coffee-growing hill district with forests and waterfalls." }
    ],
    education: { primarySchools: "48,000+", highSchools: "16,000+", colleges: "4,000+", universities: "70+", itiInstitutes: "1,300+" },
    transport: { roads: ["NH 44", "NH 48", "NH 66", "NH 75"], url: "https://kship.in/" }
  },
  "Kerala": {
    capital: "Thiruvananthapuram",
    chiefMinister: "Pinarayi Vijayan",
    ministers: ["K. N. Balagopal", "P. Rajeeve", "V. Sivankutty"],
    areaKm2: "38,863",
    population: "35 million",
    rivers: ["Periyar", "Bharathapuzha", "Pamba", "Chaliyar", "Kabini"],
    mountains: "Western Ghats, Anamudi",
    animal: "Indian Elephant",
    languages: ["Malayalam", "English"],
    touristPlaces: [
      { name: "Alappuzha Backwaters", description: "Canals, lagoons, and houseboat tourism." },
      { name: "Munnar", description: "Tea estates and high-range scenery." }
    ],
    education: { primarySchools: "7,000+", highSchools: "4,000+", colleges: "1,400+", universities: "20+", itiInstitutes: "600+" },
    transport: { roads: ["NH 66", "NH 544", "MC Road"], url: "https://pwd.kerala.gov.in/" }
  },
  "Madhya Pradesh": {
    capital: "Bhopal",
    chiefMinister: "Mohan Yadav",
    ministers: ["Jagdish Devda", "Rajendra Shukla", "Kailash Vijayvargiya"],
    areaKm2: "308,252",
    population: "85 million",
    rivers: ["Narmada", "Chambal", "Betwa", "Son", "Tapti"],
    mountains: "Vindhya and Satpura ranges",
    animal: "Barasingha",
    languages: ["Hindi"],
    touristPlaces: [
      { name: "Khajuraho", description: "UNESCO temple group known for sculpture." },
      { name: "Sanchi", description: "Ancient Buddhist stupas and monuments." },
      { name: "Kanha National Park", description: "Tiger reserve and forest tourism destination." }
    ],
    education: { primarySchools: "83,000+", highSchools: "18,000+", colleges: "1,500+", universities: "65+", itiInstitutes: "1,200+" },
    transport: { roads: ["NH 44", "NH 46", "NH 52", "NH 30"], url: "https://mprdc.gov.in/" }
  },
  "Maharashtra": {
    capital: "Mumbai",
    chiefMinister: "Devendra Fadnavis",
    ministers: ["Eknath Shinde", "Ajit Pawar", "Chandrakant Patil"],
    areaKm2: "307,713",
    population: "124 million",
    rivers: ["Godavari", "Krishna", "Tapi", "Bhima", "Wardha"],
    mountains: "Western Ghats, Satpura, Ajanta and Balaghat ranges",
    animal: "Indian Giant Squirrel",
    languages: ["Marathi", "Hindi", "Konkani"],
    touristPlaces: [
      { name: "Mumbai", description: "Financial capital with heritage, sea fronts, and museums." },
      { name: "Ajanta and Ellora", description: "UNESCO cave complexes with rock-cut art." },
      { name: "Mahabaleshwar", description: "Western Ghats hill station and strawberry region." }
    ],
    education: { primarySchools: "100,000+", highSchools: "27,000+", colleges: "5,000+", universities: "75+", itiInstitutes: "1,000+" },
    transport: { roads: ["NH 48", "NH 44", "NH 53", "Mumbai-Pune Expressway"], url: "https://msrdc.in/" }
  },
  "Manipur": {
    capital: "Imphal",
    chiefMinister: "N. Biren Singh",
    ministers: ["Y. Khemchand Singh", "Th. Biswajit Singh", "Govindas Konthoujam"],
    areaKm2: "22,327",
    population: "3.3 million",
    rivers: ["Manipur", "Barak", "Imphal", "Iril", "Thoubal"],
    mountains: "Manipur Hills and Purvanchal ranges",
    animal: "Sangai",
    languages: ["Meitei", "English"],
    touristPlaces: [
      { name: "Loktak Lake", description: "Freshwater lake known for floating phumdis." },
      { name: "Kangla Fort", description: "Historic seat of Manipuri rulers." }
    ],
    education: { primarySchools: "3,500+", highSchools: "900+", colleges: "100+", universities: "5+", itiInstitutes: "15+" },
    transport: { roads: ["NH 2", "NH 37", "NH 102"], url: "https://pwdmanipur.nic.in/" }
  },
  "Meghalaya": {
    capital: "Shillong",
    chiefMinister: "Conrad K. Sangma",
    ministers: ["Prestone Tynsong", "Sniawbhalang Dhar", "Ampareen Lyngdoh"],
    areaKm2: "22,429",
    population: "3.6 million",
    rivers: ["Umngot", "Simsang", "Kynshi", "Myntdu"],
    mountains: "Garo, Khasi, and Jaintia Hills",
    animal: "Clouded Leopard",
    languages: ["English", "Khasi", "Garo"],
    touristPlaces: [
      { name: "Cherrapunji", description: "Rain-rich plateau with caves and waterfalls." },
      { name: "Dawki", description: "Clear-water Umngot River and border tourism." }
    ],
    education: { primarySchools: "10,000+", highSchools: "1,200+", colleges: "90+", universities: "10+", itiInstitutes: "15+" },
    transport: { roads: ["NH 6", "NH 40", "NH 62"], url: "https://megpwd.gov.in/" }
  },
  "Mizoram": {
    capital: "Aizawl",
    chiefMinister: "Lalduhoma",
    ministers: ["Tawnluia", "K. Sapdanga", "Lalrinpuii"],
    areaKm2: "21,081",
    population: "1.3 million",
    rivers: ["Tlawng", "Tuirial", "Chhimtuipui", "Karnaphuli"],
    mountains: "Lushai Hills",
    animal: "Serow",
    languages: ["Mizo", "English"],
    touristPlaces: [
      { name: "Aizawl", description: "Hill capital with markets and cultural institutions." },
      { name: "Phawngpui", description: "Blue Mountain national park and highland trekking." }
    ],
    education: { primarySchools: "2,000+", highSchools: "700+", colleges: "40+", universities: "3+", itiInstitutes: "10+" },
    transport: { roads: ["NH 54", "NH 306", "NH 502A"], url: "https://pwd.mizoram.gov.in/" }
  },
  "Nagaland": {
    capital: "Kohima",
    chiefMinister: "Neiphiu Rio",
    ministers: ["Y. Patton", "T. R. Zeliang", "Metsubo Jamir"],
    areaKm2: "16,579",
    population: "2.2 million",
    rivers: ["Doyang", "Dhansiri", "Tizu", "Milak"],
    mountains: "Naga Hills and Patkai Range",
    animal: "Mithun",
    languages: ["English", "Nagamese", "Ao", "Angami"],
    touristPlaces: [
      { name: "Kohima", description: "Historic hill city and World War II cemetery." },
      { name: "Dzukou Valley", description: "High valley known for seasonal flowers and treks." }
    ],
    education: { primarySchools: "2,000+", highSchools: "600+", colleges: "70+", universities: "5+", itiInstitutes: "10+" },
    transport: { roads: ["NH 2", "NH 29", "NH 202"], url: "https://pwd.nagaland.gov.in/" }
  },
  "Odisha": {
    capital: "Bhubaneswar",
    chiefMinister: "Mohan Charan Majhi",
    ministers: ["Kanak Vardhan Singh Deo", "Pravati Parida", "Suresh Pujari"],
    areaKm2: "155,707",
    population: "46 million",
    rivers: ["Mahanadi", "Brahmani", "Baitarani", "Subarnarekha", "Rushikulya"],
    mountains: "Eastern Ghats",
    animal: "Sambar Deer",
    languages: ["Odia", "Hindi", "English"],
    touristPlaces: [
      { name: "Puri", description: "Jagannath Temple and coastal pilgrimage tourism." },
      { name: "Konark", description: "UNESCO Sun Temple complex." },
      { name: "Chilika Lake", description: "Lagoon famous for birds and wetlands." }
    ],
    education: { primarySchools: "55,000+", highSchools: "9,000+", colleges: "1,200+", universities: "30+", itiInstitutes: "600+" },
    transport: { roads: ["NH 16", "NH 26", "NH 53", "NH 55"], url: "https://works.odisha.gov.in/" }
  },
  "Punjab": {
    capital: "Chandigarh",
    chiefMinister: "Bhagwant Mann",
    ministers: ["Harpal Singh Cheema", "Aman Arora", "Dr. Baljit Kaur"],
    areaKm2: "50,362",
    population: "30 million",
    rivers: ["Sutlej", "Beas", "Ravi", "Ghaggar"],
    mountains: "Shivalik foothills",
    animal: "Blackbuck",
    languages: ["Punjabi", "Hindi"],
    touristPlaces: [
      { name: "Amritsar", description: "Golden Temple, heritage streets, and border ceremony access." },
      { name: "Anandpur Sahib", description: "Major Sikh pilgrimage and heritage town." }
    ],
    education: { primarySchools: "19,000+", highSchools: "6,000+", colleges: "1,000+", universities: "35+", itiInstitutes: "350+" },
    transport: { roads: ["NH 44", "NH 5", "NH 54", "NH 7"], url: "https://pwd.punjab.gov.in/" }
  },
  "Rajasthan": {
    capital: "Jaipur",
    chiefMinister: "Bhajan Lal Sharma",
    ministers: ["Diya Kumari", "Prem Chand Bairwa", "Kirodi Lal Meena"],
    areaKm2: "342,239",
    population: "81 million",
    rivers: ["Chambal", "Banas", "Luni", "Mahi", "Sabarmati"],
    mountains: "Aravalli Range",
    animal: "Chinkara",
    languages: ["Hindi", "Rajasthani"],
    touristPlaces: [
      { name: "Jaipur", description: "Pink City with forts, palaces, and urban heritage." },
      { name: "Udaipur", description: "Lake city known for palaces and cultural tourism." },
      { name: "Jaisalmer", description: "Desert fort city and Thar tourism hub." }
    ],
    education: { primarySchools: "80,000+", highSchools: "22,000+", colleges: "2,800+", universities: "90+", itiInstitutes: "1,900+" },
    transport: { roads: ["NH 48", "NH 52", "NH 62", "NH 27"], url: "https://pwd.rajasthan.gov.in/" }
  },
  "Sikkim": {
    capital: "Gangtok",
    chiefMinister: "Prem Singh Tamang",
    ministers: ["Sonam Lama", "Bhim Hang Limboo", "Arun Upreti"],
    areaKm2: "7,096",
    population: "0.7 million",
    rivers: ["Teesta", "Rangeet", "Lachung Chu", "Lachen Chu"],
    mountains: "Eastern Himalaya, Kangchenjunga range",
    animal: "Red Panda",
    languages: ["Nepali", "Sikkimese", "Lepcha", "English"],
    touristPlaces: [
      { name: "Gangtok", description: "Mountain capital with monasteries and viewpoints." },
      { name: "Tsomgo Lake", description: "High-altitude glacial lake near Nathula route." }
    ],
    education: { primarySchools: "800+", highSchools: "250+", colleges: "30+", universities: "8+", itiInstitutes: "5+" },
    transport: { roads: ["NH 10", "Nathula Road"], url: "https://roadsbridges.sikkim.gov.in/" }
  },
  "Tamil Nadu": {
    capital: "Chennai",
    chiefMinister: "C. Joseph Vijay",
    ministers: ["N. Anand", "Aadhav Arjuna", "Dr. K.G. Arunraj"],
    areaKm2: "130,058",
    population: "76 million",
    rivers: ["Kaveri", "Vaigai", "Thamirabarani", "Palar", "Bhavani"],
    mountains: "Western Ghats, Eastern Ghats, Nilgiri Hills",
    animal: "Nilgiri Tahr",
    languages: ["Tamil", "English"],
    touristPlaces: [
      { name: "Chennai", description: "Coastal capital with temples, museums, and beaches." },
      { name: "Madurai", description: "Temple city centered on Meenakshi Amman Temple." },
      { name: "Ooty", description: "Nilgiri hill station and botanical gardens." }
    ],
    education: { primarySchools: "37,000+", highSchools: "12,000+", colleges: "3,000+", universities: "55+", itiInstitutes: "600+" },
    transport: { roads: ["NH 44", "NH 48", "NH 32", "East Coast Road"], url: "https://www.tnhighways.tn.gov.in/" }
  },
  "Telangana": {
    capital: "Hyderabad",
    chiefMinister: "A. Revanth Reddy",
    ministers: ["Mallu Bhatti Vikramarka", "N. Uttam Kumar Reddy", "D. Sridhar Babu"],
    areaKm2: "112,077",
    population: "39 million",
    rivers: ["Godavari", "Krishna", "Musi", "Manjira"],
    mountains: "Deccan Plateau, Ananthagiri Hills",
    animal: "Spotted Deer",
    languages: ["Telugu", "Urdu"],
    touristPlaces: [
      { name: "Hyderabad", description: "Historic city known for Charminar, forts, and cuisine." },
      { name: "Ramappa Temple", description: "UNESCO Kakatiya temple near Warangal." }
    ],
    education: { primarySchools: "28,000+", highSchools: "8,000+", colleges: "1,800+", universities: "30+", itiInstitutes: "300+" },
    transport: { roads: ["NH 44", "NH 65", "NH 163", "Outer Ring Road"], url: "https://roadsbuildings.telangana.gov.in/" }
  },
  "Tripura": {
    capital: "Agartala",
    chiefMinister: "Manik Saha",
    ministers: ["Jishnu Dev Varma", "Ratan Lal Nath", "Pranajit Singha Roy"],
    areaKm2: "10,486",
    population: "4.2 million",
    rivers: ["Gomati", "Manu", "Khowai", "Feni", "Haora"],
    mountains: "Jampui, Sakhan, Longtharai ranges",
    animal: "Phayre's Leaf Monkey",
    languages: ["Bengali", "Kokborok", "English"],
    touristPlaces: [
      { name: "Ujjayanta Palace", description: "Former royal palace and state museum." },
      { name: "Neermahal", description: "Lake palace in Rudrasagar Lake." }
    ],
    education: { primarySchools: "4,000+", highSchools: "1,000+", colleges: "60+", universities: "5+", itiInstitutes: "20+" },
    transport: { roads: ["NH 8", "NH 108"], url: "https://pwd.tripura.gov.in/" }
  },
  "Uttar Pradesh": {
    capital: "Lucknow",
    chiefMinister: "Yogi Adityanath",
    ministers: ["Keshav Prasad Maurya", "Brajesh Pathak", "Surya Pratap Shahi"],
    areaKm2: "240,928",
    population: "240 million",
    rivers: ["Ganga", "Yamuna", "Gomti", "Ghaghara", "Saryu"],
    mountains: "Gangetic plains with Shivalik foothill influence in the north",
    animal: "Barasingha",
    languages: ["Hindi", "Urdu", "Awadhi", "Bhojpuri", "BraJ"],
    touristPlaces: [
      { name: "Agra", description: "Home of the Taj Mahal and Mughal heritage sites." },
      { name: "Varanasi", description: "Ancient river city and spiritual center." },
      { name: "Lucknow", description: "Nawabi architecture, cuisine, and museums." }
    ],
    education: { primarySchools: "150,000+", highSchools: "45,000+", colleges: "8,000+", universities: "90+", itiInstitutes: "3,000+" },
    transport: { roads: ["NH 19", "NH 27", "NH 30", "Yamuna Expressway", "Purvanchal Expressway"], url: "https://uppwd.gov.in/" }
  },
  "Uttarakhand": {
    capital: "Dehradun",
    chiefMinister: "Pushkar Singh Dhami",
    ministers: ["Satpal Maharaj", "Subodh Uniyal", "Dhan Singh Rawat"],
    areaKm2: "53,483",
    population: "11.5 million",
    rivers: ["Ganga", "Yamuna", "Alaknanda", "Bhagirathi", "Kali"],
    mountains: "Garhwal and Kumaon Himalaya",
    animal: "Alpine Musk Deer",
    languages: ["Hindi", "Garhwali", "Kumaoni"],
    touristPlaces: [
      { name: "Rishikesh", description: "Yoga, river rafting, and Ganga ghats." },
      { name: "Nainital", description: "Lake hill station in Kumaon." },
      { name: "Char Dham", description: "Major pilgrimage circuit in the Himalaya." }
    ],
    education: { primarySchools: "17,000+", highSchools: "4,500+", colleges: "400+", universities: "35+", itiInstitutes: "150+" },
    transport: { roads: ["NH 7", "NH 34", "NH 109", "Char Dham Road"], url: "https://pwd.uk.gov.in/" }
  },
  "West Bengal": {
    capital: "Kolkata",
    chiefMinister: "subhendu adhikary",
    ministers: ["Dilip ghosh", "Agnimitra pal", "Shankar ghosh"],
    areaKm2: "88,752",
    population: "100 million",
    rivers: ["Hooghly", "Teesta", "Damodar", "Mahananda", "Ajay"],
    mountains: "Eastern Himalaya in Darjeeling region",
    animal: "Fishing Cat",
    languages: ["Bengali", "Hindi", "Urdu", "Nepali"],
    touristPlaces: [
      { name: "Kolkata", description: "Cultural capital with colonial heritage and museums." },
      { name: "Darjeeling", description: "Tea gardens, Himalayan views, and hill railway." },
      { name: "Sundarbans", description: "Mangrove delta and tiger reserve." }
    ],
    education: { primarySchools: "80,000+", highSchools: "15,000+", colleges: "1,500+", universities: "40+", itiInstitutes: "300+" },
    transport: { roads: ["NH 12", "NH 16", "NH 19", "NH 27"], url: "https://wbpwd.gov.in/" }
  }
};

const unionTerritoryProfiles = {
  "Andaman and Nicobar": {
    capital: "Port Blair",
    chiefMinister: "Union territory administered by Lieutenant Governor",
    ministers: ["No state cabinet"],
    areaKm2: "8,249",
    population: "0.4 million",
    rivers: ["Kalpong"],
    mountains: "Saddle Peak and island hill ranges",
    animal: "Dugong",
    languages: ["Hindi", "English", "Bengali", "Tamil", "Telugu"],
    touristPlaces: [
      { name: "Cellular Jail", description: "National memorial in Port Blair." },
      { name: "Havelock Island", description: "Beaches, reefs, and marine tourism." }
    ],
    education: { primarySchools: "300+", highSchools: "100+", colleges: "10+", universities: "1+", itiInstitutes: "3+" },
    transport: { roads: ["ATR", "Island roads"], url: "https://andaman.gov.in/" }
  },
  "Chandigarh": {
    capital: "Chandigarh",
    chiefMinister: "Union territory administered by Administrator",
    ministers: ["No state cabinet"],
    areaKm2: "114",
    population: "1.2 million",
    rivers: ["Sukhna Choe"],
    mountains: "Shivalik foothill edge",
    animal: "Indian Grey Mongoose",
    languages: ["English", "Hindi", "Punjabi"],
    touristPlaces: [
      { name: "Rock Garden", description: "Sculpture garden built with recycled materials." },
      { name: "Sukhna Lake", description: "Urban lake and recreation zone." }
    ],
    education: { primarySchools: "150+", highSchools: "120+", colleges: "20+", universities: "3+", itiInstitutes: "5+" },
    transport: { roads: ["Madhya Marg", "Dakshin Marg", "NH 5"], url: "https://chandigarh.gov.in/" }
  },
  "Delhi": {
    capital: "New Delhi",
    chiefMinister: "Rekha Gupta",
    ministers: ["Parvesh Verma", "Ashish Sood", "Kapil Mishra"],
    areaKm2: "1,484",
    population: "20+ million",
    rivers: ["Yamuna"],
    mountains: "Delhi Ridge, an extension of the Aravalli Range",
    animal: "Nilgai",
    languages: ["Hindi", "English", "Punjabi", "Urdu"],
    touristPlaces: [
      { name: "Red Fort", description: "UNESCO Mughal fort and national landmark." },
      { name: "Qutub Minar", description: "UNESCO minaret complex in Mehrauli." },
      { name: "India Gate", description: "War memorial and civic landmark." }
    ],
    education: { primarySchools: "5,000+", highSchools: "2,000+", colleges: "250+", universities: "25+", itiInstitutes: "20+" },
    transport: { roads: ["NH 44", "NH 48", "Ring Road", "Delhi-Meerut Expressway"], url: "https://transport.delhi.gov.in/" }
  },
  "Jammu and Kashmir": {
    capital: "Srinagar / Jammu",
    chiefMinister: "Omar Abdullah",
    ministers: ["Surinder Choudhary", "Sakina Itoo", "Javed Ahmad Rana"],
    areaKm2: "42,241",
    population: "13+ million",
    rivers: ["Jhelum", "Chenab", "Tawi", "Ravi"],
    mountains: "Pir Panjal, Zanskar, Himalaya",
    animal: "Kashmir Stag",
    languages: ["Kashmiri", "Dogri", "Hindi", "Urdu", "English"],
    touristPlaces: [
      { name: "Srinagar", description: "Dal Lake, gardens, and old city heritage." },
      { name: "Gulmarg", description: "Skiing, meadows, and mountain tourism." }
    ],
    education: { primarySchools: "20,000+", highSchools: "4,000+", colleges: "150+", universities: "10+", itiInstitutes: "70+" },
    transport: { roads: ["NH 44", "Mughal Road", "Srinagar-Leh Road"], url: "https://pwdrb.jk.gov.in/" }
  },
  "Ladakh": {
    capital: "Leh",
    chiefMinister: "Union territory administered by Lieutenant Governor",
    ministers: ["No state cabinet"],
    areaKm2: "59,146",
    population: "0.3 million",
    rivers: ["Indus", "Zanskar", "Shyok", "Nubra"],
    mountains: "Karakoram, Ladakh, Zanskar ranges",
    animal: "Snow Leopard",
    languages: ["Ladakhi", "Hindi", "English"],
    touristPlaces: [
      { name: "Leh", description: "High-altitude town with monasteries and markets." },
      { name: "Pangong Tso", description: "High-altitude lake crossing India-China frontier area." }
    ],
    education: { primarySchools: "800+", highSchools: "250+", colleges: "8+", universities: "1+", itiInstitutes: "5+" },
    transport: { roads: ["NH 1", "Manali-Leh Highway"], url: "https://ladakh.nic.in/" }
  },
  "Puducherry": {
    capital: "Puducherry",
    chiefMinister: "N. Rangasamy",
    ministers: ["A. Namassivayam", "K. Lakshminarayanan", "C. Djeacoumar"],
    areaKm2: "490",
    population: "1.5 million",
    rivers: ["Sankaraparani", "Arasalar"],
    mountains: "Coastal plains",
    animal: "Indian Palm Squirrel",
    languages: ["Tamil", "French", "English", "Telugu", "Malayalam"],
    touristPlaces: [
      { name: "French Quarter", description: "Colonial streets, cafes, and seaside promenade." },
      { name: "Auroville", description: "International township and Matrimandir visitor zone." }
    ],
    education: { primarySchools: "500+", highSchools: "250+", colleges: "70+", universities: "5+", itiInstitutes: "10+" },
    transport: { roads: ["NH 32", "East Coast Road"], url: "https://transport.py.gov.in/" }
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    capital: "Daman",
    chiefMinister: "Union territory administered by Administrator",
    ministers: ["No state cabinet"],
    areaKm2: "603",
    population: "0.6 million",
    rivers: ["Damanganga", "Kolak", "Kalu"],
    mountains: "Western coastal plains and low hill terrain",
    animal: "Not officially designated in this demo data",
    languages: ["Gujarati", "Hindi", "Marathi", "English"],
    touristPlaces: [
      { name: "Diu Fort", description: "Sea-facing Portuguese fort and heritage landmark." },
      { name: "Nagoa Beach", description: "Popular curved beach on Diu island." },
      { name: "Daman Fort", description: "Historic coastal fortification near the Damanganga River." }
    ],
    education: { primarySchools: "300+", highSchools: "100+", colleges: "10+", universities: "1+", itiInstitutes: "5+" },
    transport: { roads: ["NH 48 access corridor", "Coastal district roads"], url: "https://ddd.gov.in/" }
  },
  "Lakshadweep": {
    capital: "Kavaratti",
    chiefMinister: "Union territory administered by Administrator",
    ministers: ["No state cabinet"],
    areaKm2: "32",
    population: "0.07 million",
    rivers: ["No major rivers; freshwater is mainly from rainwater and groundwater lenses"],
    mountains: "Coral atolls and low-lying islands",
    animal: "Butterflyfish",
    languages: ["Malayalam", "Mahl", "English"],
    touristPlaces: [
      { name: "Kavaratti", description: "Administrative capital known for lagoon tourism and mosques." },
      { name: "Agatti", description: "Island with coral reefs, beaches, and airport access." },
      { name: "Bangaram", description: "Lagoon island known for marine recreation." }
    ],
    education: { primarySchools: "40+", highSchools: "15+", colleges: "3+", universities: "0", itiInstitutes: "2+" },
    transport: { roads: ["Island roads", "Passenger ship and air links"], url: "https://lakshadweep.gov.in/" }
  }
};

const aliasMap = {
  "NCT of Delhi": "Delhi",
  "National Capital Territory of Delhi": "Delhi",
  "Orissa": "Odisha",
  "Uttaranchal": "Uttarakhand",
  "Jammu and Kashmir": "Jammu and Kashmir",
  "Andaman & Nicobar": "Andaman and Nicobar",
  "Dadra and Nagar Haveli": "Dadra and Nagar Haveli and Daman and Diu",
  "Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu",
  "Daman & Diu": "Dadra and Nagar Haveli and Daman and Diu",
  "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu"
};

const profiles = { ...stateProfiles, ...unionTerritoryProfiles };

const customLocations = {
  "Dadra and Nagar Haveli and Daman and Diu": [
    { label: "Daman", lon: 72.83, lat: 20.41 },
    { label: "Diu", lon: 70.98, lat: 20.71 },
    { label: "Dadra & Nagar Haveli", lon: 73.02, lat: 20.27 }
  ],
  "Lakshadweep": [
    { label: "Kavaratti", lon: 72.64, lat: 10.57 },
    { label: "Agatti", lon: 72.18, lat: 10.85 }
  ]
};

const referenceMapLabels = [
  { code: "LA", name: "Ladakh", x: 27.4, y: 8.5 },
  { code: "JK", name: "Jammu and Kashmir", x: 22.4, y: 16.1 },
  { code: "HP", name: "Himachal Pradesh", x: 31.5, y: 22.8 },
  { code: "PB", name: "Punjab", x: 22.6, y: 27.0 },
  { code: "UT", name: "Uttarakhand", x: 36.5, y: 29.0 },
  { code: "HR", name: "Haryana", x: 27.1, y: 31.0 },
  { code: "DL", name: "Delhi", x: 30.8, y: 33.1 },
  { code: "RJ", name: "Rajasthan", x: 17.5, y: 42.3 },
  { code: "UP", name: "Uttar Pradesh", x: 42.6, y: 40.5 },
  { code: "BR", name: "Bihar", x: 58.2, y: 42.7 },
  { code: "SK", name: "Sikkim", x: 66.3, y: 36.7 },
  { code: "AR", name: "Arunachal Pradesh", x: 86.6, y: 32.2 },
  { code: "AS", name: "Assam", x: 79.3, y: 41.0 },
  { code: "NL", name: "Nagaland", x: 91.5, y: 38.8 },
  { code: "ML", name: "Meghalaya", x: 74.2, y: 46.4 },
  { code: "MN", name: "Manipur", x: 88.3, y: 47.0 },
  { code: "MZ", name: "Mizoram", x: 86.4, y: 54.2 },
  { code: "TR", name: "Tripura", x: 80.5, y: 52.5 },
  { code: "WB", name: "West Bengal", x: 65.5, y: 52.8 },
  { code: "JH", name: "Jharkhand", x: 56.0, y: 51.4 },
  { code: "MP", name: "Madhya Pradesh", x: 38.2, y: 52.2 },
  { code: "GJ", name: "Gujarat", x: 11.2, y: 58.0 },
  { code: "MH", name: "Maharashtra", x: 28.8, y: 64.1 },
  { code: "CT", name: "Chhattisgarh", x: 48.8, y: 61.9 },
  { code: "OR", name: "Odisha", x: 58.0, y: 60.7 },
  { code: "TG", name: "Telangana", x: 43.0, y: 69.9 },
  { code: "AP", name: "Andhra Pradesh", x: 45.2, y: 79.0 },
  { code: "KA", name: "Karnataka", x: 32.1, y: 80.0 },
  { code: "GA", name: "Goa", x: 25.0, y: 77.2 },
  { code: "TN", name: "Tamil Nadu", x: 42.2, y: 91.0 },
  { code: "KL", name: "Kerala", x: 33.4, y: 91.0 },
  { code: "PY", name: "Puducherry", x: 48.0, y: 84.8 },
  { code: "LD", name: "Lakshadweep", x: 14.2, y: 84.2 },
  { code: "AN", name: "Andaman and Nicobar", x: 86.3, y: 84.6 }
];

const svg = document.getElementById("indiaMap");
const referenceMapFrame = document.getElementById("referenceMapFrame");
const referenceOverlay = document.getElementById("referenceOverlay");
const viewport = document.getElementById("mapViewport");
const loading = document.getElementById("loading");
const tooltip = document.getElementById("tooltip");
const searchInput = document.getElementById("stateSearch");
const filterSelect = document.getElementById("filterSelect");
const themeToggle = document.getElementById("themeToggle");
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const stateButtons = document.getElementById("stateButtons");

const emptyState = document.getElementById("emptyState");
const stateReport = document.getElementById("stateReport");
const reportType = document.getElementById("reportType");
const stateNameEl = document.getElementById("stateName");
const animalChip = document.getElementById("animalChip");
const capitalEl = document.getElementById("capital");
const areaEl = document.getElementById("area");
const populationEl = document.getElementById("population");
const sectionList = document.getElementById("sectionList");

let mapGroup;
let labelGroup;
let markerGroup;
let mapBounds;
let features = [];
let selectedName = "";
let scale = 1;
let pan = { x: 0, y: 0 };
let dragging = false;
let startPoint = { x: 0, y: 0 };

function normalizeName(name = "") {
  return aliasMap[name] || name.replace(/\s+/g, " ").trim();
}

function getProfile(name) {
  return profiles[normalizeName(name)] || fallbackProfile;
}

function getKnownStateNames() {
  return Object.keys(profiles).sort((a, b) => a.localeCompare(b));
}

function formatList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function buildSection(title, content) {
  return `<section class="detail-section"><h3>${title}</h3>${content}</section>`;
}

function renderPanel(name) {
  const profile = getProfile(name);
  emptyState.classList.add("hidden");
  stateReport.classList.remove("hidden");
  reportType.textContent = "State / UT Profile";
  stateNameEl.textContent = normalizeName(name);
  animalChip.textContent = profile.animal;
  capitalEl.textContent = profile.capital;
  areaEl.textContent = `${profile.areaKm2} sq. km`;
  populationEl.textContent = profile.population;

  const tourism = profile.touristPlaces
    .map((place) => `<li><strong>${place.name}:</strong> ${place.description}</li>`)
    .join("");

  const educationMetrics = Object.entries(profile.education)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
      return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
    })
    .join("");

  sectionList.innerHTML = [
    buildSection("Government", `<p><strong>Chief Minister:</strong> ${profile.chiefMinister}</p><p><strong>Ministers:</strong></p><ul>${formatList(profile.ministers)}</ul>`),
    buildSection("Geography", `<p><strong>Rivers (${profile.rivers.length}):</strong></p><ul>${formatList(profile.rivers)}</ul><p><strong>Mountain ranges:</strong> ${profile.mountains}</p>`),
    buildSection("Culture", `<p><strong>Regional languages:</strong> ${profile.languages.join(", ")}</p>`),
    buildSection("Tourism", `<p><strong>Tourist places listed:</strong> ${profile.touristPlaces.length}</p><ul>${tourism}</ul>`),
    buildSection("Education Infrastructure", `<div class="metric-grid">${educationMetrics}</div>`),
    buildSection("Transport", `<p><strong>Major roads / national highways:</strong></p><ul>${formatList(profile.transport.roads)}</ul><a class="transport-link" href="${profile.transport.url}" target="_blank" rel="noreferrer">Official transport / roads website</a>`)
  ].join("");
}

function project(lon, lat, bounds, width, height) {
  const padding = 40;
  const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * (width - padding * 2) + padding;
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * (height - padding * 2) + padding;
  return [x, y];
}

function getBounds(collection) {
  const coords = [];
  collection.features.forEach((feature) => collectCoords(feature.geometry.coordinates, coords));
  return coords.reduce((acc, [lon, lat]) => ({
    minLon: Math.min(acc.minLon, lon),
    maxLon: Math.max(acc.maxLon, lon),
    minLat: Math.min(acc.minLat, lat),
    maxLat: Math.max(acc.maxLat, lat)
  }), { minLon: Infinity, maxLon: -Infinity, minLat: Infinity, maxLat: -Infinity });
}

function collectCoords(input, out) {
  if (typeof input[0] === "number") {
    out.push(input);
    return;
  }
  input.forEach((entry) => collectCoords(entry, out));
}

function ringToPath(ring, bounds, width, height) {
  return ring.map(([lon, lat], index) => {
    const [x, y] = project(lon, lat, bounds, width, height);
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ") + " Z";
}

function geometryToPath(geometry, bounds, width, height) {
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map((ring) => ringToPath(ring, bounds, width, height)).join(" ");
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.flatMap((polygon) => polygon.map((ring) => ringToPath(ring, bounds, width, height))).join(" ");
  }
  return "";
}

function centroid(feature) {
  const coords = [];
  collectCoords(feature.geometry.coordinates, coords);
  const totals = coords.reduce((acc, [lon, lat]) => ({ lon: acc.lon + lon, lat: acc.lat + lat }), { lon: 0, lat: 0 });
  return [totals.lon / coords.length, totals.lat / coords.length];
}

function updateTransform() {
  if (referenceMapFrame) {
    referenceMapFrame.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${scale})`;
  }
  if (mapGroup) {
    mapGroup.setAttribute("transform", `translate(${pan.x} ${pan.y}) scale(${scale})`);
  }
}

function selectState(name) {
  selectedName = normalizeName(name);
  document.querySelectorAll(".state-region").forEach((path) => {
    path.classList.toggle("selected", normalizeName(path.dataset.name) === selectedName);
  });
  document.querySelectorAll(".map-hotspot").forEach((button) => {
    button.classList.toggle("active", normalizeName(button.dataset.name) === selectedName);
  });
  document.querySelectorAll(".state-marker").forEach((marker) => {
    marker.classList.toggle("selected", normalizeName(marker.dataset.name) === selectedName);
  });
  document.querySelectorAll(".state-pill").forEach((button) => {
    button.classList.toggle("active", normalizeName(button.dataset.name) === selectedName);
  });
  renderPanel(selectedName);
  renderSelectedLabel();
}

function renderSelectedLabel() {
  if (!labelGroup) return;
  labelGroup.innerHTML = "";
  if (!selectedName) return;
  const feature = features.find((item) => normalizeName(item.properties.name) === selectedName);

  let lon;
  let lat;
  if (feature) {
    [lon, lat] = centroid(feature);
  } else if (customLocations[selectedName]) {
    lon = customLocations[selectedName][0].lon;
    lat = customLocations[selectedName][0].lat;
  } else {
    return;
  }

  const [x, y] = project(lon, lat, mapBounds, 900, 920);
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("class", "state-label");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.textContent = selectedName;
  labelGroup.appendChild(text);
}

function showTooltip(event, name) {
  const profile = getProfile(name);
  const rect = viewport.getBoundingClientRect();
  tooltip.innerHTML = `<strong>${normalizeName(name)}</strong><br>${profile.capital} - ${profile.languages.slice(0, 2).join(", ")}`;
  tooltip.style.left = `${event.clientX - rect.left}px`;
  tooltip.style.top = `${event.clientY - rect.top}px`;
  tooltip.classList.add("visible");
}

function hideTooltip() {
  tooltip.classList.remove("visible");
}

function renderReferenceLayout() {
  referenceOverlay.innerHTML = "";
  referenceMapLabels.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-hotspot";
    button.textContent = item.code;
    button.dataset.name = item.name;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.setAttribute("aria-label", `View details for ${item.name}`);
    button.title = item.name;
    button.addEventListener("click", () => selectState(item.name));
    button.addEventListener("mousemove", (event) => showTooltip(event, item.name));
    button.addEventListener("mouseleave", hideTooltip);
    referenceOverlay.appendChild(button);
  });
  loading.classList.add("hidden");
}

function createSvgEl(tag, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function abbreviation(name) {
  const normalized = normalizeName(name);
  if (normalized === "Dadra and Nagar Haveli and Daman and Diu") return "DD";
  return normalized.split(/\s+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase();
}

function addMarker(name, lon, lat, label, bounds, width, height, variant = "") {
  const [x, y] = project(lon, lat, bounds, width, height);
  const marker = createSvgEl("g", {
    class: `state-marker ${variant}`.trim(),
    tabindex: "0",
    role: "button",
    "aria-label": `Show ${normalizeName(name)} information`,
    "data-name": normalizeName(name),
    transform: `translate(${x.toFixed(2)} ${y.toFixed(2)})`
  });
  marker.appendChild(createSvgEl("circle", { r: variant === "island" ? 5.2 : 4.5 }));

  const text = createSvgEl("text", {
    y: -8,
    class: "marker-label"
  });
  text.textContent = label || abbreviation(name);
  marker.appendChild(text);

  marker.addEventListener("click", () => selectState(name));
  marker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectState(name);
    }
  });
  marker.addEventListener("mousemove", (event) => showTooltip(event, name));
  marker.addEventListener("mouseleave", hideTooltip);
  markerGroup.appendChild(marker);
}

function renderStateMarkers(bounds, width, height) {
  const namesWithShape = new Set();
  features.forEach((feature) => {
    const name = normalizeName(feature.properties.name);
    namesWithShape.add(name);
    const [lon, lat] = centroid(feature);
    addMarker(name, lon, lat, abbreviation(name), bounds, width, height);
  });

  Object.entries(customLocations).forEach(([name, locations]) => {
    if (namesWithShape.has(name) && name !== "Dadra and Nagar Haveli and Daman and Diu") return;
    locations.forEach((location) => {
      addMarker(name, location.lon, location.lat, location.label, bounds, width, height, "island");
    });
  });
}

function renderMap(collection) {
  features = collection.features.filter((feature) => feature.properties?.name);
  const width = 900;
  const height = 920;
  mapBounds = getBounds({ features });
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  mapGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const extrudeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const regionGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  markerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  labelGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

  features.forEach((feature) => {
    const pathData = geometryToPath(feature.geometry, mapBounds, width, height);
    const rawName = feature.properties.name;
    const name = normalizeName(rawName);

    const extrude = document.createElementNS("http://www.w3.org/2000/svg", "path");
    extrude.setAttribute("d", pathData);
    extrude.setAttribute("class", "state-extrude");
    extrudeGroup.appendChild(extrude);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("class", "state-region");
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", `View details for ${name}`);
    path.dataset.name = name;
    path.addEventListener("click", () => selectState(name));
    path.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectState(name);
      }
    });
    path.addEventListener("mousemove", (event) => showTooltip(event, name));
    path.addEventListener("mouseleave", hideTooltip);
    regionGroup.appendChild(path);
  });

  renderStateMarkers(mapBounds, width, height);

  mapGroup.append(extrudeGroup, regionGroup, markerGroup, labelGroup);
  svg.appendChild(mapGroup);
  updateTransform();
  loading.classList.add("hidden");
  if (selectedName) selectState(selectedName);
}

function renderStateDirectory() {
  stateButtons.innerHTML = getKnownStateNames()
    .map((name) => `<button class="state-pill" type="button" data-name="${name}" aria-label="Show ${name} information">${name}</button>`)
    .join("");

  stateButtons.querySelectorAll(".state-pill").forEach((button) => {
    button.addEventListener("click", () => selectState(button.dataset.name));
  });
}

function selectSearchMatch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  const match = getKnownStateNames().find((name) => name.toLowerCase().includes(query));
  if (match) selectState(match);
}

function applySearchAndFilter() {
  const query = searchInput.value.trim().toLowerCase();
  const filter = filterSelect.value;

  const shouldShow = (name) => {
    const profile = getProfile(name);
    const matchesSearch = !query || name.toLowerCase().includes(query);
    let matchesFilter = true;

    if (filter === "population") {
      matchesFilter = parseFloat(String(profile.population).replace(/[^\d.]/g, "")) >= 50;
    } else if (filter === "area") {
      matchesFilter = parseFloat(String(profile.areaKm2).replace(/[^\d.]/g, "")) >= 100000;
    } else if (filter === "language-hindi") {
      matchesFilter = profile.languages.some((language) => language.toLowerCase().includes("hindi"));
    }

    return matchesSearch && matchesFilter;
  };

  document.querySelectorAll(".state-region").forEach((path) => {
    const name = normalizeName(path.dataset.name);
    path.classList.toggle("dimmed", !shouldShow(name));
  });

  document.querySelectorAll(".map-hotspot").forEach((button) => {
    const name = normalizeName(button.dataset.name);
    button.classList.toggle("dimmed", !shouldShow(name));
  });

  document.querySelectorAll(".state-marker").forEach((marker) => {
    const name = normalizeName(marker.dataset.name);
    marker.classList.toggle("dimmed", !shouldShow(name));
  });

  document.querySelectorAll(".state-pill").forEach((button) => {
    const name = normalizeName(button.dataset.name);
    button.classList.toggle("dimmed", !shouldShow(name));
  });
}

async function loadMap() {
  try {
    const response = await fetch(MAP_URL);
    if (!response.ok) throw new Error("Map data request failed");
    const collection = await response.json();
    renderMap(collection);
  } catch (error) {
    loading.textContent = "Map shapes could not load, but you can still select a state from the Quick Select list below.";
    console.error(error);
  }
}

searchInput.addEventListener("input", applySearchAndFilter);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    selectSearchMatch();
  }
});
filterSelect.addEventListener("change", applySearchAndFilter);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});

zoomInBtn.addEventListener("click", () => {
  scale = Math.min(scale + 0.15, 2.2);
  updateTransform();
});

zoomOutBtn.addEventListener("click", () => {
  scale = Math.max(scale - 0.15, 0.75);
  updateTransform();
});

viewport.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".map-hotspot")) return;
  dragging = true;
  startPoint = { x: event.clientX - pan.x, y: event.clientY - pan.y };
  viewport.setPointerCapture(event.pointerId);
});

viewport.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  pan = { x: event.clientX - startPoint.x, y: event.clientY - startPoint.y };
  updateTransform();
});

viewport.addEventListener("pointerup", () => {
  dragging = false;
});

viewport.addEventListener("wheel", (event) => {
  event.preventDefault();
  scale = Math.min(2.2, Math.max(0.75, scale + (event.deltaY < 0 ? 0.08 : -0.08)));
  updateTransform();
}, { passive: false });

renderStateDirectory();
renderReferenceLayout();
