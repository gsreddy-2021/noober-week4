async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  // First loop that goes through all he rides and gives access to each ride
  for (let i = 0; i<json.length; i++) {
    let ride = json[i]
    console.log(ride)
  
  // Inner loop that goes through each individual ride's array of legs and gives you access to each individual leg

    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
    } else if (ride[0].purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }

  }

  

}

window.addEventListener('DOMContentLoaded', pageLoaded)

