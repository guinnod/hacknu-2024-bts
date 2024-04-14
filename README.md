# Microservices Project Overview

This project utilizes a microservices architecture to deliver a robust and scalable application, combining various technologies such as Next.js, Django, Express.js, FastAPI, and Flask. Each microservice plays a critical role, from the frontend user interface to backend data handling, web scraping, and scheduled tasks management. The services are containerized using Docker and orchestrated with Docker Compose, all hosted on Google Cloud Platform.

## Table of Contents

-   [Introduction](#introduction)
-   [Architecture](#architecture)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Configuration](#configuration)
-   [Documentation](#documentation)
-   [Examples](#examples)
-   [Troubleshooting](#troubleshooting)
-   [Contributors](#contributors)
-   [License](#license)

## Introduction

This application is designed to leverage the strengths of several frameworks and libraries to manage different facets of a web application. The frontend is built with Next.js, offering server-side rendering for improved performance and SEO. The backend API is managed by Django and Python. The project also features an AI model handler built with Express.js, a web scraper in FastAPI, and a scheduler using Flask.

## Architecture

The system architecture consists of the following components:

-   **Frontend Service:** Next.js
-   **Backend API:** Django
-   **GPT Handler:** Express.js
-   **Scraper Service:** FastAPI
-   **Scheduler Service:** Flask

Each service runs in its own Docker container, ensuring isolation, easy scalability, and straightforward deployment. The orchestration of these containers is managed with Docker Compose.

## Installation

### Prerequisites

-   Docker
-   Docker Compose
-   Google Cloud Account
