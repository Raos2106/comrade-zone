document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventTitle = document.getElementById('event-title').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventTime = document.getElementById('event-time').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDetails = document.getElementById('event-details').value;
    const eventImage = document.getElementById('event-image').files[0];

    // Store event data in local storage
    const eventData = {
        title: eventTitle,
        location: eventLocation,
        time: eventTime,
        date: eventDate,
        details: eventDetails,
        image: URL.createObjectURL(eventImage)
    };

    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventData);
    localStorage.setItem('events', JSON.stringify(events));

    // Redirect to events.html
    window.location.href = 'events.html';
});

function displayEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventsList = document.getElementById('eventsList');

    if (events.length === 0) {
        eventsList.innerHTML = '<p>No events posted yet.</p>';
    } else {
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item'; // Use CSS class for styling
            eventItem.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%;">
                <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 100%; border-radius: 5px; display: block;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; color: white; text-shadow: 1px 1px 2px black; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="event-info"> <!-- Use CSS class for styling -->
                    <h3>${event.title}</h3>
                    <p>Location: ${event.location}</p>
                    <p>Time: ${event.time}</p>
                    <p>Date: ${event.date}</p>
                    <p>Details: ${event.details}</p>
                </div>
                </div>
            </div>
            `;
            eventsList.appendChild(eventItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayEvents);
