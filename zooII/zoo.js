// Incremental Zoo 0.45
// (version log: magicaweb.com/zoo/log.txt)

var IZ = {}

IZ.init = function() {

	// general
	IZ.Zoo = {
		money: 0,
		debt: 0,
		interestRate: 1.00002,
		interestCounter: 0,
		priceIncrement: 1.50,
		total: 0,
		maxTotal: 0,
		animals: [],
		animalsN: 0,
		sellPrice: 0.8,
		creditLimit: 50,
		brBoosts: 0,
		brBoostEffect: 0.90, //changes denominator, less is better
		bsBoosts: 0,
		bsBoostEffect: 1.10,
		drBoosts: 0,
		drBoostEffect: 1.10, //changes denominator, more is better
		enBoosts: 0,
		badges: [],
		time: 0,
		timeSecs: 10, //amount of time you can buy
		timeSecsIncrement: 1.1,
		timePrice: 10000,
		timePriceIncrement: 1.25,
		offerNext: 0, // how long until next offer
		offerGiveSpecies: 0,
		offerGiveNumber: 0,
		offerGetSpecies: 0,
		offerGetNumber: 0,
		offerActive: 0,
		offerAccepted: 0,
		speciesShown: 0,
		statsCounter: 0,
		resetBadges: 0,
		visitorsTotal: 0,
		visitorsBuy: 10,
		visitorsBuyCost: 100,
		visitorsTime: 60,
		visitorsTimeCost: 100,
		visitorsCounter: 0,
		visitorsLog: 0,
		fines: 0
	}
	
    // animals
	IZ.animals = [];
	IZ.animalsN = 0;
	IZ.Animal = function(args) {
		this.id = IZ.animalsN;
		this.name = args.name;
		this.plural = args.plural;
		this.image = args.image;
		this.quote = args.quote;
		this.bgc = args.bgc; // background color
		this.wait = args.wait;
		IZ.animals[IZ.animalsN] = this;
		IZ.animalsN++;
	}
	// species
	new IZ.Animal ({name: "Meerkat", plural: "meerkats", image:"0.jpg", bgc: "#ffc", wait: 0, quote:"\"Meerkat... it\'s what\'s for dinner!\" (Uncle Max - The Lion King)"});
	new IZ.Animal ({name: "Peacock", plural: "peacocks", image:"1.jpg", buyPrice: 30, bgc: "#72f1ff", wait: 0, quote:"\"Remember that the most beautiful things in the world are the most useless: peacocks and lilies, for instance.\" (John Ruskin)"});
	new IZ.Animal ({name: "Chameleon", plural: "chameleons", image:"2.jpg", buyPrice: 30, bgc: "#cfc", wait: 120, quote:"100 meerkats are needed to buy chameleons.<br>\"A divorce lawyer is a chameleon with a law book.\" (Marvin Mitchelson)"});
	new IZ.Animal ({name: "Beaver", plural: "beavers", image:"3.jpg", bgc: "#f6f3ca", wait: 480, quote:"200 peacocks are needed to buy beavers.<br>\"Beaver do better work than the Corps of Engineers.\" (Mike Todd)"});
	new IZ.Animal ({name: "Flamingo", plural: "flamingos", image:"4.jpg", bgc: "#ecc", wait: 900, quote:"300 chameleons are needed to buy flamingos.<br>\"The chief difficulty Alice found at first was in managing her flamingo\" (Lewis Carroll - Alice's Adventures in Wonderland)"});
	new IZ.Animal ({name: "Otter", plural: "otters", image:"5.jpg", bgc: "#ccdae2", wait: 1500, quote:"400 beavers are needed to buy otters.<br>\"Otters are natural experimenters.\" (Karen Pryor, Lads Before the Wind: Diary of a Dolphin Trainer)"});
	new IZ.Animal ({name: "Penguin", plural: "penguins", image:"6.jpg", bgc: "#dbdbdd", wait: 2300, quote:"500 flamingos are needed to buy penguins.<br>\"I've never been in love, but if a penguin can find a soul mate, I'm sure I can, too.\" (Rebekah Crane, Playing Nice)"});
	new IZ.Animal ({name: "Snake", plural: "snakes", image:"7.jpg", bgc: "#ffe5b3", wait: 3600, quote:"600 otters are needed to buy snakes.<br>\"Like Indiana Jones, I don\'t like snakes - though that might lead some to ask why I'm in politics.\" (Theresa May)"});
	new IZ.Animal ({name: "Turtle", plural: "turtles", image:"8.jpg", bgc: "#eeda91", wait: 5000, quote:"700 penguins are needed to buy turtles.<br>\"And the turtles, of course...all the turtles are free, as turtles and, maybe, all creatures should be.\" ( Dr. Seuss, Yertle the Turtle and Other Stories)"});
	new IZ.Animal ({name: "Tapir", plural: "tapirs", image:"9.jpg", bgc: "#d2d7c0", wait: 6500, quote:"800 snakes are needed to buy tapirs.<br>\"When all of the animals heard that Mrs. Tapir was going extinct, they decided to pay her a visit and see if they could offer her some advice.\" (Ze Frank, True Facts About the Tapir)"});
	new IZ.Animal ({name: "Crocodile", plural: "crocodiles", image:"10.jpg", bgc: "#b5f4ea", wait: 8400, quote:"900 turtles are needed to buy crocodiles.<br>\"An appeaser is one who feeds a crocodile, hoping it will eat him last.\" (Winston Churchill)"});
	new IZ.Animal ({name: "Monkey", plural: "monkeys", image:"11.jpg", bgc: "#e5ccb8", wait: 11000, quote:"1,000 tapirs are needed to buy monkeys.<br>\"And out of a desire essentially to imitate what I was reading, I began to write, like a clever monkey.\" (Russell Banks)"});
	new IZ.Animal ({name: "Seal", plural: "seals", image:"12.jpg", bgc: "#fcefc2", wait: 14000, quote:"1,100 crocodiles are needed to buy seals.<br>\"Writers are a little below clowns and a little above trained seals.\" (John Steinbeck)"});
	new IZ.Animal ({name: "Kangaroo", plural: "kangaroos", image:"13.jpg", bgc: "#e1e2e4", wait: 18000, quote:"1,200 monkeys are are needed to buy kangaroos.<br>\"It's like trying to pin down a kangaroo on a trampoline.\" (Sid Waddell)"});
	new IZ.Animal ({name: "Anteater", plural: "anteaters", image:"14.jpg", bgc: "#ced3e9", wait: 24000, quote:"1,300 seals are are needed to buy anteaters.<br>\"We know that there are many animals on this continent not found in the Old World. These must have been carried from here to the ark, and then brought back afterwards.\" (Robert G. Ingersoll, Some Mistakes of Moses)"});
	new IZ.Animal ({name: "Eagle", plural: "eagles", image:"15.jpg", bgc: "#89c7de", wait: 33000, quote:"1,400 kangaroos are needed to buy eagles.<br>\"'Farewell,' they cried, 'Wherever you fare till your eyries receive you at the journey's end!' That is the polite thing to say among eagles.\" (J.R.R. Tolkien, The Annotated Hobbit: The Hobbit, or, There and back again)"});
	new IZ.Animal ({name: "Okapi", plural: "okapis", image:"16.jpg", bgc: "#ffe8c2", wait: 42000, quote:"1,500 anteaters are needed to buy okapis.<br>\"'Of all wild animals, the okapi is considered the shyest, the most subtle.\" (Time Magazine)"});
	new IZ.Animal ({name: "Ostrich", plural: "ostriches", image:"17.jpg", bgc: "#fcdcc7", wait: 60000, quote:"1,600 eagles are needed to buy ostriches.<br>\"Any fool can turn a blind eye but who knows what the ostrich sees in the sand.\" (Samuel Beckett, Murphy)"});
	new IZ.Animal ({name: "Antelope", plural: "antelopes", image:"18.jpg", bgc: "#f1e7e5", wait: 100000, quote:"1,700 okapis are needed to buy antelopes.<br>\"Set the gearshift for the high gear of your soul, you've got to run like an antelope out of control!\" (Trey Anastasio)"});
	new IZ.Animal ({name: "Zebra", plural: "zebras", image:"19.jpg", bgc: "#e5e3d6", wait: 200000, quote:"1,800 ostriches are needed to buy zebras.<br>\"When a zebra's in the zone, leave him alone.\" (Marty the Zebra, Madagascar)"});
	new IZ.Animal ({name: "Condor", plural: "condors", image:"20.jpg", bgc: "#ffc66a", wait: 600000, quote:"1,900 antelopes are needed to buy condors.<br>\"Give me a condor's quill! Give me Vesuvius crater for an inkstand!\" (Herman Melville)"});
	new IZ.Animal ({name: "Wolf", plural: "wolves", image:"21.jpg", bgc: "#cacecd", wait: 1000000, quote:"2,000 zebras are needed to buy wolves.<br>\"A gentleman is simply a patient wolf.\" (Lana Turner)"});
	new IZ.Animal ({name: "Jaguar", plural: "jaguars", image:"22.jpg", bgc: "#c8b9b2", wait: 2000000, quote:"2,100 condors are needed to buy jaguars.<br>\"The jaguar is the third-largest feline after the tiger and the lion, and the largest in the Western Hemisphere.\" (Wikipedia)"});
	new IZ.Animal ({name: "Bear", plural: "bears", image:"23.jpg", bgc: "#d5fb98", wait: 4000000, quote:"2,200 wolves are needed to buy bears.<br>\"Be cautious of bears at all times, even when being mauled by a tiger.\" (Craig Benzine)"});
	new IZ.Animal ({name: "Hippo", plural: "hippos", image:"24.jpg", bgc: "#e7d6dc", wait: 7000000, quote:"2,300 jaguars are needed to buy hippos.<br>\"There is an eagle in me that wants to soar, and there is a hippopotamus in me that wants to wallow in the mud.\" (Carl Sandburg)"});
	new IZ.Animal ({name: "Tiger", plural: "tigers", image:"25.jpg", bgc: "#e5c29c", wait: 10000000, quote:"2,400 bears are needed to buy tigers.<br>\"Do not blame God for having created the tiger, but thank him for not having given it wings\" (Indian proverb)"});
	new IZ.Animal ({name: "Giraffe", plural: "giraffes", image:"26.jpg", bgc: "#d9dde0", wait: 15000000, quote:"2,500 hippos are needed to buy giraffes.<br>\"God is really only another artist. He invented the giraffe, the elephant, and the cat. He has no real style. He just keeps on tryi ng other things.\" (Pablo Picasso)"});
	new IZ.Animal ({name: "Shark", plural: "sharks", image:"27.jpg", bgc: "#e3d1bd", wait: 20000000, quote:"2,600 tigers are needed to buy sharks.<br>\"If I swim in the ocean, I have a shark thought. Not a bad one, but just a little one.\" (Tea Leoni)"});
	new IZ.Animal ({name: "Rhino", plural: "rhinos", image:"28.jpg", bgc: "#ccb8a0", wait: 30000000, quote:"2,700 giraffes are needed to buy rhinos.<br>\"People can have rhinoceros skin, but there's a point when something's going to hurt you.\" (Janet Jackson)"});
	new IZ.Animal ({name: "Gorilla", plural: "gorillas", image:"29.jpg", bgc: "#bfbfbf", wait: 40000000, quote:"2,800 sharks are needed to buy gorillas.<br>\"It's a little like wrestling a gorilla. You don't quit when you're tired - you quit when the gorilla is tired.\" (Robert Strauss)"});
	new IZ.Animal ({name: "Lion", plural: "lions", image:"30.jpg", bgc: "#e2e0b9", wait: 72000000, quote:"2,900 rhinos are needed to buy lions.<br>\"Only in art will the lion lie down with the lamb, and the rose grow without thorn.\" (Martin Amis)"});
	new IZ.Animal ({name: "Elephant", plural: "elephants", image:"31.jpg", bgc: "#dbdbdb", wait: 120000000, quote:"3,000 gorillas are needed to buy elephants.<br>\"One morning I shot an elephant in my pajamas. How he got into my pajamas I'll never know.\" (Groucho Marx)"});
	new IZ.Animal ({name: "Panda", plural: "pandas", image:"32.jpg", bgc: "#fdf7d3", wait: 180000000, quote:"3,100 lions are needed to buy pandas.<br>\"So, you're telling me the zoo commissioned you to make a zombie panda in order to avoid a potential international incident.\" (Lish McBride, Hold Me Closer, Necromancer)"});
	new IZ.Animal ({name: "Dolphin", plural: "dolphins", image:"33.jpg", bgc: "#56cbf6", wait: 270000000, quote:"3,200 elephants are needed to buy dolphins.<br>\"No dolphin who inhabits one of those aquariums or one of those marine lands can be considered normal.\" (Jacques Yves Cousteau)"});
	new IZ.Animal ({name: "Orca", plural: "orcas", image:"34.jpg", bgc: "#cfd7d9", wait: 500000000, quote:"3,300 pandas are needed to buy orcas.<br>\"If you were to make little fishes talk, they would talk like whales.\" (Oliver Goldsmith)"});
	new IZ.Animal ({name: "Dummy", plural: "dummies", image:"35.jpg", bgc: "#cfd7d9", wait: 500000000000, quote:"This is it"});

	IZ.Zoo.Animal = function(args) {
		this.id = IZ.Zoo.animalsN;
		this.birthRate = args.birthRate;
		this.deathRate = args.deathRate;
		this.buyPrice = args.buyPrice;
		this.brPrice = args.buyPrice; // birth rate boost price - changes later
		this.brCount = 0
		this.drPrice = args.buyPrice; // death rate lowering price - changes later
		this.drCount = 0
		this.bsPrice =  args.buyPrice; // buy & sell boost price - changes later
		this.bsCount = 0
		this.enPrice = args.buyPrice * 10; // enclosure price - changes later
		this.enCount = 0
		this.own = 0;
		this.maxOwn = 0;
		this.bought = 0;
		this.born = 0;
		this.dead = 0;
		this.sold = 0;
		this.maxPop = 100;
		this.maxPopBought = 0;
		IZ.Zoo.animals[IZ.Zoo.animalsN] = this;
		IZ.Zoo.animalsN++;
	}	
	// species
	new IZ.Zoo.Animal ({birthRate:   200, deathRate:   600, buyPrice:                  10});
	new IZ.Zoo.Animal ({birthRate:   300, deathRate:   650, buyPrice:                  30});
	new IZ.Zoo.Animal ({birthRate:   400, deathRate:   700, buyPrice:                  90});
	new IZ.Zoo.Animal ({birthRate:   540, deathRate:   750, buyPrice:                 250});
	new IZ.Zoo.Animal ({birthRate:   680, deathRate:   800, buyPrice:                 750});
	new IZ.Zoo.Animal ({birthRate:   820, deathRate:   900, buyPrice:                2000});
	new IZ.Zoo.Animal ({birthRate:  1000, deathRate:  1000, buyPrice:                6000});
	new IZ.Zoo.Animal ({birthRate:  1180, deathRate:  1100, buyPrice:               18000});
	new IZ.Zoo.Animal ({birthRate:  1360, deathRate:  1200, buyPrice:               50000});
	new IZ.Zoo.Animal ({birthRate:  1580, deathRate:  1300, buyPrice:              150000});
	new IZ.Zoo.Animal ({birthRate:  1800, deathRate:  1500, buyPrice:              450000});
	new IZ.Zoo.Animal ({birthRate:  2050, deathRate:  1700, buyPrice:             1300000});
	new IZ.Zoo.Animal ({birthRate:  2300, deathRate:  1900, buyPrice:             4000000});
	new IZ.Zoo.Animal ({birthRate:  2600, deathRate:  2100, buyPrice:            12000000});
	new IZ.Zoo.Animal ({birthRate:  3000, deathRate:  2400, buyPrice:            40000000});
	new IZ.Zoo.Animal ({birthRate:  3500, deathRate:  2600, buyPrice:           120000000});
	new IZ.Zoo.Animal ({birthRate:  4000, deathRate:  2800, buyPrice:           400000000});
	new IZ.Zoo.Animal ({birthRate:  4500, deathRate:  3000, buyPrice:          1500000000});
	new IZ.Zoo.Animal ({birthRate:  5000, deathRate:  3300, buyPrice:          5000000000});
	new IZ.Zoo.Animal ({birthRate:  5600, deathRate:  3600, buyPrice:         15000000000});
	new IZ.Zoo.Animal ({birthRate:  6200, deathRate:  3900, buyPrice:         50000000000});
	new IZ.Zoo.Animal ({birthRate:  7000, deathRate:  4200, buyPrice:        200000000000});
	new IZ.Zoo.Animal ({birthRate:  8000, deathRate:  4600, buyPrice:        600000000000});
	new IZ.Zoo.Animal ({birthRate:  9200, deathRate:  5000, buyPrice:       2000000000000});
	new IZ.Zoo.Animal ({birthRate: 10500, deathRate:  5500, buyPrice:       6000000000000});
	new IZ.Zoo.Animal ({birthRate: 12000, deathRate:  6000, buyPrice:      20000000000000});
	new IZ.Zoo.Animal ({birthRate: 14000, deathRate:  6500, buyPrice:      75000000000000});
	new IZ.Zoo.Animal ({birthRate: 16000, deathRate:  7000, buyPrice:     300000000000000});
	new IZ.Zoo.Animal ({birthRate: 18500, deathRate:  7500, buyPrice:    1200000000000000});
	new IZ.Zoo.Animal ({birthRate: 21000, deathRate:  8000, buyPrice:    5000000000000000});	
	new IZ.Zoo.Animal ({birthRate: 24000, deathRate:  8500, buyPrice:   20000000000000000});	
	new IZ.Zoo.Animal ({birthRate: 27000, deathRate:  9000, buyPrice:   80000000000000000});	
	new IZ.Zoo.Animal ({birthRate: 31000, deathRate:  9500, buyPrice:  300000000000000000});	
	new IZ.Zoo.Animal ({birthRate: 35000, deathRate: 10000, buyPrice: 1200000000000000000});	
	new IZ.Zoo.Animal ({birthRate: 40000, deathRate: 10500, buyPrice: 5000000000000000000});	

	new IZ.Zoo.Animal ({birthRate: 200000, deathRate: 12000, buyPrice: 5000000000000000000});
}

// prettify numbers before display
IZ.numToString = function(number) {
	number = number.toFixed(2);
	number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return number;
}

// create zoo + boosts
IZ.loadZoo = function () {
	var id;
	var slot;
	var name;
	var own;
	var birthRate;
	var image;
	var buyPrice;
	var sellPrice;
	var newDiv;
	var zoo = '<div id="animalsTitle" onclick="IZ.showAnimals()"><h2>Animals (0)</h2></div><div id="badgesTitle" onclick="IZ.showBadges()"><h2>Achievements (0)</h2></div><div id="animals">';
	for (var i=0; i<IZ.Zoo.animals.length; i++) {

		// build animal div
		id = IZ.Zoo.animals[i].id;
		slot = "animal" + id;
		name = IZ.animals[i].name;
		own = IZ.Zoo.animals[i].own;
		image = IZ.animals[i].image;
		buyPrice = IZ.Zoo.animals[i].buyPrice;
		sellPrice = buyPrice * IZ.Zoo.sellPrice;
		buyPrice = IZ.numToString(buyPrice);
		sellPrice = IZ.numToString(sellPrice);
		bgc = IZ.animals[i].bgc;
		quote = IZ.animals[i].quote;
		quote = 'Bought: ' + IZ.Zoo.animals[i].bought + '<br>Sold: ' + IZ.Zoo.animals[i].sold + '<br>Born: ' + IZ.Zoo.animals[i].born + '<br>' + quote;
		newDiv = '<div id="' + slot + '" class="animal" style="background-color:' + bgc + '">' +
		'<a class="tooltip2" href="#">' + '<img class="image" src="' + image + '" />' + 
		'<span id="tt' + id + '"class="tt">' + quote + '</span></a>' +
		'<h1 class="name">' + name + '</h1>' +
		'<p class="stats">Birth Rate: <span id="birthRate' + id + '"> -</span><br>Death Rate: <span id="deathRate' + id + '"> -</span></p>' +
		'<h1 id="own' + id + '" class="own">' + own + '</h1>' +
		'<p class="commerce"><span id="buy' + id + '" class="buy" onclick="IZ.buy(this, 1)">Buy 1: $' + buyPrice + '</span><br>' +
		'<span id="buy10' + id + '" class="sell" onclick="IZ.buy(this, 10)">| Buy 10 | </span>' +
		'<span id="buy100' + id + '" class="sell" onclick="IZ.buy(this, 100)">Buy 100 | </span>' +
		'<span id="buy1000' + id + '" class="sell" onclick="IZ.buy(this, 1000)">Buy 1,000 | </span>' +
		'<span id="buy10000' + id + '" class="sell" onclick="IZ.buy(this, 10000)">Buy 10,000 |</span>' +
		'<br><span id="sell' + id + '" class="sell" onclick="IZ.sell(this, 1)">Sell 1: $' + sellPrice +'</span><br>' + 
		'<span id="sell10' + id + '" class="sell" onclick="IZ.sell(this, 10)">| Sell 10 | </span>' +
		'<span id="sell100' + id + '" class="sell" onclick="IZ.sell(this, 100)">Sell 100 | </span>' +
		'<span id="sell1000' + id + '" class="sell" onclick="IZ.sell(this, 1000)">Sell 1,000 | </span>' +
		'<span id="sell10000' + id + '" class="sell" onclick="IZ.sell(this, 10000)">Sell 10,000 | </span>' +
		'</p></div>';
		zoo = zoo + newDiv;

		// build animal's boosts divs
		slot = "br" + id;
		buyPrice = IZ.numToString(IZ.Zoo.animals[i].brPrice)
		newDiv = '<a id="' + slot + '" class="boosts br" style="background-color:' + bgc + '"onclick="IZ.buyBRBoost(this)">Get a Higher Birth Rate (0):<br>$' + buyPrice + '</a>';
		zoo = zoo + newDiv;
		slot = "dr" + id;
		buyPrice = IZ.numToString(IZ.Zoo.animals[i].drPrice);
		newDiv = '<a id="' + slot + '" class="boosts dr" style="background-color:' + bgc + '"onclick="IZ.buyDRBoost(this)">Lower the Death Rate: (0)<br>$' + buyPrice + '</a>';
		zoo = zoo + newDiv;
		slot = "bs" + id;
		buyPrice = IZ.numToString(IZ.Zoo.animals[i].bsPrice);
		newDiv = '<a id="' + slot + '" class="boosts bs" style="background-color:' + bgc + '"  onclick="IZ.buyBSBoost(this)">Get Higher Prices (0):<br>$' + buyPrice + '</a>';
		zoo = zoo + newDiv;
		slot = "en" + id;
		buyPrice = IZ.numToString(IZ.Zoo.animals[i].enPrice);
		newDiv = '<a id="' + slot + '" class="boosts en" style="background-color:' + bgc + '"onclick="IZ.buyENBoost(this)">Get a Bigger Enclosure: (' + IZ.Zoo.animals[id].enCount + ')<br>$' + buyPrice + '</a>';
		zoo = zoo + newDiv;
	}
	zoo = zoo + '</div>' // close div id="animals"
	zoo = zoo + '<div id="badgesContainer"></div>' 

	// total + next + buy time
	newDiv = '<div class="buyTime"><div id="total"></div><div id="next"></div><div id="buyTime" onmousedown="IZ.buyTime()"><h3>Reduce the wait by 10 seconds for $1,000</h3></div></div>';
	zoo = zoo + newDiv;
	
	// visitors
	newDiv = '<div class="buytime" id="visitors">' + 
		'<div id="visitorsStatus"><h2>Your zoo gets ' + IZ.Zoo.visitorsTotal + ' visitors every ' + IZ.Zoo.visitorsTime + ' seconds</h2></div>' +
		'<div id="visitorsHelp"><h3>(Each visitor pays $1 for each species in your zoo)</h3></div>' +
		'<div id="visitorsBuy" onclick="IZ.buyVisitors()"><h3>Get ' + IZ.Zoo.visitorsBuy + ' more visitors for $' + IZ.Zoo.visitorsBuyCost + '</h3></div>' +
		'<div id="visitorsTimeBuy" onclick="IZ.buyVisitorsTime()"><h3>Get visitors more frequently for $' + IZ.Zoo.visitorsTimeCost + '</h3></div>' +
	'</div>'
	zoo = zoo + newDiv;

	// photo credits
	zoo = zoo + '<br><div id="photoCredits"><strong><a href="mailto:e.a.gimenez@gmail.com">Contact the author.</a> <a href="http://www.reddit.com/r/IncrementalZoo/">Discuss in Reddit.</a></strong><br>Except were noted, all photos published by their authors under a <strong><a href="http://creativecommons.org/licenses/by/2.0/">Creative Commons "by" license</a></strong>.<br>See code (Ctrl + U) for detailed credits. Title image by Sean Freeman - <strong><a href="mailto:right.s.f@gmail.com">right.s.f@gmail.com</a></strong></div>'

	document.getElementById("animalsContainer").innerHTML = zoo;
}

// achievements (badges)
IZ.loadBadges = function () {
	document.getElementById("badgesContainer").innerHTML = 'Hello world';
	var board = "";
	var image;
	for (var i = 0; i < IZ.Zoo.animals.length; i++) {

	// for individuals of each species
		board = board + '<div class="badges" id="speciesAmount' + i + '1"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You got 1 ' + IZ.animals[i].name + ' in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesAmount' + i + '100"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You got 100 ' + IZ.animals[i].plural + ' in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesAmount' + i + '1000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You got 1,000 ' + IZ.animals[i].plural + ' in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesAmount' + i + '10000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You got 10,000 ' + IZ.animals[i].plural + ' in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesAmount' + i + '100000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You got 100,000 ' + IZ.animals[i].plural + ' in your Zoo</span></a></div>'

	// for born inidividuals of each species
		board = board + '<div class="badges" id="speciesBorn' + i + '1"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">A ' + IZ.animals[i].name + ' was born in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBorn' + i + '100"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">100 ' + IZ.animals[i].plural + ' were born in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBorn' + i + '1000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">1,000 ' + IZ.animals[i].plural + ' were born in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBorn' + i + '10000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">10,000 ' + IZ.animals[i].plural + ' were born in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBorn' + i + '100000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">100,000 ' + IZ.animals[i].plural + ' were born in your Zoo</span></a></div>'

	// for dead inidividuals of each species
		board = board + '<div class="badges" id="speciesDead' + i + '1"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">A ' + IZ.animals[i].name + ' died in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesDead' + i + '100"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">100 ' + IZ.animals[i].plural + ' died in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesDead' + i + '1000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">1,000 ' + IZ.animals[i].plural + ' died in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesDead' + i + '10000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">10,000 ' + IZ.animals[i].plural + ' died in your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesDead' + i + '100000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">100,000 ' + IZ.animals[i].plural + ' died in your Zoo</span></a></div>'

	// for bought inidividuals of each species
		board = board + '<div class="badges" id="speciesBought' + i + '1"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought a ' + IZ.animals[i].name + ' for your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBought' + i + '100"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 100 ' + IZ.animals[i].plural + ' for your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBought' + i + '1000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 1,000 ' + IZ.animals[i].plural + ' for your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBought' + i + '10000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 10,000 ' + IZ.animals[i].plural + ' for your Zoo</span></a></div>'
		board = board + '<div class="badges" id="speciesBought' + i + '100000"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 100,000 ' + IZ.animals[i].plural + ' for your Zoo</span></a></div>'

	// for sold individuals of each species
		board = board + '<div class="badges flipped" id="speciesSold' + i + '1"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You sold 1 ' + IZ.animals[i].name + ' from your Zoo</span></a></div>'
		board = board + '<div class="badges flipped" id="speciesSold' + i + '100"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You sold 100 ' + IZ.animals[i].plural + ' from your Zoo</span></a></div>'
		board = board + '<div class="badges flipped" id="speciesSold' + i + '1000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You sold 1,000 ' + IZ.animals[i].plural + ' from your Zoo</span></a></div>'
		board = board + '<div class="badges flipped" id="speciesSold' + i + '10000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You sold 10,000 ' + IZ.animals[i].plural + ' from your Zoo</span></a></div>'
		board = board + '<div class="badges flipped" id="speciesSold' + i + '100000"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You sold 100,000 ' + IZ.animals[i].plural + ' from your Zoo</span></a></div>'
		
	// for boosts of each species
		board = board + '<div class="badges" id="speciesBR' + i + '10"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 10 birth-rate boosts for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesBR' + i + '20"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You maxed out the birth-rate of your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesDR' + i + '10"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You bought 10 death-rate reductions for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesDR' + i + '20"><a class="tooltip" href="#"><img src="' + i + 'f.jpg" height=48 width=48><span class="tt">You minimized the death-rate of your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesBS' + i + '10"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You bought 10 price boosts for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesBS' + i + '20"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">You maxed out the price of your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesEN' + i + '10"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">10 times you bought bigger enclosures for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesEN' + i + '20"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">20 times you bought bigger enclosures for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesEN' + i + '50"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">50 times you bought bigger enclosures for your ' + IZ.animals[i].plural + '</span></a></div>'
		board = board + '<div class="badges" id="speciesEN' + i + '100"><a class="tooltip" href="#"><img src="' + i + '.jpg" height=48 width=48><span class="tt">100 times you bought bigger enclosures for your ' + IZ.animals[i].plural + '</span></a></div>'
	}

	// for total number of animals
	board = board + '<div class="badges" id="totalAmount1"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 1 animal for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount100"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 100 animals for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount1000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 1,000 animals for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount10000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 10,000 animals for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount100000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 100,000 animals for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount1000000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 1,000,000 animals for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="totalAmount10000000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You obtained 10,000,000 animals for your Zoo</span></a></div>'

	// for number of species found
	board = board + '<div class="badges" id="speciesFound10"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You found ten different species for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="speciesFound20"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You found twenty different species for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="speciesFound30"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You found thirty different species for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="speciesFound35"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You found thirty five species species for your Zoo. You have them all!</span></a></div>'

	// for number of birthrate boosts bought
	board = board + '<div class="badges" id="brBoosts1"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought the first birth rate boost for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="brBoosts10"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 10 birth rate boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="brBoosts100"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 100 birth rate boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="brBoosts200"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 200 birth rate boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="brBoosts500"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 500 birth rate boosts for your Zoo</span></a></div>'

	// for number of deathrate mitigators bought
	board = board + '<div class="badges" id="drBoosts1"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought the first death rate mitigator for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="drBoosts10"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 10 death rate mitigators for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="drBoosts100"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 100 death rate mitigators for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="drBoosts200"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 200 death rate mitigators for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="drBoosts500"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 500 death rate mitigators for your Zoo</span></a></div>'

	// for number of price boosts bought
	board = board + '<div class="badges" id="bsBoosts1"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought the first price boost for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="bsBoosts10"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 10 price boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="bsBoosts100"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 100 price boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="bsBoosts200"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 200 price boosts for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="bsBoosts500"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 500 price boosts for your Zoo</span></a></div>'

	// for number of enclosure boosts bought
	board = board + '<div class="badges" id="enBoosts1"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought the first enclosure extension for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="enBoosts100"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 100 enclosure extensions for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="enBoosts200"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 200 enclosure extensions for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="enBoosts500"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 500 enclosure extensions for your Zoo</span></a></div>'
	board = board + '<div class="badges" id="enBoosts1000"><a class="tooltip" href="#"><img src="egg.jpg" height=48 width=48><span class="tt">You bought 1000 enclosure extensions for your Zoo</span></a></div>'

	// for time played
	board = board + '<div class="badges" id="time100"><a class="tooltip" href="#"><img src="clock.jpg" height=48 width=48><span class="tt">Time played: 100 seconds</span></a></div>'
	board = board + '<div class="badges" id="time1000"><a class="tooltip" href="#"><img src="clock.jpg" height=48 width=48><span class="tt">Time played: 1,000 seconds</span></a></div>'
	board = board + '<div class="badges" id="time10000"><a class="tooltip" href="#"><img src="clock.jpg" height=48 width=48><span class="tt">Time played: 10,000 seconds</span></a></div>'
	board = board + '<div class="badges" id="time100000"><a class="tooltip" href="#"><img src="clock.jpg" height=48 width=48><span class="tt">Time played: 100,000 seconds</span></a></div>'
	board = board + '<div class="badges" id="time1000000"><a class="tooltip" href="#"><img src="clock.jpg" height=48 width=48><span class="tt">Time played: 1,000,000 seconds</span></a></div>'

	document.getElementById("badgesContainer").innerHTML = board;
}

// calculate and show badges
IZ.showBadges = function() {
	document.getElementById("animals").style.display = "none";
	document.getElementById("badgesContainer").style.display = "inherit";
	document.getElementById("animalsTitle").style.backgroundColor = "#ccc";
	document.getElementById("badgesTitle").style.backgroundColor = "#fff";
	document.getElementById("animalsTitle").style.borderBottom = "1px solid #999";
	document.getElementById("badgesTitle").style.borderBottom = "0";
	IZ.calculateBadges();
}
IZ.calculateBadges = function() {
	IZ.Zoo.badges.length = 0;
	var amount = [1, 100, 1000, 10000, 100000];
	var speciesBoosts = [10, 20]
	var speciesEN = [10, 20, 50, 100]
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		for (var j=0; j<amount.length; j++) {
			if (IZ.Zoo.animals[i].maxOwn >= amount[j]) {
				var id = "speciesAmount" + i + amount[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].born >= amount[j]) {
				var id = "speciesBorn" + i + amount[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].dead >= amount[j]) {
				var id = "speciesDead" + i + amount[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].bought >= amount[j]) {
				var id = "speciesBought" + i + amount[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].sold >= amount[j]) {
				var id = "speciesSold" + i + amount[j];
				IZ.addBadge(id);
			}
		}
		for (var j=0; j<speciesBoosts.length; j++) {
			if (IZ.Zoo.animals[i].brCount >= speciesBoosts[j]) {
				var id = "speciesBR" + i + speciesBoosts[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].drCount >= speciesBoosts[j]) {
				var id = "speciesDR" + i + speciesBoosts[j];
				IZ.addBadge(id);
			}
			if (IZ.Zoo.animals[i].bsCount >= speciesBoosts[j]) {
				var id = "speciesBS" + i + speciesBoosts[j];
				IZ.addBadge(id);
			}
		}
		for (var j=0; j<speciesEN.length; j++) {
			if (IZ.Zoo.animals[i].enCount >= speciesEN[j]) {
				var id = "speciesEN" + i + speciesEN[j];
				IZ.addBadge(id);
			}
		}
	}
	var totalAmount = [1, 100, 1000, 10000, 100000, 1000000, 10000000]
	for (var j=0; j<totalAmount.length; j++) {
		if (IZ.Zoo.maxTotal >= totalAmount[j]) {
			var id = "totalAmount" + totalAmount[j];
			IZ.addBadge(id);
		}
	}
	var speciesFound = [10, 20, 30, 35]
	for (var j=0; j<speciesFound.length; j++) {
		if (IZ.Zoo.speciesShown >= speciesFound[j]) {
			var id = "speciesFound" + speciesFound[j];
			IZ.addBadge(id);
		}
	}
	var boosts = [1, 10, 100, 200, 500]
	for (var j=0; j<boosts.length; j++) {
		if (IZ.Zoo.brBoosts >= boosts[j]) {
			var id = "brBoosts" + boosts[j];
			IZ.addBadge(id);
		}
		if (IZ.Zoo.drBoosts >= boosts[j]) {
			var id = "drBoosts" + boosts[j];
			IZ.addBadge(id);
		}
		if (IZ.Zoo.bsBoosts >= boosts[j]) {
			var id = "bsBoosts" + boosts[j];
			IZ.addBadge(id);
		}
	}
	var enBoosts = [1, 100, 200, 500, 1000]
	for (var j=0; j<enBoosts.length; j++) {
		if (IZ.Zoo.enBoosts >= enBoosts[j]) {
			var id = "enBoosts" + enBoosts[j];
			IZ.addBadge(id);
		}
	}
	var time = [100, 1000, 10000, 100000, 1000000]
	for (var j=0; j<time.length; j++) {
		if (IZ.Zoo.time >= time[j]) {
			var id = "time" + time[j];
			IZ.addBadge(id);
		}
	}
}

IZ.addBadge = function(id) {
	IZ.Zoo.badges.push(id);
	document.getElementById(id).style.display="inline-block";
}

// show animals tab
IZ.showAnimals = function() {
	document.getElementById("badgesContainer").style.display = "none";
	document.getElementById("animals").style.display = "";
	document.getElementById("badgesTitle").style.backgroundColor = "#ccc";
	document.getElementById("animalsTitle").style.backgroundColor = "#fff";
	document.getElementById("badgesTitle").style.borderBottom = "1px solid #999";
	document.getElementById("animalsTitle").style.borderBottom = "0";
}


// buy time
IZ.buyTime = function() {
	if (IZ.Zoo.money >= IZ.Zoo.timePrice) {
		IZ.Zoo.money -= IZ.Zoo.timePrice;
		IZ.updateMoney();
		IZ.Zoo.time += Math.round(IZ.Zoo.timeSecs);
		IZ.Zoo.timeSecs = Math.round(IZ.Zoo.timeSecs * 1.1);
		var time = IZ.Zoo.timeSecs;
		time = time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		IZ.Zoo.timePrice = Math.round(IZ.Zoo.timePrice * 1.2);
		var price = IZ.numToString(IZ.Zoo.timePrice);
		document.getElementById("buyTime").innerHTML = '<div id="buyTime" onclick="IZ.buyTime()"><h3>Reduce the wait by ' + time + ' seconds for $' + price + '</h3></div>'
	}
} 

// visitors
IZ.buyVisitors = function() {
	if (IZ.Zoo.money < IZ.Zoo.visitorsBuyCost) return;
	IZ.Zoo.money -= IZ.Zoo.visitorsBuyCost;
	IZ.updateMoney();
	IZ.Zoo.visitorsTotal += Math.round(IZ.Zoo.visitorsBuy);
	IZ.Zoo.visitorsBuy = Math.round(IZ.Zoo.visitorsBuy * 1.1);
	IZ.Zoo.visitorsBuyCost = Math.round(IZ.Zoo.visitorsBuyCost * 1.25);
	var visitorsTotal = IZ.Zoo.visitorsTotal;
	visitorsTotal = visitorsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("visitorsStatus").innerHTML = '<h2>Your zoo gets ' + visitorsTotal + ' visitors every ' + IZ.Zoo.visitorsTime + ' seconds</h2>';
	var visitorsBuy = IZ.Zoo.visitorsBuy;
	visitorsBuy = visitorsBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var visitorsBuyCost = IZ.numToString(IZ.Zoo.visitorsBuyCost);
	document.getElementById("visitorsBuy").innerHTML = '<h3>Get ' + visitorsBuy + ' more visitors for $' + visitorsBuyCost + '</h2>';
}
IZ.buyVisitorsTime = function() {
	if (IZ.Zoo.money < IZ.Zoo.visitorsTimeCost) return;
	if (IZ.Zoo.visitorsTime === 1) return;
	IZ.Zoo.money -= IZ.Zoo.visitorsTimeCost;
	IZ.updateMoney();
	IZ.Zoo.visitorsTime--
	IZ.Zoo.visitorsTimeCost = Math.round(IZ.Zoo.visitorsTimeCost * 1.25);
	var visitorsTotal = IZ.Zoo.visitorsTotal;
	visitorsTotal = visitorsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("visitorsStatus").innerHTML = '<h2>Your zoo gets ' + visitorsTotal + ' visitors every ' + IZ.Zoo.visitorsTime + ' seconds</h2>';
	var visitorsTimeCost = IZ.numToString(IZ.Zoo.visitorsTimeCost);
	document.getElementById("visitorsTimeBuy").innerHTML = '<h3>Get visitors more frequently for $' + visitorsTimeCost + '</h2>';
	if (IZ.Zoo.visitorsTime === 1) {
		document.getElementById("visitorsTimeBuy").style.diplay = "none";
	}
}
	
// money and debt
IZ.moneyClick = function(amount) {
	if (amount != "max") {
		if (IZ.Zoo.debt > IZ.Zoo.creditLimit - amount) {
			return;
		}
	} else {
		if (IZ.Zoo.debt > IZ.Zoo.creditLimit) return;
		amount = IZ.Zoo.creditLimit - IZ.Zoo.debt;
	}
	IZ.Zoo.money += amount;
	IZ.Zoo.debt +=amount;
	var howMuch = IZ.numToString(amount);
//	var log = "* You borrowed $" + howMuch;
//	IZ.addToLog(log);
	IZ.updateMoney();
}

IZ.debtClick = function(amount) {
	if (amount === "max") {
		amount = IZ.Zoo.debt;
	}
	var devolution = IZ.Zoo.debt;
	if (devolution > amount) {
		devolution = amount;
	}
	if (IZ.Zoo.money >= devolution) {
		IZ.Zoo.debt -= devolution;
		IZ.Zoo.money -= devolution;
		var howMuch = IZ.numToString(devolution);
//		var log = "* You paid $" + howMuch;
	} else {
		IZ.Zoo.debt -= IZ.Zoo.money;
		var howMuch = IZ.numToString(IZ.Zoo.money);
//		var log = "* You paid $" + howMuch;
		IZ.Zoo.money = 0;
	}
//	IZ.addToLog(log);
	IZ.updateMoney();
}	

IZ.updateMoney = function() {
	var have = "$" + IZ.numToString(IZ.Zoo.money);
	document.getElementById("have").innerHTML = have;
	var owe = "$" + IZ.numToString(IZ.Zoo.debt);
	document.getElementById("owe").innerHTML = owe;
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.animals[i].own < 2) {
			var fiveAnimals = IZ.Zoo.animals[i].buyPrice *  5;
			IZ.Zoo.creditLimit = fiveAnimals;
			var limit = IZ.numToString(IZ.Zoo.creditLimit);
			document.getElementById("limit").innerHTML = 'Credit Limit: ' + limit;
			break;
		}
	}
}

// update birth rate
IZ.updateBirthRate = function(id) {
	var idBR = "birthRate" + id;
	try {
		if (IZ.Zoo.animals[id].own < 2) {
			document.getElementById(idBR).innerHTML = ' -';
		} else {
			var denominator = IZ.Zoo.animals[id].birthRate + IZ.Zoo.animals[id].own;
			percent = IZ.Zoo.animals[id].own / denominator * 100;
			percent = percent.toFixed(2);
			denominator = denominator.toFixed();
			document.getElementById(idBR).innerHTML = percent + '%';
		}
	}
	catch(e) {
	}
}

// update death rate
IZ.updateDeathRate = function(id) {
	var idDR = "deathRate" + id;
	if (IZ.Zoo.animals[id].own === 0) {
		document.getElementById(idDR).innerHTML = ' -';
	} else {
		var denominator = IZ.Zoo.animals[id].deathRate + (IZ.Zoo.animals[id].own * 2);
		percent = IZ.Zoo.animals[id].own / denominator * 100;
		percent = percent.toFixed(2);
		denominator = denominator.toFixed();
		document.getElementById(idDR).innerHTML = percent + '%';
	}
}

//update tooltip
IZ.updateTooltip = function(id) {
	var maxPop = IZ.Zoo.animals[id].maxPop;
	var bought = IZ.Zoo.animals[id].bought;
	var sold = IZ.Zoo.animals[id].sold;
	var born = IZ.Zoo.animals[id].born;
	var dead = IZ.Zoo.animals[id].dead;
	var quote = IZ.animals[id].quote
	var tt = 'Max population: ' + maxPop + '<br>Bought: ' + bought + '<br>Sold: ' + sold + '<br>Born: ' + IZ.Zoo.animals[id].born + '<br>Dead: ' + dead + '<br>' + quote;
	document.getElementById("tt" + id).innerHTML = tt;
}

// update population (with max pop added)
IZ.updatePopulation = function(id) {
	var slot = 'own' + id;
	var pop = IZ.Zoo.animals[id].own;
	pop = pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var maxPop = IZ.Zoo.animals[id].maxPop;
	maxPop = maxPop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById(slot).innerHTML = pop + '<span style="font-size:12px"><br>/' + maxPop + '</span>';
}

// buy an animal
IZ.buy = function(slot, amount) {
	console.log("buy", slot, amount);
	if (IZ.Zoo.debt > IZ.Zoo.creditLimit.toFixed(2)) {
		alert("You can't buy animals.Your debt is too high!");
		return;
	}
	var clicked = slot.id;
	if (amount === 1) {
		var id = clicked.slice(3);
	}
	if (amount === 10) {
		var id = clicked.slice(5);
	}
	if (amount === 100) {
		var id = clicked.slice(6);
	}
	if (amount === 1000) {
		var id = clicked.slice(7);
	}
	if (amount === 10000) {
		var id = clicked.slice(8);
	}
	id = parseInt(id, 10);
	buyPrice = IZ.Zoo.animals[id].buyPrice * amount;
	if (buyPrice > IZ.Zoo.money) {
		return;
	}
	if (id > 1) {
		var minimum = (id-2)*100 + 100;
		if (IZ.Zoo.animals[id-2].own < minimum) {
			alert("You must have at least " + minimum + " " + IZ.animals[id-2].plural + " to buy " + IZ.animals[id].plural);
			return;
		}
	}
	var futureTotal = IZ.Zoo.animals[id].own + amount;
	if (futureTotal <= IZ.Zoo.animals[id].maxPop) {
		IZ.Zoo.money -= buyPrice;
		IZ.Zoo.animals[id].own += amount;
		IZ.Zoo.animals[id].bought +=amount;
		var newNumber = IZ.Zoo.animals[id].own
		newNumber = newNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		IZ.updatePopulation(id);
		IZ.updateMoney();
		IZ.updateBirthRate(id);
		IZ.updateDeathRate(id);
		IZ.Zoo.total +=amount;
		IZ.updateTooltip(id);
	}
}

// sell animals
IZ.sell = function(slot, amount) {
	var clicked = slot.id;
	if (amount === 1) {
		var id = clicked.slice(4);
	}
	if (amount === 10) {
		var id = clicked.slice(6);
	}
	if (amount === 100) {
		var id = clicked.slice(7);
	}
	if (amount === 1000) {
		var id = clicked.slice(8);
	}
	if (amount === 10000) {
		var id = clicked.slice(9);
	}
	id = parseInt(id, 10);
	if (IZ.Zoo.animals[id].own < amount) {
		return;
	}
	sellPrice = IZ.Zoo.animals[id].buyPrice * IZ.Zoo.sellPrice;
	IZ.Zoo.money = IZ.Zoo.money + sellPrice * amount;
	IZ.Zoo.animals[id].own -= amount;
	IZ.Zoo.total -=amount;
	IZ.Zoo.animals[id].sold += amount;
	IZ.updatePopulation(id);
	IZ.updateMoney();
	IZ.updateBirthRate(id)
	IZ.updateTooltip(id);
}	

// buy a BirthRate boost
IZ.buyBRBoost = function(slot) {
	var clicked = slot.id;
	var id = clicked.slice(2);
	id = parseInt(id, 10);
	price = IZ.Zoo.animals[id].brPrice;
	if (price > IZ.Zoo.money || IZ.Zoo.animals[id].brCount === 20) return;
	IZ.Zoo.money -= price;
	IZ.updateMoney();
	IZ.Zoo.animals[id].brCount++;
	if (IZ.Zoo.animals[id].brCount === 20) {
		document.getElementById(clicked).style.color = "#f00";
		var log = "* You maxed out the birth rate of " + IZ.animals[id].plural;
		IZ.addToLog(log)
	}
	IZ.Zoo.animals[id].brPrice *= IZ.Zoo.priceIncrement;
	var brPriceString = IZ.numToString(IZ.Zoo.animals[id].brPrice);
	IZ.Zoo.animals[id].birthRate *= IZ.Zoo.brBoostEffect;
	IZ.updateBirthRate(id);
	var	slotUpdate = 'Get a Higher Birth Rate: (' + IZ.Zoo.animals[id].brCount + ')<br>$' + brPriceString;
	document.getElementById(clicked).innerHTML = slotUpdate;
	IZ.Zoo.brBoosts++;
}

// buy a DeathRate boost
IZ.buyDRBoost = function(slot) {
	var clicked = slot.id;
	var id = clicked.slice(2);
	id = parseInt(id, 10);
	price = IZ.Zoo.animals[id].drPrice;
	if (price > IZ.Zoo.money || IZ.Zoo.animals[id].drCount === 20) return;
	IZ.Zoo.money -= price;
	IZ.updateMoney();
	IZ.Zoo.animals[id].drCount++;
	if (IZ.Zoo.animals[id].drCount === 20) {
		document.getElementById(clicked).style.color = "#f00";
		var log = "* You minimized the death rate of " + IZ.animals[id].plural;
		IZ.addToLog(log)
	}
	IZ.Zoo.animals[id].drPrice *= IZ.Zoo.priceIncrement;
	var drPriceString = IZ.numToString(IZ.Zoo.animals[id].drPrice);
	IZ.Zoo.animals[id].deathRate *= IZ.Zoo.drBoostEffect;
	IZ.updateDeathRate(id);
	var	slotUpdate = 'Lower the Death Rate: (' + IZ.Zoo.animals[id].drCount + ')<br>$' + drPriceString;
	document.getElementById(clicked).innerHTML = slotUpdate;
	IZ.Zoo.drBoosts++;
}

// buy an ENclosure boost
IZ.buyENBoost = function(slot) {
	var clicked = slot.id;
	var id = clicked.slice(2);
	id = parseInt(id, 10);
	price = IZ.Zoo.animals[id].enPrice;
	if (price > IZ.Zoo.money) {
		return;
	}
	IZ.Zoo.money -= price;
	IZ.Zoo.animals[id].maxPopBought += 100;
	IZ.updateMoney();
	IZ.Zoo.animals[id].enPrice += (IZ.Zoo.animals[id].maxPopBought * IZ.Zoo.animals[id].buyPrice / 10);
	var enPriceString = IZ.numToString(IZ.Zoo.animals[id].enPrice);
	IZ.Zoo.animals[id].maxPop += IZ.Zoo.animals[id].maxPopBought;
	IZ.Zoo.enBoosts++;
	IZ.Zoo.animals[id].enCount++;
	var	slotUpdate = 'Get a Bigger Enclosure: (' + IZ.Zoo.animals[id].enCount + ')<br>$' + enPriceString;
	document.getElementById(clicked).innerHTML = slotUpdate;
}

// buy a Buy-Sell price boost
IZ.buyBSBoost = function(slot) {
	var clicked = slot.id;
	var id = clicked.slice(2);
	id = parseInt(id, 10);
	price = IZ.Zoo.animals[id].bsPrice;
	if (price > IZ.Zoo.money || IZ.Zoo.animals[id].bsCount === 20) return;
	IZ.Zoo.money -= price;
	IZ.updateMoney();
	IZ.Zoo.animals[id].bsCount++;
	if (IZ.Zoo.animals[id].bsCount === 20) {
		document.getElementById(clicked).style.color = "#f00";
		var log = "* You maxed out prices for buying and selling " + IZ.animals[id].plural;
		IZ.addToLog(log)
	}
	IZ.Zoo.animals[id].bsPrice *= 1.5;
	var bsPriceString = IZ.numToString(IZ.Zoo.animals[id].bsPrice);
	var	slotUpdate = 'Get Higher Prices: (' + IZ.Zoo.animals[id].bsCount + ')<br>$' + bsPriceString;
	document.getElementById(clicked).innerHTML = slotUpdate;
	IZ.Zoo.animals[id].buyPrice *= IZ.Zoo.bsBoostEffect;
	var buyPriceString = IZ.numToString(IZ.Zoo.animals[id].buyPrice);
	var buyId = "buy" + id;
	document.getElementById(buyId).innerHTML = "Buy: $" + buyPriceString;
	var sellPrice = IZ.Zoo.animals[id].buyPrice * IZ.Zoo.sellPrice;
	var sellPriceString = IZ.numToString(sellPrice);
	var sellId = "sell" + id;
	document.getElementById(sellId).innerHTML = "Sell: $" + sellPriceString;
	IZ.Zoo.bsBoosts++;
}

// hide instructions that appear on top
IZ.hideWhat = function () {
	document.getElementById("what").style.display = "none";
	document.getElementById("animalsContainer").style.top = "180px";
}

// load saved game
IZ.loadGame = function(importText) {
	if (importText != "") {
		var saveData = JSON.parse(atob(importText));
	} else {
		if (!localStorage['IZIIGameSave']) return;
		var saveData = JSON.parse(atob(localStorage['IZIIGameSave']));
	}
	IZ.Zoo = saveData;
	
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.time >= IZ.animals[i].wait) {
			id = IZ.Zoo.animals[i].id;
			slot = "animal" + id;
			IZ.Zoo.speciesShown = i + 1;
			document.getElementById(slot).style.display = "inherit";
			slot = "br" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "dr" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "bs" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "en" + id;
			document.getElementById(slot).style.display = "inline-block";
			var log = "* <strong>You discovered " + IZ.animals[i].plural + "!</strong> " + IZ.animals[i].quote;
			IZ.addToLog(log);
		}
		var brPrice = IZ.Zoo.animals[i].brPrice
		brPrice = IZ.numToString(brPrice);
		var slot = "br" + i;
		var brCount = IZ.Zoo.animals[i].brCount;
		document.getElementById(slot).innerHTML = 'Get a Higher Birth Rate: (' + brCount + ')<br>$' + brPrice;
		var drPrice = IZ.Zoo.animals[i].drPrice
		drPrice = IZ.numToString(drPrice);
		var slot = "dr" + i;
		var drCount = IZ.Zoo.animals[i].drCount;
		document.getElementById(slot).innerHTML = 'Lower the Death Rate: (' + drCount + ')<br>$' + drPrice;
		var bsPrice = IZ.Zoo.animals[i].bsPrice
		bsPrice = IZ.numToString(bsPrice);
		var slot = "bs" + i;
		var bsCount = IZ.Zoo.animals[i].bsCount;
		document.getElementById(slot).innerHTML = 'Get Higher Prices: (' + bsCount + ')<br>$' + bsPrice;
		var enPrice = IZ.Zoo.animals[i].enPrice
		enPrice = IZ.numToString(enPrice);
		var slot = "en" + i;
		document.getElementById(slot).innerHTML = 'Get a Bigger Enclosure: (' + IZ.Zoo.animals[id].enCount + ')<br>$' + enPrice;
		var buyPrice = IZ.Zoo.animals[i].buyPrice;
		var sellPrice = buyPrice * IZ.Zoo.sellPrice;
		buyPrice = IZ.numToString(buyPrice);
		sellPrice = IZ.numToString(sellPrice);
		var slot = "buy" + i;
		document.getElementById(slot).innerHTML = 'Buy 1: $' + buyPrice;
		slot = "sell" + i;
		document.getElementById(slot).innerHTML = 'Sell 1: $' + sellPrice;
		document.getElementById("offerContainer").style.display = "none";
		IZ.updateBirthRate(i);
		IZ.updateDeathRate(i);
		IZ.updateTooltip(i);
	}
	for (var i=0; i<IZ.Zoo.badges.length; i++) {
		document.getElementById(IZ.Zoo.badges[i]).style.display = "inline-block";
	}
	IZ.Zoo.offerStatus = 0;
	IZ.Zoo.offerActive = 0;
	IZ.updateMoney();
	if (IZ.Zoo.speciesShown < 35) {
		var time = IZ.Zoo.timeSecs;
		time = time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var price = IZ.numToString(IZ.Zoo.timePrice);
		document.getElementById("buyTime").innerHTML = '<div id="buyTime" onclick="IZ.buyTime()"><h3>Reduce the wait by ' + time + ' seconds for $' + price + '</h3></div>'
		next = next.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById("next").innerHTML = '<h2>Next species in ' + next + ' seconds</h2>';
	} else {
		document.getElementById("next").innerHTML = '<h2>You discovered all the animals!</h2>';
		document.getElementById("buyTime").innerHTML = ''; 
	}
	var visitors = IZ.Zoo.visitorsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById("visitorsStatus").innerHTML = '<h2>Your zoo gets ' + IZ.Zoo.visitorsTotal + ' visitors every ' + IZ.Zoo.visitorsTime + ' seconds</h2>'
	var visitorsBuy = IZ.Zoo.visitorsBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var visitorsBuyCost = IZ.numToString(IZ.Zoo.visitorsBuyCost);
	document.getElementById("visitorsBuy").innerHTML = '<h3>Get ' + visitorsBuy + ' more visitors for $' + visitorsBuyCost + '</h3>'
	var visitorsTimeCost = IZ.numToString(IZ.Zoo.visitorsTimeCost);
	document.getElementById("visitorsTimeBuy").innerHTML = '<h3>Get visitors more frequently for $' + visitorsTimeCost + '</h3>'
		
	IZ.Zoo.interestCounter=8;
	IZ.updateMoney();
	document.getElementById("animalsTitle").innerHTML = "<h2>Animals (" + IZ.Zoo.total + ")</h2>";
	document.getElementById("badgesTitle").innerHTML = "<h2>Achievements (" + IZ.Zoo.badges.length + ")</h2>";
}

// export save
IZ.exportSave = function() {
	var exportText = localStorage['IZIIGameSave'];
	var exportDiv = '<textarea id="exportText" rows=12 cols=35 >' + exportText + '</textarea><div id="exportOk" onmousedown="IZ.exportClose()">Close</div>';
	document.getElementById("exportContainer").innerHTML = exportDiv;
	document.getElementById("exportContainer").style.display="inline";
}
IZ.exportClose = function() {
	document.getElementById("exportContainer").style.display="none";
}
// import save
IZ.importSave = function() {
	var exportDiv = '<textarea id="exportText" rows=12 cols=35 ></textarea><div id="exportOk" onmousedown="IZ.importClose()">Import</div>';
	document.getElementById("exportContainer").innerHTML = exportDiv;
	document.getElementById("exportContainer").style.display="inline";
}
IZ.importClose = function() {
	var importText = document.getElementById("exportText").value;
	localStorage['IZIIGameSave'] = importText;
	IZ.loadGame("");
	document.getElementById("exportContainer").style.display="none";
}

// reset game
IZ.reset = function() {
	var r=confirm("Are you sure? You will lose all your progress (but gain in birth rates according to your number of achievements).");
	if (r==true) {
		IZ.calculateBadges();
		var resetBadges = IZ.Zoo.resetBadges + IZ.Zoo.badges.length;
		var newBirthRate = [];
		var multiplier = 1 + (resetBadges / 1000);
		for (var i=0; i<IZ.Zoo.animals.length; i++) {
			newBirthRate[i] = IZ.Zoo.animals[i].birthRate / multiplier;
		}
		IZ.init();
		IZ.loadZoo();
		IZ.loadBadges();
		IZ.Zoo.resetBadges = resetBadges;
		for (var i=0; i<IZ.Zoo.animals.length; i++) {
			IZ.Zoo.animals[i].birthRate = newBirthRate[i];
		}
		localStorage['IZIIGameSave'] = btoa(JSON.stringify(IZ.Zoo));
		location.reload(true);
	}
}

// offers
IZ.offerRejected = function() {
	document.getElementById("offerContainer").style.display = "none";
	IZ.Zoo.offerNext = 0;
	IZ.Zoo.offerActive = 0;
}
IZ.offerAccepted = function() {
	document.getElementById("offerContainer").style.display = "none";
	var give = IZ.Zoo.offerGiveSpecies;
	var giveNumber = IZ.Zoo.offerGiveNumber;
	if (IZ.Zoo.animals[give].own < giveNumber) {
		var log = "* <strong>You didn't have enough " + IZ.animals[give].plural + " to accept that offer</strong>";
		IZ.addToLog(log);
		return;
	}
	IZ.Zoo.animals[give].own -= giveNumber;
	IZ.Zoo.animals[give].sold += giveNumber;
	var newNumber = IZ.Zoo.animals[give].own
	newNumber = newNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var idOwn = "own" + give;
	document.getElementById(idOwn).innerHTML = newNumber;
	IZ.updateBirthRate(give);
	IZ.updateDeathRate(give);
	IZ.updateTooltip(give);

	var get = IZ.Zoo.offerGetSpecies;
	var getNumber = IZ.Zoo.offerGetNumber;
	IZ.Zoo.animals[get].own += getNumber;
	IZ.Zoo.animals[get].bought += getNumber;
	var newNumber = IZ.Zoo.animals[get].own
	newNumber = newNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var idOwn = "own" + get;
	document.getElementById(idOwn).innerHTML = newNumber;
	IZ.updateBirthRate(get);
	IZ.updateDeathRate(get);
	IZ.updateTooltip(get);

	IZ.Zoo.offerAccepted++;
	IZ.Zoo.offerNext = 0;
	IZ.Zoo.offerActive = 0;
	
	IZ.Zoo.total = IZ.Zoo.total + getNumber - giveNumber;
	var log = "* <strong>You took " + getNumber + " " + IZ.animals[get].plural + " in exchange for " + giveNumber + " " + IZ.animals[give].plural + "</strong>";
	IZ.addToLog(log);
	
}

IZ.addToLog = function (text) {
	text = text + "<br>" + document.getElementById("log").innerHTML;
	if (text.length > 100000) {
		text = text.slice(0,100000);
	}
	document.getElementById("log").innerHTML = text;
}

IZ.getFined = function() {
	IZ.Zoo.fines++;
	var fine = IZ.Zoo.creditLimit / 10;
	IZ.Zoo.debt += fine;
	IZ.updateMoney();
	var fineDiv = '<h2>The Animal Bureau fined you<br>for overcrowding your zoo!</h2><h2>Check your debt</h2><div id="fineOk" onmousedown="IZ.fineClose()">Close</div>';
	document.getElementById("fineContainer").innerHTML = fineDiv;
	document.getElementById("fineContainer").style.display="inline";
	fine = IZ.numToString(fine);
	var log = "<strong>You were fined $" + fine + " for overcrowding your zoo.</strong>"
	IZ.addToLog(log);
}
IZ.fineClose = function() {
	document.getElementById("fineContainer").style.display="none";
}

// stats for log
IZ.createStats = function() {
	var d = new Date();
	var log = "* <strong>Stats</strong> - " + d + ":<br>- You have " + IZ.Zoo.total + " animals<br>";
	var rate = IZ.Zoo.total / IZ.Zoo.time;
	rate = IZ.numToString(rate);
	log = log + "- You acquired them at a rate of " + rate + " per second<br>";
	var totalValue = 0;
	var value = 0
	for (i=0; i<IZ.Zoo.animals.length; i++) {
		value = IZ.Zoo.animals[i].own * IZ.Zoo.animals[i].buyPrice;
		totalValue = totalValue + value;
	}
	totalValue = totalValue * 0.8
	totalValue = IZ.numToString(totalValue);
	log = log + "- The total selling value of your animals is $" + totalValue + "<br>";
	log = log + "- You discovered " + IZ.Zoo.speciesShown + " species<br>";
	log = log + "- You bought " + IZ.Zoo.brBoosts + " birth-rate boosts<br>";
	log = log + "- You bought " + IZ.Zoo.drBoosts + " death-rate mitigators<br>";
	log = log + "- You bought " + IZ.Zoo.bsBoosts + " price boosts<br>";
	log = log + "- You bought " + IZ.Zoo.enBoosts + " enclosure enlargements<br>";
	log = log + "- You accepted " + IZ.Zoo.offerAccepted + " offers from the Incremental Office for Animal Exchange<br>";
	log = log + "- You were fined " + IZ.Zoo.fines + " times by the Animal Bureau<br>";
	log = log + "- You carry " + IZ.Zoo.resetBadges + " badges from previous games<br>";
	var totalBadges = IZ.Zoo.resetBadges + IZ.Zoo.badges.length;
	var afterReset = 100 - (100 / (1 + totalBadges/1000));
	afterReset = IZ.numToString(afterReset);
	log = log + "- If you reset now, your animals will have  " + afterReset + "% better initial birth rates (compared to a fresh game)";
	IZ.addToLog(log);
}

// general loop
IZ.loop = setInterval( function() {
	// charge interest on debt every ten seconds. Also, save
	IZ.Zoo.interestCounter++;
	if (IZ.Zoo.interestCounter === 10) {
		IZ.Zoo.interestCounter = 0;
		var interest = Math.pow((IZ.Zoo.debt), IZ.Zoo.interestRate);
		IZ.Zoo.debt = interest;
		IZ.updateMoney();
		localStorage['IZIIGameSave'] = btoa(JSON.stringify(IZ.Zoo));
	}
	
	// let visitors in
	IZ.Zoo.visitorsCounter++;
	if (IZ.Zoo.visitorsCounter >= IZ.Zoo.visitorsTime && IZ.Zoo.visitorsTotal > 0) {
		var species = 0;
		for (i=0; i<IZ.Zoo.animals.length; i++) {
			if (IZ.Zoo.animals[i].own > 0) {
				species++;
			}
		}
		IZ.Zoo.visitorsCounter = 0;
		IZ.Zoo.money += (IZ.Zoo.visitorsTotal * species);
		IZ.updateMoney();
		if (IZ.Zoo.visitorsLog === 0) {
			log = "<strong>* Your zoo received its first visitors!</strong>";
			IZ.addToLog(log);
			IZ.Zoo.visitorsLog = 1;
		}
	}

	var id;
	var slot;
	var next;
	// display new animals over time
	IZ.Zoo.time++;
	for (var i=IZ.Zoo.speciesShown; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.time >= IZ.animals[i].wait) {
			id = IZ.Zoo.animals[i].id;
			slot = "animal" + id;
			IZ.Zoo.speciesShown = i + 1;
			document.getElementById(slot).style.display = "inherit";
			slot = "br" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "dr" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "bs" + id;
			document.getElementById(slot).style.display = "inline-block";
			slot = "en" + id;
			document.getElementById(slot).style.display = "inline-block";
			var log = "* <strong>You discovered " + IZ.animals[i].plural + "!</strong> " + IZ.animals[i].quote;
			IZ.addToLog(log);
		}
	}
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.time >= IZ.animals[i].wait) {
			next = IZ.animals[i+1].wait - IZ.Zoo.time;
			if (IZ.Zoo.speciesShown < 35) {
				var time = IZ.Zoo.timeSecs;
				time = time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var price = IZ.numToString(IZ.Zoo.timePrice);
				document.getElementById("buyTime").innerHTML = '<div id="buyTime" onclick="IZ.buyTime()"><h3>Reduce the wait by ' + time + ' seconds for $' + price + '</h3></div>'
				next = next.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				document.getElementById("next").innerHTML = '<h2>Next species in ' + next + ' seconds</h2>';
			} else {
				document.getElementById("next").innerHTML = '<h2>You discovered all the animals!</h2>';
				document.getElementById("buyTime").innerHTML = ''; 
			}
		}
	}
	// births and deaths
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.animals[i].own >= IZ.Zoo.animals[i].maxPop) {
			IZ.Zoo.animals[i].own = IZ.Zoo.animals[i].maxPop;
			var id = "own" + i;
			IZ.updatePopulation(i);
			document.getElementById(id).style.color = "#f00";
		}
		var idOwn = "own" + i;	
		var newborn = 0;
		var dead = 0;
		document.getElementById(idOwn).style.color = "#000";
		if (IZ.Zoo.animals[i].own > 1 && IZ.Zoo.animals[i].own < IZ.Zoo.animals[i].maxPop) {
			rnd = Math.random() * (IZ.Zoo.animals[i].own + (IZ.Zoo.animals[i].birthRate));
			if (rnd <= IZ.Zoo.animals[i].own) {
				newborn = 1;
				IZ.Zoo.animals[i].own++;
			}
			if (newborn === 1) {
				if (IZ.Zoo.animals[i].own >= IZ.Zoo.animals[i].maxPop) {
					IZ.Zoo.animals[i].own = IZ.Zoo.animals[i].maxPop;
					document.getElementById(idOwn).style.color = "#f00";
				} else {
					document.getElementById(idOwn).style.color = "#484";
				}
				IZ.Zoo.total++;
				IZ.Zoo.animals[i].born++;
			}
			rnd = Math.random() * (IZ.Zoo.animals[i].own * 2 + (IZ.Zoo.animals[i].deathRate));
			if (rnd <= IZ.Zoo.animals[i].own) {
				dead = 1;
				IZ.Zoo.animals[i].own--;
			}
			if (dead === 1) {
				document.getElementById(idOwn).style.color = "#a44";
				IZ.Zoo.total--;
				IZ.Zoo.animals[i].dead++;
			}
		}
		IZ.updatePopulation(i);
		IZ.updateBirthRate(i);
		IZ.updateDeathRate(i);
		IZ.updateTooltip(i);
		if (IZ.Zoo.animals[i].own === IZ.Zoo.animals[i].maxPop) {
			var fine = Math.random() * 100000;
			if (Math.floor(fine) === 12345) {
				IZ.getFined();
			}
		}
	}
		
	// offers
	if (IZ.Zoo.offerNext === 0) {
		var random = Math.round(Math.random() * 111);
		IZ.Zoo.offerNext = IZ.Zoo.time + 111 + random;
	}
	if (IZ.Zoo.time >= IZ.Zoo.offerNext && IZ.Zoo.offerActive === 0) {
		if (IZ.Zoo.animals[0].own === 0 || IZ.Zoo.animals[1].own === 0) {
			IZ.Zoo.offerNext = 0;
		} else {
			//create offer
			for (i=IZ.Zoo.animals.length-1; i>0; i--) {
				if (IZ.Zoo.animals[i].own > 0) {
					var getSpecies = i;
					var giveSpecies = i-1;
					break;
				}
			}
			var getNumber = Math.ceil(Math.random() * 10);
			if (IZ.Zoo.animals[giveSpecies].own >= 10) {
				var giveNumber = Math.ceil(Math.random() * 10);
			} else {
				var giveNumber = Math.ceil(Math.random() * IZ.Zoo.animals[giveSpecies].own);
			}
			IZ.Zoo.offerGiveSpecies = giveSpecies;
			IZ.Zoo.offerGiveNumber = giveNumber;
			IZ.Zoo.offerGetSpecies = getSpecies;
			IZ.Zoo.offerGetNumber = getNumber;
			document.getElementById("offer").innerHTML = '<h2>Get ' + getNumber + ' ' + IZ.animals[getSpecies].plural + '<br>in exchange for<br>' + giveNumber + ' ' + IZ.animals[giveSpecies].plural + '</h2>';
			document.getElementById("offerContainer").style.display = "inline";
			IZ.Zoo.offerActive = 1;
		}
	}
	document.getElementById("animalsTitle").innerHTML = "<h2>Animals (" + IZ.Zoo.total + ")</h2>";
	document.getElementById("badgesTitle").innerHTML = "<h2>Achievements (" + IZ.Zoo.badges.length + ") <span style='font-size:10px'>(Click to update)</span></h2>";
	for (var i=0; i<IZ.Zoo.animals.length; i++) {
		if (IZ.Zoo.animals[i].own > IZ.Zoo.animals[i].maxOwn) {
			IZ.Zoo.animals[i].maxOwn = IZ.Zoo.animals[i].own;
		}
	}
	if (IZ.Zoo.total > IZ.Zoo.maxTotal) {
		IZ.Zoo.maxTotal = IZ.Zoo.total;
	}
}, 1000);

// start
window.onload = function() {
	IZ.init();
	IZ.loadZoo();
	IZ.loadBadges();
	IZ.loadGame("");
}