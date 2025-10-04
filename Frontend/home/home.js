let buses = [];

document.addEventListener("DOMContentLoaded", function() {
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const searchBtn = document.querySelector(".book-btn");
    const busResults = document.getElementById("busResults");

    // Fetch buses from backend
    fetch("http://localhost:5000/buses")
        .then(res => res.json())
        .then(data => {
            buses = data.map(bus => ({
                id: bus.id,
                from: bus.from_location,
                to: bus.to_location,
                time: bus.time,
                price: bus.price
            }));
        });

    searchBtn.addEventListener("click", function() {
        const from = fromSelect.value;
        const to = toSelect.value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        busResults.innerHTML = ""; 

        if (!from || !to || !date || !time) {
            busResults.innerHTML = "<p style='color:red'>Please fill all details!</p>";
            return;
        }

        const availableBuses = buses.filter(bus => 
            bus.from === from && bus.to === to && bus.time === time
        );

        if (availableBuses.length === 0) {
            busResults.innerHTML = "<p>No buses found for your selection.</p>";
            return;
        }

        availableBuses.forEach(bus => {
            busResults.innerHTML += `
                <div class="bus-card">
                    <h3>Bus ${bus.id}</h3>
                    <p><strong>From:</strong> ${bus.from}</p>
                    <p><strong>To:</strong> ${bus.to}</p>
                    <p><strong>Departure Time:</strong> ${time}</p>
                    <p><strong>Price:</strong> ₹${bus.price}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <button onclick="bookBus(${bus.id})">Book Now</button>
                </div><hr>
            `;
        });
    });
});

function bookBus(id) {
    alert("Bus " + id + " booked!");
}
