const profileCard = document.querySelector(".profileCard");

if (profileCard) {


      document.getElementById('btn').addEventListener('click', () => {
            let username = document.getElementById('gusername').value

            let url = 'https://api.github.com/users/' + username

            fetch(url).then(res => res.json()).then(data => {
                  if (data.message) {
                        document.getElementById('info').innerHTML =
                              `<h3>Github profile not found, please try again</h3>`
                  } else {
                        console.log(data)
                        document.getElementById('info').innerHTML =
                              `<img src="${data.avatar_url}"
                              style="width:70%">
                              <h2>${data.login}</h2>
                              <h3>${data.name}</h3>
                              <p>${data.public_repos}</p>
                              <p>${data.repos_url}</p>
                              <p>${data.html_url}</p>                        
                        `
                  }
            }).catch(e => {
                  console.log(e)
            })
      })
}


























// const profileCard = document.querySelector(".profileCard");

// if (profileCard) {

//       class UserProfile {
//             constructor (element) {
//                   this.element = element;
//                   this.apikey = "https://api.github.com/users";


//                   this.element.querySelector(".search button").addEventListener("click", () => {
//                         this.search();
//                   });

//                   // event listener for when the user presses the enter key
//                   this.element.querySelector(".search-bar").addEventListener("keyup", (event) => {
//                         if (event.key == "Enter") {
//                               this.search();
//                         }
//                   });
//             }

//             // search function for the add event listener
//             search() {
//                   this.fetchProfile(profileCard.querySelector(".search-bar").value);
//             }

//             fetchProfile(name) {
//                   // tell the fetch what to fetch, the parameters is city and it tells the function to look up the data for the city inputted
//                   fetch(
//                               "https://api.github.com/users" +
//                               name +
//                               +
//                               this.apiKey
//                         )
//                         // once it has fetched the then tells it what to do with it
//                         .then((response) => response.json())
//                         // then get the data from the json and log it in the console
//                         .then((data) => this.displayProfile(data));
//             }

//             // function to display the weather on the html page
//             // the function will take in the data and display the weather
//             displayProfile(data) {
//                   // extracting the data-----get the data for each html class
//                   // below, this will extract the name from the object which will be what ever city the user inputs
//                   const {
//                         name
//                   } = data;
//                   // below the .notation is telling it where to get the icon and description which is under the weather tab in the file, this is the same for all the rest of the const
//                   // when consoled the first time the icon and description came out as undefined, the problem was unlike other tabs, weather is under an array and not an object, so to reach the icon in the array enter the position in the [] to extract the data from the array instead of the object
//                   const {
//                         avatar_url,
//                         bio
//                   } = data.login;
//                   const {
//                         public_repos,
//                         repos_url
//                   } = data;
//                   const {
//                         url
//                   } = data;
//                   // now that the data is extracted it needs to be put in the html page
//                   this.element.querySelector(".name").innerText = "GitHub Username " + name;
//                   this.element.querySelector(".avatar_url").src =
//                         "https://openweathermap.org/img/wn/" + icon + ".png";
//                   this.element.querySelector(".bio").innerText = bio;
//                   this.element.querySelector(".public_repos").innerText = public_repos + " repositories";
//                   this.element.querySelector(".repos_url").innerText =
//                         "Click here for repositories " + humidity ;
//                   this.element.querySelector(".url").innerText =
//                         "Full User profile " + url + name ;
//             }
//       }

//       const userWidget = new UserProfile(profileCard);
//       userWidget.fetchProfile("Username");

// };