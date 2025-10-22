# NFT Marketplace Frontend

This is the frontend for the NFT Marketplace application, built with Next.js, React, and TypeScript. It provides a user-friendly interface to browse, search, and create NFTs.



Vercel deploy 
https://nft-store-frontend-two.vercel.app/



<img width="1728" height="1117" alt="image" src="https://github.com/user-attachments/assets/edad3a40-b1f0-473a-9131-c510b15ad527" />

<img width="1728" height="1117" alt="image" src="https://github.com/user-attachments/assets/8591eec3-fd32-42dd-9cd5-048fa699aec4" />


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
    # For local development keep the local address
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
- **Create NFT**: A modal form allows users to upload an image and provide details to mint a new NFT.
- **Responsive Design**: The layout adapts to different screen sizes.
