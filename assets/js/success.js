function generateTransactionID() {
    var uniqueID = Math.floor(Math.random() * 900000000) + 100000000;
    return uniqueID.toString();
}
window.onload = function() {
  document.getElementById('transaction-id').innerText = generateTransactionID();
}