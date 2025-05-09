
document.getElementById("whatsapp-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value;
  const message = `سلام، من ${name} هستم.\nموضوع: ${service}\nتوضیحات: ${details}`;
  const phoneNumber = "989133902869";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
});
