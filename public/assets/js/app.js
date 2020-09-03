axios.get('/api/feeds')
  .then(({ data }) => {
    console.log(data)
    data.forEach(feed => {
      let feedElem = document.createElement('option')
      feedElem.value = feed.id
      feedElem.textContent = feed.name
      document.getElementById('feedList').append(feedElem)
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
      document.getElementById('fruitList').append(fruitElem)
    });
  })
  .catch(err => { console.log(err) })


document.getElementById('submit').addEventListener('click', event => {

  let name = document.getElementById('name').value
  let feedId = parseInt(document.getElementById('feed').option[document.getElementById('feed').selectedIndex].value)
  let fruitId = parseInt(document.getElementById('fruit').option[document.getElementById('fruit').selectedIndex].value)
  
  axios.post('/api/horses', {name, breed, age, feedId, fruitId})
    .then(({data}) => {
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