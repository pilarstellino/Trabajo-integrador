console.log(location.search);

let queryStringcat = location.search

let queryStringcategory= new URLSearchParams(queryStringcat)

let categoryid = queryStringcategory.get("category")

console.log(categoryid);



let sc = document.querySelector(".seccioncategoria")
console.log(sc);
let productscategorias = " " ;

fetch(`https://fakestoreapi.com/products/category/${categoryid}`) 

   .then(function(res){
       return res.json ()
   })

   .then (function(data){
       console.log(data);
       for (let i = 0; i<data.length; i++) {
           let productoscategoria = data[i]; 

           productscategorias += 
                   `<section class= "categoriabloque" >
                           <h3>${productoscategoria.title}</h3>
                           <img class="fotoscat" src="${productoscategoria.image}">
                           <p class = "catdescripcion">${productoscategoria.description}</p>
                           <p class = "preciocategoria" >$${productoscategoria.price}</p>
                       <section class="botones3">
                           <a href="./producto.html?id=${productoscategoria.id}">VER MAS</a>
                       </section>
                   </section>
                       `
         
       }
       sc.innerHTML = productscategorias
   }) 


   .catch(function(err){
       console.log(err);
   })

  