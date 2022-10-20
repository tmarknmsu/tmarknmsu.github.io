/* Set the width of the side navigation to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("title").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "25%";
document.getElementById("title").style.marginLeft = "0";
}

function getBooks(){
	document.getElementById('output').innerHTML="";
	fetch("http://openlibrary.org/search.json?q="+document.getElementById("myInput").value)
	.then(a=> a.json())
	.then(response =>{
		for(var i=0; i<10; i+=1)
		{
			// gets the title
			document.getElementById("output").innerHTML+="<h2>"+response.docs[i].title+"</h2>"+
			// gets the author
			response.docs[i].author_name[0]+"<br>"+
			// gets author key
			response.docs[i].author_key[0]+
			// gets the book cover
			"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-S.jpg'><br>";
			


		}


	});
	document.getElementById("boxTitle").style.fontSize = "0";};

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