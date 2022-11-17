// GET

// FILMES
async function getMovies() {
   var options = {
      method: 'GET',
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   var data = await fetch('http://localhost:3000/filmes', options);
   return data.json();
}
// SESSOES
async function getSessions() {
   var options = {
      method: 'GET',
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   var data = await fetch('http://localhost:3000/sessoes', options);
   return data.json();
}
// COMBOS
async function getCombos() {
   var options = {
      method: 'GET',
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   var data = await fetch('http://localhost:3000/combos', options);
   return data.json();
}


// POST
// FILMES
async function newMovie() {
   var options = {
      method: 'POST',
      body: JSON.stringify(filmes),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch('http://localhost:3000/filmes', options);
      return await res.json();
   } catch (error) {
      return console.error(error);
   }
}
// SESSOES
async function newSession() {
   var options = {
      method: 'POST',
      body: JSON.stringify(sessoes),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   return fetch('http://localhost:3000/sessoes', options)
      .then(res => res.json())
      .catch(error => console.error(error))
}
// COMBOS
async function newCombo() {
   var options = {
      method: 'POST',
      body: JSON.stringify(combos),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   return fetch('http://localhost:3000/combos', options)
      .then(res => res.json())
      .catch(error => console.error(error))
}

// PUT
//FILMES
async function updateMovie(filmes) {
   var options = {
      method: 'PUT',
      body: JSON.stringify(filmes),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/filmes/${filmes.id}`, options);
      return await res.json();
   } catch (error) {
      return console.error(error);
   }
}
// SESSOES
async function updateSession(sessao) {
   var options = {
      method: 'PUT',
      body: JSON.stringify(sessao),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/sessoes/${sessao.id}`, options);
      const post = await res.json();
      return console.log(post);
   } catch (error) {
      return console.error(error);
   }
}
// COMBOS
async function updateCombos(combos) {
   var options = {
      method: 'PUT',
      body: JSON.stringify(combos),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/combos/${combos.id}`, options);
      const post = await res.json();
      return console.log(post);
   } catch (error) {
      return console.error(error);
   }
}

// DELETE
// FILMES
async function deleteMovie(filmes) {
   var options = {
      method: 'DELETE',
      body: JSON.stringify(filmes),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/filmes/${filmes.id}`, options);
      return await res.json();
   } catch (error) {
      return console.error(error);
   }
}
// SESSOES
async function deleteSession(sessao) {
   var options = {
      method: 'DELETE',
      body: JSON.stringify(sessao),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/sessoes/${sessao.id}`, options);
      return await res.json();
   } catch (error) {
      return console.error(error);
   }
}
// COMBOS
async function deleteCombo(combo) {
   var options = {
      method: 'DELETE',
      body: JSON.stringify(combo),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   }
   try {
      const res = await fetch(`http://localhost:3000/combos/${combo.id}`, options);
      return await res.json();
   } catch (error) {
      return console.error(error);
   }
}
