const logout = async function () {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      // document.location.replace('/login');
      console.log('loggin out too');
       // Redirect to the login page
    window.location.href = '/login';
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout-btn').addEventListener('click', logout);
  