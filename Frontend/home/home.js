document.addEventListener("DOMContentLoaded", function() {
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const searchBtn = document.querySelector(".book-btn");
    const busResults = document.getElementById("busResults");

    const buses = [
        { id: 1, from: "palakkad", to: "wayanad", time: "early-morning", price: 500 },
        { id: 2, from: "palakkad", to: "bangalore", time: "morning", price: 800 },
        { id: 3, from: "coimbatore", to: "thrissur", time: "afternoon", price: 600 },
        { id: 4, from: "wayanad", to: "bangalore", time: "night", price: 1000 },
        { id: 5, from: "thrissur", to: "palakkad", time: "morning", price: 400 },
    ];


    fromSelect.addEventListener("change", function() {
        const fromValue = this.value;
        for (let option of toSelect.options) option.disabled = false;
        if (fromValue) {
            const optionToDisable = toSelect.querySelector(`option[value="${fromValue}"]`);
            if (optionToDisable) {
                optionToDisable.disabled = true;
                if (toSelect.value === fromValue) toSelect.value = "";
            }
        }
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
                    <p><strong>Departure Time:</strong> ${time.replace("-", " ").toUpperCase()}</p>
                    <p><strong>Price:</strong> ₹${bus.price}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <button onclick="bookBus(${bus.id})">Book Now</button>
                </div><hr>
            `;
        });
    });
});

