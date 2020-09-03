
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
      horseElem.id = data.id

      horseElem.innerHTML = `
        <td>${data.name}</td>
        <td>${data.breed}</td>
        <td>${data.age}</td>
        <td>${document.getElementById('feed').options[document.getElementById('feed').selectedIndex].textContent}</td>
        <td>${document.getElementById('fruit').options[document.getElementById('fruit').selectedIndex].textContent}</td>     
        <td><button class="btn btn-danger remove">X</button></td>   
      `
      document.getElementById('horseTable').append(horseElem)
    })
    .catch(err => { console.log(err) })
})

axios.get('/api/horses')
  .then(({data}) => {
      console.log(data)
    data.forEach(horse => {
      let horseElem = document.createElement('tr')
      horseElem.id = horse.id
      horseElem.innerHTML = `
        <td>${horse.name}</td>
        <td>${horse.breed}</td>
        <td>${horse.age}</td>
        <td>${horse.feed.name}</td>
        <td>${horse.fruit.name}</td>     
        <td><button class="btn btn-danger remove">X</button></td>   
      `
      document.getElementById('horseTable').append(horseElem)
    })
  })
  .catch(err => { console.log(err) })

  document.addEventListener('click', event => {
    if (event.target.classList.contains('remove')) {
      console.log(event.target.parentNode.parentNode)
      axios.delete(`/api/horses/${event.target.parentNode.parentNode.id}`)
        .then(() => {
          event.target.parentNode.parentNode.remove()
        })
        .catch(err => { console.log(err) })
    }
  })
