let body = document.getElementById("body");
let card = document.getElementById("card");

	
CarLot.getInventory();


function todom(a) {

		
	body.innerHTML += 
						`<tr class="container">
	                  	   <th>${a.make}/${a.model}</th>
	                  	   <td>${a.year}</td>
	                  	   <td>$${a.price}</td>
	                  	   <td>${a.description}</td>
	                  	</tr>`
	card.innerHTML += 
	         			`<div class=clearfix hiden-sm-up></div><div class="card col-md-3 m-r-10 border">
				            <img class="card-img-top" src="${a.image}" alt="Card image cap">
				            <div class="card-block">
				              <h3 class="card-title">${a.make}/${a.model}</h3>
				              <hr>
				              <p class="year" class="card-text">Year: ${a.year}</p>
				              <p class="price" class="card-text">Price: $${a.price}</p>
				              <p class="description" class="card-text">Description: ${a.description}</p>
				              <hr>
				              <a href="#" class="btn btn-success">Purchase</a>
				            </div>
				          </div><div class=clearfix hiden-sm-up>`

 	document.querySelectorAll(".card").forEach((a) => {
		a.addEventListener("click", function() {
			this.classList.toggle("borderafter");
			document.getElementById("input").removeAttribute("placeholder");
			document.getElementById("input").focus();
			
		

		})

	})
}	




document.getElementById("input").addEventListener("input", search);
document.getElementById("input").addEventListener("focus", search);




function search() {
	let input = document.getElementById("input").value;
	let cards = document.querySelectorAll(".card");
	
		
	cards.forEach((a)=> {
		if (a.classList.contains("borderafter") === true) {
			if (input.toLowerCase() === "year") {
				a.querySelector("p.price").classList.add('hidden');
				a.querySelector("p.description").classList.add('hidden');
				
			}

			else if (input.toLowerCase() === "price") {
				a.querySelector("p.year").classList.add('hidden');
				a.querySelector("p.description").classList.add('hidden');
			}

			else if (input.toLowerCase() === "description") {
				a.querySelector("p.year").classList.add('hidden');
				a.querySelector("p.price").classList.add('hidden');
			}

			else {
				a.querySelector("p.year").classList.remove('hidden');
				a.querySelector("p.price").classList.remove('hidden');
				a.querySelector("p.description").classList.remove('hidden');
			}
		}
		else {
				a.querySelector("p.year").classList.remove('hidden');
				a.querySelector("p.price").classList.remove('hidden');
				a.querySelector("p.description").classList.remove('hidden');
		}
		

	})

}

