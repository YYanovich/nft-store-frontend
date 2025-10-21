# NFT Marketplace Frontend

This is the frontend for the NFT Marketplace application, built with Next.js, React, and TypeScript. It provides a user-friendly interface to browse, search, and create NFTs.

## Deployment on Vercel

nft-store-frontend-kappa.vercel.app

## Tech Stack

- **Next.js**: A React framework for production.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Material-UI (MUI)**: A popular React UI component library.
- **Axios**: A promise-based HTTP client for making API requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

1.  **Clone the repository** (if you haven't already).
2.  **Navigate to the frontend directory**:
    ```bash
    cd nftFrontend/nft-project
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

## Configuration

The frontend needs to know the URL of the backend API. This is configured via an environment variable.

1.  Create a file named `.env.local` in the `nftFrontend/nft-project` root directory:
    ```bash
    touch .env.local
    ```
2.  Add the following variable. Replace the URL with your actual backend API URL (either local or deployed).

    ```env
    # .env.local.example

    # The base URL of your backend API
    NEXT_PUBLIC_API_URL=http://localhost:5002
    ```

    **Note**: The `NEXT_PUBLIC_` prefix is required by Next.js to expose the variable to the browser.

## Running the Application

To run the frontend in development mode:

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

## Features

- **View NFTs**: Displays a grid of all available NFTs.
- **Search**: Dynamically filters NFTs by name with a debounced search request to the backend.
- **Create NFT**: A modal form allows users to upload an image and provide details to mint a new NFT.
- **Responsive Design**: The layout adapts to different screen sizes.

