function showModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('show');
}

function showSecondModal() {
    const modal = document.querySelector('.secondModal');
    modal.classList.add('show');
}

function hideModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
}

function hideSencondModal() {
    const modal = document.querySelector('.secondModal');
    modal.classList.remove('show');
}

window.addEventListener('scroll', function (e) {
    const arrow = document.querySelector('.arrow-up');
    if (window.scrollY > 100) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});

function _scrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function _scrollDown() {
    window.scroll({
        top: 1750,
        behavior: 'smooth'
    });
}

function openSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.add('open');
}

function closeSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.remove('open');
}

function openSecondSidebar() {
    console.log('secondSidebar');
    document.querySelector('.secondSidebar').classList.add('open');
}

function closeSecondSidebar() {
    console.log('secondSidebar');
    document.querySelector('.secondSidebar').classList.remove('open');
}

function openThirdSidebar() {
    console.log('thirdSidebar');
    document.querySelector('.thirdSidebar').classList.add('open');
}

function closeThirdSidebar() {
    console.log('thirdSidebar');
    document.querySelector('.thirdSidebar').classList.remove('open');
}

function loginResult() {
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value;
    var birthdayMonth = document.getElementById('birthday_month').value;
    var birthdayDay = document.getElementById('birthday_day').value;
    var birthdayYear = document.getElementById('birthday_year').value;
    var female = document.getElementById('Female').value;
    var male = document.getElementById('Male').value;
    var custom = document.getElementById('Custom').value;
    if (firstName == "" || lastName == "" || mobileNumber == "" || !password || birthdayMonth == null || birthdayDay ==
        null || birthdayYear == null || !female || male == null || custom == null) {
        alert("Rellena todos los campos");
    } else {
        const data = {
            Nombre: firstName,
            Apellido: lastName,
            Email: mobileNumber,
            Contraseña: password,
            Nacimineto: birthdayDay + "/" + birthdayMonth + "/" + birthdayYear,
            Genero: male
        }
        alert(JSON.stringify(data));
    }
}