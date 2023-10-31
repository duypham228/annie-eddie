document.addEventListener("DOMContentLoaded", function () {
  // Define your love day (the special date)
  const loveDay = new Date("2023-07-20"); // Replace with your own date
  const usCentral = "America/Chicago"; // US Central Time (Texas)

  // Function to update the love day counter
  function updateLoveDayCounter() {
    const nowUtc = new Date();
    const timeDiff = nowUtc - loveDay;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Create a new Date object in the US Central Time zone
    const nowTexas = new Date(
      nowUtc.toLocaleString("en-US", { timeZone: usCentral })
    );

    const hoursDiff = nowTexas.getHours();
    const minutesDiff = nowTexas.getMinutes();
    const secondsDiff = nowTexas.getSeconds();

    document.querySelector(".days-counter").textContent = `${daysDiff} days`;
    document.querySelector(".hours").textContent = hoursDiff;
    document.querySelector(".minutes").textContent = minutesDiff;
    document.querySelector(".seconds").textContent = secondsDiff;
  }

  // Update the counter immediately on page load
  updateLoveDayCounter();

  // Update the counter every second
  setInterval(updateLoveDayCounter, 1000);
});
