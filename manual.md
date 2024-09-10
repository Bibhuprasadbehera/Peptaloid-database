# Peptaloid Database - User Manual

## Introduction

The Peptaloid Database is designed to manage and analyze peptaloid-related data. It provides a user-friendly interface for adding, searching, and analyzing data associated with peptaloids.

## Installation

### Requirements:

- Python 3.x
- FastAPI
- PostgreSQL
- React (for frontend)
- Node.js (for frontend dependencies)

### Installation Steps:

1. Clone the Repository:

        git clone https://github.com/your-repository/peptaloid-database.git
    
2. Backend Installation (FastAPI):

    - Navigate to the backend folder.

            cd backend    
    - Install dependencies via pip:
    
            pip install -r requirements.txt
    - Create the database and apply migrations:
    
            alembic upgrade head
3. Frontend Installation (React):

    - Navigate to the frontend folder.

            cd frontend   
    - Install dependencies via npm:

            npm install
      
4. Run the Application:

    - Start the backend server:
    ```bash
    uvicorn main:app --reload
    ```
    
    - Start the frontend development server:

    ```bash
    npm start
    ```
    
## Usage
1. Access the Web Interface

   Once both the frontend and backend servers are running, access the application by visiting:

       http://localhost:3000
         
2. User Authentication

    - Create a new account or log in if you already have one.
    - Upon logging in, you'll be redirected to the dashboard, where you can manage data.

3. Managing Data
   
    - Adding New Data
      - Navigate to the "Add Data" section.
      - Fill in the necessary fields, including SMILES string, properties, and relevant annotations.
      - Submit the form to add the data.

    - Searching the Database
      - Use the search bar in the dashboard to query data using SMILES strings, molecule properties, or other parameters.
      - Results will be displayed in a table format with options to view or edit entries.

    - Data Analysis
      - Access the analysis tools to visualize data trends, compare molecules, or export results for further research.

## Error Handling

In case of issues, the application will display error messages, particularly when:

  - Invalid SMILES strings are submitted.
  - The database connection fails.

## Maintenance
### Database Backups

  Perform regular backups of the PostgreSQL database using pg_dump:

    pg_dump peptaloid_db > backup.sql
    
### Updating the Application

  Pull the latest changes from the repository:

    
    git pull origin main
    
Re-run the installation and migration steps if there are updates to the database schema.


