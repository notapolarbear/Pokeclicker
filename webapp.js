// JavaScript Document

//These are the variables for the number of pokeballs and the pokemon.
var pokeballs =  {
	purchased:0
};
    
var greatballs =  {
     purchased:0,
	 price: 500
};
    
var ultraballs =  {
     purchased:0,
	 price: 15000
	};
   
var masterballs =  {
     purchased:0,
	 price: 1500000
	};

var bulbasaur =  {
    price:10,
    bonus:0.2,
    purchased:0 
	};
var charmander =  {
    price:100,
    bonus:3,
    purchased:0
    };
var Squirtle =  {
    price:2500,
    bonus:31,
    purchased:0
    };
var Pikachu = {
    price:24200,
    bonus:320,
    purchased:0
    };
var Leafeon = {
    price:45000,
    bonus:420,
    purchased:0
    };
var Ratatta=  {
    price:75500,
    bonus:650,
    purchased:0
    };
var Nidoran = {
    price:300000,
    bonus:2200,
    purchased:0
    };
var Drantini = {
    price:420000,
    bonus:4000,
    purchased:0
    };
var MewTwo =  {
    price:400000,
    bonus:47000,
    purchased:0
    };
var Arceus =  {
    price:15000000,
    bonus:250000,
    purchased:0
    };

var Ivysaur = 0;
var Charmeleon =0;
var Wartortle = 0;
var Raticate = 0;
var Nidorino = 0;
var Dragonair = 0; 


window.onload=load_cookies;
//COOKIES
//This saves the cookies. 
function save_cookies() {
	//This creates a experation date 120 days from when the person enters the app.
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	
	document.cookie = "pokeballs=" + pokeballs.purchased + "; " + expires;
	document.cookie = "greatballs=" + greatballs.purchased + "; " + expires;
	document.cookie = "ultraballs=" + ultraballs.purchased + "; " + expires;
	document.cookie = "masterballs=" + masterballs.purchased + "; " + expires;

	
	document.cookie = "bulbasaur=" + bulbasaur.purchased + ": " + bulbasaur.bonus + ": " + "; " + expires;
	document.cookie = "charmander=" + charmander.purchased + ": " + charmander.bonus + "; " + expires;
	document.cookie = "Squirtle=" + Squirtle.purchased + ": " + Squirtle.bonus + "; " + expires;
	document.cookie = "Pikachu=" + Pikachu.purchased + ": " + Pikachu.bonus + "; " + expires;
	document.cookie = "Leafeon=" + Leafeon.purchased + ": " + Leafeon.bonus + "; " + expires;
	document.cookie = "Ratatta=" + Ratatta.purchased + ": " + Ratatta.bonus + "; " + expires;
	document.cookie = "Nidoran=" + Nidoran.purchased + ": " + Nidoran.bonus + "; " + expires;
	document.cookie = "Drantini=" + Drantini.purchased + ": " + Drantini.bonus + "; " + expires;
	document.cookie = "MewTwo=" + MewTwo.purchased + ": " + MewTwo.bonus + "; " + expires;
	document.cookie = "Arceus=" + Arceus.purchased + ": " + Arceus.bonus + "; " + expires;
	
	
	document.cookie = "Ivysaur=" + Ivysaur + "; " + expires;
	document.cookie = "Charmeleon=" + Charmeleon + "; " + expires;
	document.cookie = "Wartortle=" + Wartortle + "; " + expires;
	document.cookie = "Raticate=" + Raticate + "; " + expires;
	document.cookie = "Nidorino=" + Nidorino + "; " + expires;
	document.cookie = "Dragonair=" + Dragonair + "; " + expires;
}

function load_cookies() {
	// "Arceus=0; Drantini=0; Nidoran=0; Pikachu=0; Ratatta=0; Squirtle=0; bulbasaur=0; charmander=0; greatballs=0; pokeballs=15; ultraballs=0"
	// var myArray = [1,2,3, "text"];
	// alert(myArray[3]); -> "text"
	// myArray.length -> 4
	// split("; ");
	
	var str = document.cookie;
	var mainArray = str.split("; ");

	for( var i = 0; i < mainArray.length; i++) {
		
		var tempArray = mainArray[i].split("=");
		var key = tempArray[0];
		var value = tempArray[1];
		
		switch(key) {
			
			case "pokeballs":
				pokeballs.purchased = Number(value);
				break;
			case "greatballs":
				greatballs.purchased = Number(value);
				break;
			case "ultraballs":
				ultraballs.purchased = Number(value);
				break;
			case "masterballs":
				masterballs.purchased = Number(value);
				break;
			case "bulbasaur":
				value = value.split(":");
				bulbasaur.purchased = value[0];
				bulbasaur.bonus = value[1];
				//bulbasaur = Number(value);
				break;
			case "charmander":
				value = value.split(":");
				charmander.purchased = value[0];
				charmander.bonus = value[1];
				//charmander = Number(value);
				break;
			case "Squirtle":
				value = value.split(":");
				Squirtle.purchased = value[0];
				Squirtle.bonus = value[1];
				//Squirtle = Number(value);
				break;
			case "Pikachu":
				value = value.split(":");
				Pikachu.purchased = value[0];
				Pikachu.bonus = value[1];
				//Pikachu = Number(value);
				break;
			case "Leafeon":
				value = value.split(":");
				Leafeon.purchased = value[0];
				Leafeon.bonus = value[1];
				//Leafeon = Number(value);
				break;
			case "Ratatta":
				value = value.split(":");
				Ratatta.purchased = value[0];
				Ratatta.bonus = value[1];
				//Ratatta = Number(value);
				break;
			case "Nidoran":
				value = value.split(":");
				Nidoran.purchased = value[0];
				Nidoran.bonus = value[1];
				//Nidoran = Number(value);
				break;
			case "Drantini":
				value = value.split(":");
				Drantini.purchased = value[0];
				Drantini.bonus = value[1];
				//Drantini = Number(value);
				break;
			case "MewTwo":
				value = value.split(":");
				MewTwo.purchased = value[0];
				MewTwo.bonus = value[1];
				//MewTwo = Number(value);
				break;
			case "Arceus":
				value = value.split(":");
				Arceus.purchased = value[0];
				Arceus.bonus = value[1];
				//Arceus = Number(value);
				break;
			case "Ivysaur":
				Ivysaur = Number(value);
				break;
			case "Charmeleon":
				Charmeleon = Number(value);
				break;
			case "Wartortle":
				Wartortle = Number(value);
				break;
			case "Raticate":
				Raticate = Number(value);
				break;
			case "Nidorino":
				Nidorino = Number(value);
				break;
			case "Dragonair":
				Dragonair = Number(value);
				break;
			

			
			}
		
		
	}
	

}
//This function updates the button clicks and the bonus so that the pokeballs are added to the dispaly smoothly.
function update() {
	document.getElementById("numberofpokeballs").value = Math.round(10*pokeballs.purchased)/10;
}
 
 
//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable.  It also hase a Math.round that makes it so it rounds the value of the pokeballs to the nearest tenth.
function buttonClick() {
	pokeballs.purchased++;
	greatballbonus();
	ultraballbonus();
	masterballbonus();
	update();
	save_cookies();
}


//This is the shop. This makes it so that when you click the button for the pokemon it starts the code in the corresponding case. It is also used to by other ball types like Greatball.
function shop(pokemon) {
	
	switch(pokemon) {
		
		case "bulbasaur":
			if(pokeballs.purchased>=bulbasaur.price) {
				bulbasaur.purchased++;
				pokeballs.purchased-=bulbasaur.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "charmander":
			if(pokeballs.purchased>=charmander.price) {
				charmander.purchased++;
				pokeballs.purchased-=charmander.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Squirtle":
			if(pokeballs.purchased>=Squirtle.price) {
				Squirtle.purchased++;
				pokeballs.purchased-=Squirtle.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Pikachu":
			if(pokeballs.purchased>=Pikachu.price) {
				Pikachu.purchased++;
				pokeballs.purchased-=Pikachu.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Leafeon":
			if(pokeballs.purchased>=Leafeon.price) {
				Leafeon.purchased++;
				pokeballs.purchased-=Leafeon.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Ratatta":
			if(pokeballs.purchased>=Ratatta.price) {
				Ratatta.purchased++;
				pokeballs.purchased-=Ratatta.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Nidoran":
			if(pokeballs.purchased>=Nidoran.price) {
				Nidoran.purchased++;
				pokeballs.purchased-=Nidoran.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Drantini":
			if(pokeballs.purchased>Drantini.price) {
				Drantini.purchased++;
				pokeballs.purchased-=Drantini.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "MewTwo":
			if(pokeballs.purchased>MewTwo.price) {
				MewTwo.purchased++;
				pokeballs.purchased-=MewTwo.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Arceus":
			if(pokeballs.purchased>=Arceus.price) {
				Arceus.purchased++;
				pokeballs.purchased-=Arceus.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Greatball":
			if(pokeballs.purchased>=greatballs.price) {
				greatballs.purchased++;
				pokeballs.purchased-=greatballs.price;
			}	
			else {
				alert("Please collect more pokeballs.");
			}
			break;
		case "Ultraball":
			if(pokeballs.purchased>=ultraballs.price) {
				ultraballs.purchased++;
				pokeballs.purchased-=ultraballs.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "masterballs":
			if(pokeballs.purchased>=masterballs.price) {
				masterballs.purchased++;
				pokeballs.purchased-=masterballs.price;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Ivysaur":
			if(pokeballs.purchased>=10000) {
				Ivysaur++;
				pokeballs.purchased-=10000;
				evolutions("Ivysaur");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Charmeleon":
			if(pokeballs.purchased>=100000) {
				Charmeleon++;
				pokeballs.purchased-=100000;
				evolutions("Charmeleon");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Wartortle":
			if(pokeballs.purchased>=600000) {
				Wartortle++;
				pokeballs.purchased-=600000;
				evolutions("Wartortle");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Raticate":
			if(pokeballs.purchased>=500000) {
				Raticate++;
				pokeballs.purchased-=500000;
				evolutions("Raticate");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Nidorino":
			if(pokeballs.purchased>=1000000) {
				Nidorino++;
				pokeballs.purchased-=1000000;
				evolutions("Nidorino");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Dragonair":
			if(pokeballs.purchased>=2500000) {
				Dragonair++;
				pokeballs.purchased-=2500000;
				evolutions("Dragonair");
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		default:
			alert("Please collect more pokeballs.");
			break;
				
			
	}
	update();
	save_cookies();
}


//EVOLUTIONS
//when a player buys an evoltion change value of Charmander by a percentage
// Pokemons wiht Evolutions Bulbasaur(Increase 1000%) Charmander (Increase 750%) Wartortle (500%) Raticate (Increase 200%) Nidorian (150%) Dratini (Increase 150%)
function evolutions(eves) {
	
	switch(eves) {
		
		case "Ivysaur":
			if(Ivysaur===1) {
				
				bulbasaur.bonus = bulbasaur.bonus * 10;
				clickspersecond();
			}
		break;
	case "Charmeleon":
		if(Charmeleon===1) {
			
			charmander.bonus = charmander.bonus * 7.5;
			clickspersecond();
		}
		break;
	case "Wartortle":
		if(Wartortle===1) {
			
			Squirtle.bonus = Squirtle.bonus * 5;
			clickspersecond();
		}
		break;
	case "Raticate":
		if(Raticate===1) {
			
			Ratatta.bonus = Ratatta.bonus * 2;
			clickspersecond();
		}
		break;
	case "Nidorino":
		if(Nidorino===1) {
			
			Nidoran.bonus = Nidoran.bonus * 1.5;
			clickspersecond();
		}
		break;
	case "Dragonair":
		if(Dragonair===1) {
			
			Drantini.bonus = Drantini.bonus * 1.5;
			clickspersecond();
		}
		break;
	
	}
	
}



//This is the setInterval that makes it so that the pokemon add pokeballs over time. It does this by activating the bonus function.
	setInterval(bonus,1000);

	
//This function is the bonus function that controlls how many pokeballs you get per second based on the number of pokemon you have.
function bonus() {
	
				
		pokeballs.purchased+= bulbasaur.purchased * bulbasaur.bonus;
	
		pokeballs.purchased+= charmander.purchased * charmander.bonus;

		pokeballs.purchased+= Squirtle.purchased * Squirtle.bonus;
		
		pokeballs.purchased+= Pikachu.purchased * Pikachu.bonus;
		
		pokeballs.purchased+= Leafeon.purchased * Leafeon.bonus;
		
		pokeballs.purchased+= Ratatta.purchased * Ratatta.bonus;
		
		pokeballs.purchased+= Nidoran.purchased * Nidoran.bonus;
		
		pokeballs.purchased+= Drantini.purchased * Drantini.bonus;
		
		pokeballs.purchased+= MewTwo.purchased * MewTwo.bonus;
		
		pokeballs.purchased+= Arceus.purchased * Arceus.bonus;
		
		update();
		
		clickspersecond();
		save_cookies();
}
//This is the clicks per second function. This tells you how many clicks per second you get with your pokemon.
function clickspersecond() {
	
	document.getElementById("numberofclicks").value = Math.round( 10 *[(bulbasaur.purchased * bulbasaur.bonus) + (charmander.purchased * charmander.bonus) + (Squirtle.purchased * Squirtle.bonus) + (Pikachu.purchased * Pikachu.bonus) + (Leafeon.purchased * Leafeon.bonus) + (Ratatta.purchased * Ratatta.bonus) + (Nidoran.purchased * Nidoran.bonus) + (Drantini.purchased * Drantini.bonus) + (MewTwo.purchased * MewTwo.bonus) + (Arceus.purchased * Arceus.bonus)] )/10;
	
}

//OTHER TYPES OF POKEBALLS

//This function adds three to the number of poke balls you make when you click. For example when you click the pokeball you will only get 1 pokeball per click. With a single great ball though, it will bring your clicks on the pokeball to 4 per click becuase it adds 3.
function greatballbonus () {
	pokeballs.purchased+= greatballs.purchased*3;
	}
function ultraballbonus () {
	pokeballs.purchased+= ultraballs.purchased*100;
}
function masterballbonus () {
	pokeballs.purchased+= masterballs.purchased*5000;
}