// Function to update the current day of the week and UTC time in milliseconds
function updateData() {
    const currentDate = new Date();
    const currentMillis = currentDate.getTime(); // Get UTC time in milliseconds
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (Milliseconds): ${currentMillis}`;
}

// Function to handle errors
function handleErrors() {
    const profileImage = document.querySelector('[data-testid="slackDisplayImage"]');
    profileImage.onerror = () => {
        profileImage.src = 'default_profile.jpg'; // Replace with a default image
        profileImage.alt = 'Default Profile';
    };

    const githubURL = document.querySelector('[data-testid="githubURL"]');
    githubURL.onerror = () => {
        githubURL.textContent = 'GitHub Repository Not Found'; // Provide error message
        githubURL.href = '#'; // Remove the link
    };
}

// Call the update and error handling functions
updateData();
handleErrors();
