# Tower of Hanoi Solver API

This is a Back-End service for solving the Tower of Hanoi puzzle. The service provides endpoints for executing the puzzle-solving algorithm and handling JSON payloads.

## Features

- RESTful API endpoints for Tower of Hanoi puzzle operations.
- JSON payloads for input and output data.

## Dependencies

- Node.js: JavaScript runtime environment for running server-side code.
- Express: Web application framework for Node.js.
- Other dependencies as specified in the package.json file.

## API Endpoints

- `POST /solve`: Solve the Tower of Hanoi puzzle with the provided input.
- `GET /example`: Get an example JSON payload for Tower of Hanoi puzzle.

## Usage

1. Send a POST request to the `/solve` endpoint with a JSON payload containing the number of disks.
2. The service will return a JSON response containing the sequence of movements required to solve the Tower of Hanoi puzzle with the specified number of disks.
