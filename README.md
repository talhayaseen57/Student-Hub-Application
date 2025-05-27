# 🎓 Student Hub Application

A full-stack web application designed to streamline student and reviewer interactions within academic institutions. Built with **Spring Boot** for the backend and **React.js** for the frontend, this platform offers secure authentication, role-based access, and an intuitive user experience.

## 🚀 Features

* **User Authentication & Authorization**: Secure login system using Spring Security, supporting distinct roles for students and reviewers.
* **Student Dashboard**: Personalized interface for students to view and manage their academic activities.
* **Reviewer Panel**: Dedicated section for reviewers to assess and provide feedback on student submissions.
* **Responsive Design**: Seamless experience across desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

* **Frontend**: React.js, HTML5, CSS3
* **Backend**: Java, Spring Boot, Spring Security
* **Build Tools**: Maven

## 📂 Project Structure

```
Student-Hub-Application/
├── student-hub-frontend/     # React frontend source code
├── src/                      # Spring Boot backend source code
├── pom.xml                   # Maven project configuration
├── mvnw, mvnw.cmd            # Maven wrapper scripts
└── README.md                 # Project documentation
```

## 🧑‍💻 Getting Started

### Prerequisites

* **Java Development Kit (JDK)**: Version 11 or higher
* **Node.js & npm**: For frontend development
* **Maven**: For building the backend

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/talhayaseen57/Student-Hub-Application.git
   cd Student-Hub-Application
   ```

2. **Backend Setup**

   * Navigate to the project root directory.

   * Build the project using Maven:

     ```bash
     ./mvnw clean install
     ```

   * Run the Spring Boot application:

     ```bash
     ./mvnw spring-boot:run
     ```

3. **Frontend Setup**

   * Navigate to the frontend directory:

     ```bash
     cd student-hub-frontend
     ```

   * Install dependencies:

     ```bash
     npm install
     ```

   * Start the React development server:

     ```bash
     npm start
     ```

   * The application will be accessible at `http://localhost:3000`.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
