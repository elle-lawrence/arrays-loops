const pies = [
    {
      name: 'Dutch Apple Pie',
      ingredients: 'apples,sugar,butter,nutmeg,dutch people',
      bakeTemp: 5000,
      drinkPairing: 'Earl Grey Tea',
      imageUrl:
        'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
      instructor: 'Doc',
      iceCream: 'Vanilla',
    },
    {
      name: 'Berry Pie',
      ingredients: 'berries',
      bakeTemp: 400,
      drinkPairing: 'wine',
      imageUrl:
        'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
      instructor: 'Doc',
      iceCream: 'banana',
    },
    {
      name: 'Pumpkin Pie',
      ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
      bakeTemp: 42,
      drinkPairing: 'egg nog',
      imageUrl:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
      instructor: 'Aja',
      iceCream: 'Vanilla',
    },
    {
      name: 'Shoo Fly Pie',
      ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
      bakeTemp: 1234,
      drinkPairing: 'Apple Cider',
      imageUrl:
        'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
      instructor: 'Aja',
      iceCream: 'Coffee',
    },
    {
      name: 'Pecan Pie',
      ingredients: 'Pecans, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Milk',
      imageUrl:
        'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
      instructor: 'Trinity',
      iceCream: 'Vanilla',
    },
    {
      name: 'Keylime Pie',
      ingredients: 'lemons, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Water',
      imageUrl:
        'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
      instructor: 'Trinity',
      iceCream: 'none',
    },
  ];

 
  
const bodyElement = document.querySelector('body');
const divElement = document.querySelector('#pies');
const trin = document.querySelector('#Trinity');
const aja = document.querySelector('#Aja');

pies.forEach((pie) => {
  divElement.innerHTML += `<h1>${pie.name}</h1>`;
});


const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
}

const printPies = (event) => {
  let domString = '';
  pies.forEach((pie) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <img src=${pie.imageUrl} class="card-img-top" alt=${pie.name}>
      <div class="card-body">
        <h5 class="card-title">${pie.name}</h5>
        <p class="card-text">${pie.ingredients}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
  });
  
  const filterPies = (taco1, taco2) => {
      return taco1.filter(typesOfPie => typesOfPie.drinkPairing === taco2)
      
  }
//   console.log(filterPies(pies, "Earl Grey Tea" ))
   

  if (event.target.id === "Trinity") {
    // return filterPies(pies, "Earl Grey Tea" )
    renderToDom('#rocks', domString(filterPies(pies, "Earl Grey Tea" )));
  }
  if (event.target.id === "Aja" || event.target.id === "Doc") {
    renderToDom('#pies', domString);
  }
}

bodyElement.addEventListener('click', printPies)

// aja.addEventListener('click', () => {
//   let domString = '';
  
//   pies.forEach((pie) => {
//     domString += `<h1>${pie.ingredients}</h1>`;
//   });

//   renderToDom('#pies', domString);
// })

