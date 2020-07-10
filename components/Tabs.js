// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const topics = document.querySelector('.topics')

function tabsCreater(text) {
    const tab = document.createElement('div')
    tab.className = "tab"
    tab.innerText = text
    return tab
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => { 
    response.data.topics.forEach(topic => topics.appendChild(tabsCreater(topic)) )
})
.catch(()=> topics.appendChild(err()) )



// Stretch 

function err() {
    const err = document.createElement('h1')
    err.innerText = "THERE WAS AN ERROR"
    return err
}