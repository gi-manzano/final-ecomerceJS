 //data json. fetch
  
 const PRODUCTS = []
       fetch('../../app/helpers/products.json')
            .then( (res) => res.json())
            .then((PRODUCTS) => {
                PRODUCTS.forEach(item => {
                PRODUCTS.push (item);
                 })  });
   export {PRODUCTS}