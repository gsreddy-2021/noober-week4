async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  // First loop that goes through all rides
  for (let i = 0; i<json.length; i++) {
    let ride = json[i]
    // Render each product: make it work first
    // console.log(ride)
    
    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
    } else if (ride[0].purpleRequested == true) {
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }
      
  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend',`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${levelOfService}</span>
  </h1>`)
    
 // Inner loop that goes through each individual ride's array of legs and gives you access to each individual leg
  
 for (let j = 0; j < ride.length; j++) {
    passengerName = ride[j].passengerDetails.first + ' ' + ride[j].passengerDetails.last
    passengerPhone = ride[j].passengerDetails.phoneNumber
    passengerPickupAddressLine1 = ride[j].pickupLocation.address
    passengerPickupAddressLine2 = ride[j].pickupLocation.city + ', ' + ride[j].pickupLocation.state + ' ' + ride[j].pickupLocation.zip
    passengerDropoffAddressLine1 = ride[j].dropoffLocation.address
    passengerDropoffAddressLine2 = ride[j].dropoffLocation.city + ', ' + ride[j].dropoffLocation.state + ' ' + ride[j].dropoffLocation.zip
    passengerNumberOfPassengers = ride[j].numberOfPassengers
    console.log(passengerName)
    console.log(passengerPhone)
    console.log(passengerPickupAddressLine1)
    console.log(passengerPickupAddressLine2)
    console.log(passengerDropoffAddressLine1)
    console.log(passengerDropoffAddressLine2)
    console.log(passengerNumberOfPassengers)

    outputElement.insertAdjacentHTML('beforeend',`
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div> `)
 }
 }

}

window.addEventListener('DOMContentLoaded', pageLoaded)