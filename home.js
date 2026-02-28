document.addEventListener('DOMContentLoaded', () => {

    // Time and Date Update Function
    function updateDateTime() {
        const now = new Date();

        // Update Time
        const timeElement = document.getElementById('current-time');
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (timeElement) {
            timeElement.textContent = timeString;
        }

        // Update Date
        const dateElement = document.getElementById('current-date');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        if (dateElement) {
            dateElement.textContent = dateString;
        }

        // Update Greeting based on hour
        const greetingElement = document.getElementById('greeting-title');
        const hour = now.getHours();
        let greeting = 'Good Evening!';

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning!';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon!';
        } else if (hour >= 17 && hour < 22) {
            greeting = 'Good Evening!';
        } else {
            greeting = 'Working Late?';
        }

        if (greetingElement) {
            greetingElement.textContent = greeting;
        }
    }

    // Initialize time immediately
    updateDateTime();

    // Update time every minute
    setInterval(updateDateTime, 60000);
});
