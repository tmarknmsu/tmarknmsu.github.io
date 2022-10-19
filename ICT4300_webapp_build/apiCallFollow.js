

function getBooks(){
	document.getElementById('output').innerHTML="";
	fetch("http://openlibrary.org/search.json?q="+document.getElementById("myInput").value)
	.then(a=> a.json())
	.then(response =>{
		for(var i=0; i<10; i+=1)
		{
			// gets the title
			document.getElementById("output").innerHTML+="<h1>"+response.docs[i].title+"</h1>"+
			// gets the author
			response.docs[i].author_name[0]+"<br>"+
			// gets author key
			response.docs[i].author_key[0]+
			// gets the book cover
			"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-S.jpg'><br>";
			


		}


	});
	};

let input = document.getElementById("myInput");
let searchButton = document.getElementById('mySearch');

input.addEventListener("keypress", function(event) {
	if(event.key == "Enter"){
		event.preventDefault();
		searchButton.click();
		// getBooks();
		console.log("atleast it registered");
		
	}

});








// document.querySelector("#addLinks").addEventListener("keyup", event => {
//     if(event.key !== "Enter") return; // Use `.key` instead.
//     document.querySelector("#linkadd").click();
// 	document.getElementById('output').innerHTML="";
// 		fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
// 		.then(a=> a.json())
// 		.then(response =>{
// 			for(var i=0; i<10; i+=1)
// 			{
// 				// gets the title
// 				document.getElementById("output").innerHTML+="<h1>"+response.docs[i].title+"</h1>"+				
// 				// gets the author
// 				response.docs[i].author_name[0]+"<br>"+
// 				// gets author key
// 				response.docs[i].author_key[0]+
// 				// gets the book cover
// 				"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-S.jpg'><br>";

// 			}


// 			});
// 	 // Things you want to do.
//     event.preventDefault(); // No need to `return false;`.
// });