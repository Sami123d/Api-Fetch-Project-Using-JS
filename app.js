// const response = fetch('https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=frontend&category=')
// .then((response)=>{
//     console.log(response)
//     return response.json()
// }).then((samad) => {

//     // console.log(samad.data[1])
//     declare(samad.data)
// })

// const declare = (paramtr) => {
//   console.log(paramtr)
//    paramtr.forEach(element => {
//     const dhsdh = document.getElementById("dhsdh")
//     dhsdh.innerHTML+= `<div class="card text-center">
//   <div class="card-header">
//     ${element.companyName}
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">${element.designation}</h5>
//     <p class="card-text">${element.desc}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//   <div class="card-footer text-body-secondary">
//     2 days ago
//   </div>
// </div>`
//    });
  

  
// }


// console.log(cardRow)

const searchingFunc = () => {
  let inputFieldOutput = document.querySelector('.form-field').value;
  console.log(inputFieldOutput)
  const fetchApi = fetch(`https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${inputFieldOutput}&category=`)
  .then((response) => {

    return response.json()
  }).then((apis) => {
    console.log(apis.data)
    displayingCardsFunc(apis.data)
    
  })

}
searchingFunc()
 
const displayingCardsFunc = (parmtr) => {
  const cardRow = document.querySelector('.cards-row');
     cardRow.innerHTML = ''
  parmtr.forEach((element)=> {
    const desc = element.category.description;
    dddd = desc.split(' ').slice(0, 10).join(' ') + "..."
    console.log(dddd)
    console.log(desc)
    cardRow.innerHTML += ` <div class="col">
    <div class="card h-100">
    <div class="card-body " style="padding-bottom: 0;">
      <div class="d-flex justify-content-between"><p class="card-title " >${element.companyName}</p>
      <img src="./download.png" width="50px" alt="" srcset=""></div>
      
      <p style="font-weight: bold;  font-size: small;">${element.category.name}</p>
      <h6>HIRING!!</h6>
      <h6 style="color: #4D3BDB;">No Salary Mentioned</h6>

      <p class="card-text fw-bold"> ${dddd}
        </p>
        <div class="lower-card d-flex justify-content-between">
          <div class="left-lower-card">
          <button type="button" style="border-radius: 60px !important; background-color: #4D3BDB !important;"  class="btn btn-primary">${element.jobFeseability}</button>
           <p style="font-size: small;">4 Days Ago</p>
          </div>
          <div class="right-lower-card">
            <h6 style="margin-top: 10px;
            margin-bottom: 0;">${element.country},${element.city}</h6>
            <p style="font-size: small;">${element.views} views</p>
          </div>
        </div>
    </div>
  </div>
  </div>`
  });
}
