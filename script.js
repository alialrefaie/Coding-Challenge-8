// U72955273
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let eventDate = document.getElementById('eventDate').value;
    let preferences = document.querySelectorAll('input[name="prefernfce"]:checked');
    let preferenceTexts = [];
    preferences.forEach(function(preference) {
        preferenceTexts.push(preference.value);
    });

    if(!name || !email || !eventDate || preferenceTexts.length === 0) {
        alert('Please fill out all fields and select at least one preference.');
        return;
    }

    // Registration details
    let details = document.getElementById('registrationDetails');
    details.innerHTML = `<p>Name: ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Event Date: ${eventDate}</p>
                        <p>Preferences: ${preferenceTexts.join(', ')}</p>`;                  
});