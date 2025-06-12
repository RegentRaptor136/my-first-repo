document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Получаем значения из полей
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const webhookURL = "https://discord.com/api/webhooks/1379766816775340032/pGV0ngvTPGueO2x7IQEzSg9ef14UJZpzKAY_cLJLdEN00PbyWuXZ7iTaRunryO_fOjbP";

  const payload = {
    content: `📞 Телефон: ${phone}\n📧 Email: ${email}\n💬 Предложение: ${message}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      alert("Успешно отправлено!");
    } else {
      alert("Ошибка при отправке.");
    }
  })
  .catch(error => {
    console.error("Ошибка:", error);
    alert("Произошла ошибка при отправке.");
  });
});
