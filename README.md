# URL Shortener

A simple URL shortener built using **Node.js, Express, MongoDB, and EJS**. This application allows users to shorten long URLs and track the number of times they have been clicked.

## Features

- Shorten long URLs
- Track the number of clicks per short URL
- Redirect users to the original URL
- Uses MongoDB for persistent storage

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Styling:** Tailwind CSS

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Chetan309/UrlShortener.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd UrlShortener
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start MongoDB (if running locally):**
   ```sh
   mongod
   ```
5. **Run the application:**
   ```sh
   npm start
   ```
6. **Open in Browser:**
   Visit `http://localhost:5000`

## Usage

1. Enter a long URL in the input field and click "Shorten".
2. A shortened URL will be generated.
3. Click on the short URL to be redirected to the original link.
4. Clicks are tracked and displayed in the table.


## API Routes

| Method | Endpoint      | Description              |
|--------|-------------|--------------------------|
| GET    | `/`         | Home page with URL form  |
| POST   | `/shortUrls` | Create a short URL       |
| GET    | `/:shortUrl` | Redirect to full URL     |

## Contributing

Contributions are welcome! Fork this repository and submit a pull request.

## Contact

For any inquiries or contributions, reach out via:

- **GitHub:** [Chetan309](https://github.com/Chetan309)
- **Email:** [chetan309044@gmail.com](mailto:chetan309044@gmail.com)
