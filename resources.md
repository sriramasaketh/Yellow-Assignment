# Resources

This document provides information about the resources used in the Job Listing App project.

## API

- **Job Listings API**
  - **Endpoint:** `https://api.example.com/jobs`
  - **Description:** Fetches a list of job postings. Supports pagination for infinite scrolling.
  - **Parameters:**
    - `page`: Page number for pagination (e.g., `page=1`).
  - **Response:**
    ```json
    {
      "jobs": [
        {
          "id": "1",
          "title": "Software Engineer",
          "location": "New York, NY",
          "salary": "$100,000",
          "phone": "+1-234-567-8901"
        },
        ...
      ]
    }
    ```

- **Job Detail API**
  - **Endpoint:** `https://api.example.com/job/{id}`
  - **Description:** Fetches details for a specific job posting.
  - **Parameters:**
    - `id`: Job ID (e.g., `id=1`).
  - **Response:**
    ```json
    {
      "job": {
        "id": "1",
        "title": "Software Engineer",
        "location": "New York, NY",
        "salary": "$100,000",
        "phone": "+1-234-567-8901",
        "description": "Develop and maintain software applications.",
        "requirements": "3+ years of experience in software development."
      }
    }
    ```

## Libraries and Tools

- **React**
  - **Version:** 18.x
  - **Description:** A JavaScript library for building user interfaces.
  - **Documentation:** [React Documentation](https://reactjs.org/docs/getting-started.html)

- **React Router**
  - **Version:** 6.x
  - **Description:** Declarative routing for React.js applications.
  - **Documentation:** [React Router Documentation](https://reactrouter.com/)

- **CSS Flexbox**
  - **Description:** A CSS layout module for aligning and distributing space within a container.
  - **Documentation:** [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- **Axios**
  - **Version:** 1.x
  - **Description:** Promise-based HTTP client for the browser and Node.js.
  - **Documentation:** [Axios Documentation](https://axios-http.com/docs/intro)

## Design Assets

- **Logo**
  - **File:** `resources/images/logo.png`
  - **Description:** The application’s logo used in the header.

- **Favicon**
  - **File:** `resources/images/favicon.ico`
  - **Description:** The favicon used in the browser tab.

- **Mockups**
  - **Homepage:** `resources/mockups/homepage.png`
  - **Job Detail:** `resources/mockups/job-detail.png`
  - **Bookmarks:** `resources/mockups/bookmarks.png`
  - **Description:** Visual mockups for different pages of the application.

## Documentation

- **API Documentation**
  - **File:** `resources/documentation/API.md`
  - **Description:** Detailed information about the API endpoints used in the application.

- **Contributing Guidelines**
  - **File:** `resources/documentation/CONTRIBUTING.md`
  - **Description:** Guidelines for contributing to the project.

- **License**
  - **File:** `resources/documentation/LICENSE`
  - **Description:** The project's license details.

## Additional Information

For any questions or additional resources, please refer to the project’s GitHub repository or contact the project maintainers.
