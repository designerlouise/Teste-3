// Navegação suave
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Modal login
const modal = document.getElementById('loginModal');
const btn = document.getElementById('openLogin');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() { modal.style.display = 'flex'; }
span.onclick = function() { modal.style.display = 'none'; }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Seleção de avatar com preview
function selectAvatar(img) {
    const preview = document.getElementById('avatarPreview');
    preview.innerHTML = `<img src="${img.src}">`;
}
