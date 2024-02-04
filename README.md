# Note Taking Backend

A simple backend for a note-taking application using TypeScript, NodeJS, and Express.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Assumptions](#assumptions)
- [Running the API](#running-the-api)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-jolo/note-taking-be.git

2. Navigate to the project folder:

   ```bash
   cd note-taking-be

3. Install dependencies:
   
   ```bash
   npm install

4. Create `.env` file and provide variables needed
   
   - Create file
      ```bash
      touch .env

   - Provide variables
      ```env
      PORT=3000
      NOTES_PATH='./data/notes.json'

### Assumptions
Database used is file handled which in json format for ease of use. Only one user per database thus reading and writing from file is in sync format.

## Running the API

1. The API will be running at http://localhost:8080.

- Build the server:
    ```bash
    npm run build

- Start the server:

    ```bash
    npm run start

2. Using the uploaded `thunder-collection_Notes.json` file, you can import it in **Thunder Client via VSCode** or in **Postman**

## API Documentation
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/notes | Create a new note. |
| GET | /api/notes | Retrieve all notes |
| GET | /api/notes/:id | Retrieve a specific note by ID. |
| PUT | /api/notes/:id | Update a specific note. |
| DELETE | /api/notes/:id | Delete a specific note. |

## Environment Variables

- `PORT`: Port on which the server will run. Default is 8080.
- `NOTES_PATH`: Path on which the file db will be in. Default is "./data/notes.json"

Create a `.env` file in the root of your project and define the necessary environment variables.

**Note**: Ensure that you do not commit your `.env` file to version control

Example `.env` file:

   ```env
   PORT=3000
   NOTES_PATH='./data/notes.json'
