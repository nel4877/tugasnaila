document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Terima kasih ${name}, pesan Anda telah dikirim!`);
  } else {
    alert('Harap isi semua kolom.');
  }
});
