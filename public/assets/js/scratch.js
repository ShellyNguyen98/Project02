axios.post('/api/notes', { title, desc })
  .then(({ data }) => { console.log{ data } })
  .catch(err => { console.log(err) })
  

  <div class="btn-group" >
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select A Horse
    </button>
      <div id="horseList" class="dropdown-menu">
        ...
      </div>
  </div >



    axios.get('/api/horses')
      .then(({ data }) => {
        console.log(data)
        data.forEach(horse => {
          let horseElem = document.createElement('option')
          horseElem.value = horse.id
          horseElem.textContent = horse.name
          horseElem.className = 'dropdown-item'
          document.getElementById('horseList').append(horseElem)
        });
      })
      .catch(err => { console.log(err) })