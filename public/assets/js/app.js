
axios.get('/api/horses')
  .then(({ data }) => {
    console.log(data)
    data.forEach(horse => {
      let horseElem = document.createElement('a')
      horseElem.value = horse.id
      horseElem.textContent = horse.name
      horseElem.className = 'dropdown-item'
      document.getElementById('horseList').append(horseElem)
    });
  })
  .catch(err => { console.log(err) })

document.getElementById('submit').addEventListener('click', event => {

  let name = document.getElementById('name').value
  let feedId = document.getElementById('feed').

  



  axios.post('/api/horses', {name, breed, age, })
    .then(({data}) => {

    })
    .catch()
})