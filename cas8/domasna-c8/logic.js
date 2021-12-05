class UserData {
  constructor (fullname, address, email, phone, position ){
    this.fullname = fullname
    this.address = address
    this.email = email
    this.phone = phone
    this.position = position
  }
  injectValues(fullname, address, email, phone, position){
    let newelement=
      `<div class="card bg-light" style="width: 18rem; margin:10px;">
      <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d8a851264%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d8a851264%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.18333435058594%22%20y%3D%2296%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
      <div class="card-body">            
          <label class="fw-lighter fs-6">full name:</label>
          <h6 class="user-name">${this.fullname}</h6>
          <label class="fw-lighter fs-6">address:</label>
          <h6 class="user-address">${this.address}</h6>
          <label class="fw-lighter fs-6">email:</label>
          <h6 class="user-email">${this.email}</h6>
          <label class="fw-lighter fs-6">phone number:</label>
          <h6 class="user-phone">${this.phone}</h6>
          <label class="fw-lighter fs-6">work position:</label>
          <h6 class="user-role">${this.position}</h6>
      </div>
    </div>`
    var insert = document.getElementById('usercard');
    insert.insertAdjacentHTML('beforeend', newelement);
  }
}  

async function getData () {
  let users = []
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users = await response.json()
  } catch (err) {
    alert(err)
    users = []
  } finally {
      for (let i=0; i<users.length;i++){
        const fullname = users[i].name
        const email = users[i].email
        const address = `${users[i].address.street} ${users[i].address.suite} ${users[i].address.zipcode} ${users[i].address.city}`
        const phone = users[i].phone
        const position = users[i].company.bs
        const userCard = new UserData(fullname, address, email, phone, position)
        userCard.injectValues()
      }
    }  
}

getData()