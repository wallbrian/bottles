
function bottle(){
	for (let i=99; i>=0; i--){
		let song =""
		let song2 =""
		
			if(i>2){
				song =  +i+ " bottles of beer on the wall, " +i+ " bottles of beer" +"<p/>"
				document.getElementById("main").innerHTML += (song)
				
				song2 = "Take one down and pass it around, " +(i-1)+ " bottles of beer on the wall"
				document.getElementById("main").innerHTML += (song2)
				}
			
			else if(i==1){
						song= "1 bottle of beer on the wall, 1 bottle of beer"
							"Take one down and pass it around, no more bottles of beer on the wall"
							"No more bottles of beer on the wall, no more bottles of beer"
							"Go to the store and buy some more, 99 bottles of beer on the wall"
			document.getElementById("main").innerHTML += (song)
			}
	}
}





