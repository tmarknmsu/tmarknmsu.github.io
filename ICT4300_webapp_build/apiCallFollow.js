function getBooks(){
	document.getElementById('output').innerHTML="";
	fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
	.then(a=> a.json())
	.then(response =>{
		for(var i=0; i<100; i+=1)
		{
			// gets the title
			document.getElementById("output").innerHTML+="<h1>"+response.docs[i].title+"</h1>"+
			// gets the author
			response.docs[i].author_name[0]+"<br>"+
			response.docs[i].author_key[0]+
			// gets the book cover
			"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-S.jpg'><br>";

		}


	});
}