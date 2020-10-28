var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=DU943lC1or0izsEmS-LfzjXRkl4QGH2oSPiduo2wHHs";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });


// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      renderhtml(request.response);
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

const renderhtml = (response) => {
  // const plantdata = JSON.parse(response).data;
  // const families = Array.from(new Set(data.map(plant => plant.family)));
  var plantdata = JSON.parse(response)
  var families = plantdata.data.map(x => x.family)
  console.log(plantdata)
  displayplantfamily(families)
}




const displayplantfamily = (data) => {
  console.log(data)
  document.getElementById('data').innerHTML = "";
  for (var i in data) {
    document.getElementById('data').innerHTML += '<h2>' + data[i] + "<br>"
  }
}


