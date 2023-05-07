fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'admin',
      password: '123456'
    })
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));