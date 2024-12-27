# Harry Potter Quiz Application

This project is a web-based quiz application themed around the Harry Potter universe. Users can test their knowledge of Harry Potter by answering a series of questions. The application is built using Spring Boot for the backend and a responsive HTML/CSS/JavaScript-based frontend.

## Features

- **Interactive Quiz:** A fun and engaging way to test your Harry Potter knowledge.
- **Responsive Design:** The app is fully responsive and adapts to various screen sizes.
- **Dynamic Questions:** Questions are loaded dynamically.
- **Harry Potter Theme:** Styled with colors, fonts, and background music inspired by Harry Potter.
- **Scoreboard:** Tracks user scores to show performance.

## Technologies Used

- **Backend:** Spring Boot
- **Frontend:** HTML5, CSS3, JavaScript (with Thymeleaf templates)
- **Database:** H2 (in-memory database)
- **Styling Framework:** Bootstrap
- **Version Control:** Git

## Project Structure

```
project-directory/
│
├── src/main/
│   ├── java/ (contains backend code written in Java)
│   ├── resources/ 
│   │   ├── static/ (CSS, JS, images, and other static files)
│   │   ├── templates/ (Thymeleaf HTML templates)
│   │   ├── application.properties (configuration)
│
├── pom.xml (Maven dependencies)
├── README.md (this file)
```

## How to Run

### Prerequisites

1. Ensure you have Java 11 or later installed.
2. Install Maven.

### Steps to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd spring-boot-quiz-app
   ```

3. Build the project using Maven:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

5. Open your browser and go to:
   ```
   http://localhost:8080
   ```

## Usage Instructions

1. Enter your name on the homepage to start the quiz.
2. Answer the multiple-choice questions.
3. View your score at the end of the quiz.

## Future Improvements

- Add user authentication for personalized score tracking.
- Implement a leaderboard for competitive play.
- Expand the quiz with more questions and categories.
- Improve the adaptive design for enhanced usability.

## Contributors

- **Nurgozha Adil and Abdrakhman Nursultan**  
  Developer and Designer  

## License

This project is licensed under the MIT License. See the LICENSE file for details.
