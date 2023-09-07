# Frontend Intern Task README

## Table of Contents

- [Project Overview](#project-overview)
- [Task Description](#task-description)
- [Implementation](#implementation)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)

## Project Overview

This repository contains my solution for the Frontend Intern Task. The task involved creating a web page using HTML, CSS, and JavaScript to display specific personal and real-time data attributes. Each required element had a specified data-testid attribute for easy identification and testing.

## Task Description

The task requirements were as follows:

- Display Slack Name prominently.
- Showcase the Slack profile picture with the Slack username as alt text.
- Indicate the current day of the week.
- Display the current UTC time in milliseconds.
- Mention the track (e.g., Frontend).
- Provide a clickable link to my GitHub repository.

## Implementation

To fulfill the task requirements, I followed these steps:

1. **HTML Structure:** I created the basic structure of the web page using HTML, including all the required elements with their respective data-testid attributes.

2. **CSS Styling:** I applied CSS styling to enhance the visual appeal of the page. The styling included backgrounds, fonts, colors, and responsive design for better user experience.

3. **JavaScript for Real-Time Data:** I used JavaScript to dynamically update the current day of the week and UTC time in milliseconds. I also added a function to handle errors, such as missing profile pictures or GitHub URLs.

4. **GitHub Hosting:** I hosted the web page on GitHub Pages, making it accessible via the URL [https://yourusername.github.io/your-repo](https://yourusername.github.io/your-repo).

5. **Testing:** I tested the page thoroughly to ensure that all elements were displayed correctly, real-time data updated as expected, and error handling worked as intended. I used the data-testid attributes for testing.

## Error Handling

Error handling was implemented to improve user experience:

- **Missing Profile Picture:** If the Slack profile picture is missing, the code displays a default profile picture and provides a default alt text for accessibility.

- **Missing GitHub URL:** If the GitHub repository URL is not found, the code displays an error message and removes the link to prevent broken links.

## Testing

To ensure the functionality and correctness of the web page, I performed testing by:

- Checking that all elements were displayed as specified in the task description.

- Verifying that the current day of the week and UTC time were updated in real-time.

- Simulating missing profile pictures and GitHub URLs to confirm error handling.

## Contributing

I welcome contributions and feedback to improve this project. If you have any suggestions or find issues, please open an issue or submit a pull request.

Thank you for reviewing my solution!

