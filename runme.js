var start = 147981;
var end = 691423;
var passdiff = 0;

for(let current=147981; current<=end; current++){
                let doublecheck = 0;
				let mystring = current.toString();
				let check1 = Number(mystring.substr(0,1));
				let check2 = Number(mystring.substr(1,1));
				let check3 = Number(mystring.substr(2,1));
				let check4 = Number(mystring.substr(3,1));
				let check5 = Number(mystring.substr(4,1));
				let check6 = Number(mystring.substr(5,1));
				
				if (check1 <= check2){
					if (check1 === check2) doublecheck = 1;
						
						if (check2 <= check3){
						if (check2 === check3) doublecheck = 1;
						
						if (check3 <= check4){
							if (check3 === check4) doublecheck = 1;
							
							if (check4 <= check5){
								if (check4 === check5) doublecheck = 1;
								
								if (check5 <= check6){
									if (check5 === check6) doublecheck = 1;
									if (doublecheck === 1) passdiff++;
								}
							}
						}
					}
					
				}
            }
console.log(passdiff);
