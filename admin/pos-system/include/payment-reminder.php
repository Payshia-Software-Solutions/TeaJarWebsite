<style>
    /* Full-screen overlay */
    .custom-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 5000;
    }

    /* Modal box */
    .custom-modal {
        background-color: #fff;
        padding: 25px;
        border-radius: 10px;
        width: 90%;
        max-width: 400px;
        text-align: center;
        position: relative;
    }

    /* Close button */
    .custom-close-btn {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 26px;
        cursor: pointer;
        display: none;
    }

    /* Notification heading */
    .custom-modal h2 {
        margin: 0 0 20px;
        font-size: 24px;
        color: #333;
    }

    /* Notification paragraph */
    .custom-modal p {
        margin: 0 0 20px;
        color: #555;
    }

    /* Close button */
    .custom-close-button {
        padding: 10px 25px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        pointer-events: none;
        /* display: none; */
    }

    .custom-close-button:hover {
        background-color: #e53935;
    }
</style>

<div id="uniquePaymentReminder" class="custom-overlay">
    <div class="custom-modal">
        <span id="closeIcon" class="custom-close-btn" onclick="closeReminder()">&times;</span>
        <h2>Payment Reminder</h2>
        <p>Your payment is due soon. Please take action to avoid any interruptions.</p>
        <button id="closeButton" class="custom-close-button" onclick="closeReminder()">Close</button>
    </div>
</div>

<script>
    // Function to show the reminder
    function showReminder() {
        document.getElementById('uniquePaymentReminder').style.display = 'flex';
        enableCloseButtonWithDelay();
    }

    // Function to close the reminder
    function closeReminder() {
        document.getElementById('uniquePaymentReminder').style.display = 'none';
    }

    // Enable the close button after a 5-second delay
    function enableCloseButtonWithDelay() {

        let countdown = 5;
        const closeButton = document.getElementById('closeButton');
        const closeIcon = document.getElementById('closeIcon');

        closeButton.style.pointerEvents = 'none';
        closeIcon.style.pointerEvents = 'none';

        // Update the button text to show the countdown
        closeButton.textContent = `Close (${countdown})`;

        const countdownInterval = setInterval(function() {
            countdown--;
            closeButton.textContent = `Close (${countdown})`;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                closeButton.textContent = "Close";
                closeButton.style.pointerEvents = 'all';
                closeIcon.style.pointerEvents = 'all'; // Show close icon
            }
        }, 1000); // Update every second
    }

    // Automatically show the notification every 3 minutes (180,000 milliseconds)
    // setInterval(showReminder, 60000);

    // Show the reminder as soon as the page loads
    window.onload = function() {
        // showReminder();
    };
</script>