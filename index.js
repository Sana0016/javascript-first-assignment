// var weather = ["Cold","Summer","Winter","Autumn","Rainy"]
// var userInput = prompt("Enter current weather./ne.g/nCold/nSummer/nAutumn/nRainy/nCloudy");
// var flag =false;

// // COLD===== //
// for(userInput===Cloudy){
//   flag = true;
//   document.write(
//     <div class="card" style="width: 18rem;border: 2px solid black;">
//     <img src="images/summer.gif" class="card-img-top" style="height: 200px;width: 18rem;">
//     <div class="card-body" style="padding: 20px;">
//     </br>
//       <h1 class="card-title">its autumn</h1>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       </div>
//   </div>
//   )
//   break;
// }


// if(weather===summer){
//     document.write(<div class="card" style="width: 18rem;border: 2px solid black;">
//     <img src="images/summer.gif" class="card-img-top" style="height: 200px;width: 18rem;">
//     <div class="card-body" style="padding: 20px;">
//     </br>
//       <h1 class="card-title">its autumn</h1>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       </div>
//   </div>
//     )
// }
// console.log(prompt);



var cold;
var hot;
var cloudy;
var rainy;
var autumn;
var weather = prompt('how is the weather today \r e.g \r cloudy \r rainy \rhot \rautumn \rcold')
if (weather === 'cold') {
    document.write(`
          <div class="div" style="display: flex;justify-content: center;align-items: center;">
        <div class="card" style="width: 18rem;border: 2px solid black;">
            <img src="images/winter.gif" class="card-img-top" style="height: 200px;width: 18rem;">
        <div class="card-body" style="padding: 20px;">
       <h1 class="card-title">ITS COLD</h1>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
   </div> 
        `)
}else if(weather==='hot'){
    document.write(`<div class="div" style="display: flex;justify-content: center;align-items: center;">
   <div class="card" style="width: 18rem;border: 2px solid black;">
    <img src="images/summer.gif" class="card-img-top" style="height: 200px;width: 18rem;">
    <div class="card-body" style="padding: 20px;">
      <h1 class="card-title">ITS HOT</h1>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
  </div>
  </div>`)
}else if(weather==="autumn"){
   document.write( `<div class="div" style="display: flex;justify-content: center;align-items: center;">
    <div class="card" style="width: 18rem;border: 2px solid black;">
        <img src="images/autumn.gif" class="card-img-top" style="height: 200px;width: 18rem;">
        <div class="card-body" style="padding: 20px;">
          <h1 class="card-title">ITS AUTUMN</h1>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
</div>`)
}else if(weather==="cloudy"){
   document.write( `<div class="div" style="display: flex;justify-content: center;align-items: center;">
    <div class="card" style="width: 18rem;border: 2px solid black;">
      <img src="images/cloudy.gif" class="card-img-top" style="height: 200px;width: 18rem;">
      <div class="card-body" style="padding: 20px;">
        <h1 class="card-title">ITS CLOUDY</h1>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </div>`)
}else if(weather==="rainy"){
   document.write( ` <div class="div" style="display: flex;justify-content: center;align-items: center;">
    <div class="card" style="width: 18rem;border: 2px solid black;">
      <img src="images/rainy.gif" class="card-img-top" style="height: 200px;width: 18rem;">
      <div class="card-body" style="padding: 20px;">
        <h1 class="card-title">ITS RAINY</h1>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </div>`)
   }else{
    document.write(`
    <center><img src="images/download.jpg"style="width:400px;height:500px;"></center>
  </center>
      `)
}
