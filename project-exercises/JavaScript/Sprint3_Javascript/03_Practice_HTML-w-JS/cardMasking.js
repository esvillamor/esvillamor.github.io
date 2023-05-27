function maskCardNumber() {
    var cardNumber = document.getElementById("cardNumber").value.replace(/ /g, ""); // Remove spaces
    if (cardNumber.length < 16) {
        alert("Card number should be 16 digits long.");
        return;
      } else if (cardNumber.length > 16) {
        alert("Card number should not exceed 16 digits.");
        return;
      }
    var spacedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, '$& '); // Add spaces every 4 digits
    var maskedNumber = spacedCardNumber.substring(0, 4) + " **** " + " **** " + spacedCardNumber.substring(14);
    document.getElementById("maskedNumber").textContent = maskedNumber;
  }

  function unmaskCardNumber() {
    var cardNumber = document.getElementById("cardNumber").value.replace(/ /g, ""); // Remove spaces
    if (cardNumber.length < 16) {
        alert("Card number should be 16 digits long.");
        return;
      } else if (cardNumber.length > 16) {
        alert("Card number should not exceed 16 digits.");
        return;
      }
    var spacedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, '$& '); // Add spaces every 4 digits
    document.getElementById("maskedNumber").textContent = spacedCardNumber;
  }

