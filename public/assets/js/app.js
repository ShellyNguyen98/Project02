axios.get('/api/feeds')
  .then(({ data }) => {
    console.log(data)
    data.forEach(feed => {
      let feedElem = document.createElement('option')
      feedElem.value = feed.id
      feedElem.textContent = feed.name
      document.getElementById('feed').append(feedElem)
    });
  })
  .catch(err => { console.log(err) })


axios.get('/api/fruits')
  .then(({ data }) => {
    console.log(data)
    data.forEach(fruit => {
      let fruitElem = document.createElement('option')
      fruitElem.value = fruit.id
      fruitElem.textContent = fruit.name
      document.getElementById('fruit').append(fruitElem)
    });
  })
  .catch(err => { console.log(err) })


document.getElementById('submit').addEventListener('click', event => {
 event.preventDefault()
  let name = document.getElementById('name').value
  let feedId = parseInt(document.getElementById('feed').options[document.getElementById('feed').selectedIndex].value)
  let fruitId = parseInt(document.getElementById('fruit').options[document.getElementById('fruit').selectedIndex].value)
  let age = document.getElementById('age').value
  let breed = document.getElementById('breed').value

  axios.post('/api/horses', {name, breed, age, feedId, fruitId})
    .then(({data}) => {
      console.log(data)
      let horseElem = document.createElement('tr')
      horseElem.innerHTML = `
        <td>${data.name}</td>
        <td>${data.breed}</td>
        <td>${data.age}</td>
        <td>${document.getElementById('feed').options[document.getElementById('feed').selectedIndex].textContent}</td>
        <td>${document.getElementById('fruit').options[document.getElementById('fruit').selectedIndex].textContent}</td>        
      `
      document.getElementById('horseTable').append(horseElem)
    })
    .catch(err => { console.log(err) })
})

axios.get('/api/horses')
  .then(({data}) => {
    data.forEach(horse => {
      let horseElem = document.createElement('tr')
      horseElem.innerHTML = `
        <td>${data.name}</td>
        <td>${data.breed}</td>
        <td>${data.age}</td>
        <td>${data.feed.name}</td>
        <td>${data.fruit.name}</td>        
      `
      document.getElementById('horseTable').append(horseElem)
    })
  })
  .catch(err => { console.log(err) })
