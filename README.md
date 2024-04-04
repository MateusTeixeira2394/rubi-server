# Rubi Server

## Overview 🌐

This project is an ERP (Enterprise Resource Planning) SaaS (Software as a Service) Open Source. It helps companies to streamline and automate the business operations such as:

- Sales;
- Company data management;
- Products management (registration, editing and removal);
- Stocks management;
- Reports;
- Insights;

As a SaaS model, users don't need to install, manage, or maintain the software locally on their devices. Instead, they access the software through a web browser or dedicated application interface.

I called the software **Rubi Server**** in honor of the name of the family business. It doesn't have to do with the [Ruby](https://www.ruby-lang.org/pt/) language. 

## Purpose 🎯

I am developing an Open Source SaaS (Software as a Service) ERP project to showcase my skills and expertise. This project is a testament to my commitment to data security, optimized algorithms, adherence to design patterns such as the SOLID principles, and proficiency with NestJS and Next.js frameworks.

### Key Points:

Open Source SaaS ERP Project: I am creating an ERP (Enterprise Resource Planning) system using the Software as a Service (SaaS) model, emphasizing accessibility, scalability, and usability for businesses.

- **Data Security**: A primary focus of my project is ensuring robust data security measures. I implement encryption techniques, secure authentication mechanisms, and data privacy protocols to safeguard sensitive information.

- **Algorithms Performance**: I prioritize algorithms' performance optimization to ensure efficient processing, fast response times, and scalability, especially in handling large volumes of data and complex computations.

- **SOLID Design Pattern**: I adhere to the SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion) to maintain a modular, maintainable, and extensible codebase. This approach enhances code quality, readability, and testability.

- **NestJS and Next.js Expertise**: I leverage the NestJS framework for building scalable and maintainable backend services, utilizing its features like dependency injection, middleware, and structured architecture. Additionally, I utilize Next.js for developing efficient and interactive frontend interfaces, leveraging its server-side rendering capabilities and React components.

### Overall

The ERP Open Source SaaS project demonstrates a holistic approach to software development, encompassing data security, performance optimization, design patterns, and proficiency with modern frameworks like NestJS and Next.js. It serves as a comprehensive showcase of my abilities and dedication to delivering high-quality, innovative solutions in the software development domain.

## Architecture 📐

As mentioned before, this project doesn't have to do with the [Ruby](https://www.ruby-lang.org/pt/) language. In fact, the project's microservices were built in [NestJS](https://docs.nestjs.com/), and the project's frontends were in [NextJS](https://nextjs.org/). Thus, all the frameworks in the project used JavaScript as a language and [NodeJS](https://nodejs.org/en) as a runtime environment. 

### Folders' architecture

This project is divided into two folders:
- **microservices**: where each project follows the pattern: softwarename_projectname_ms;
- **frontends**: where each project follows the pattern: softwarename_projectname_fed;
- **databases**: where each project follows the pattern: softwarename_databasename_db;

### Microservice's architecture

![Rubi Server Microservices' Architecture](/rubi_server_microservice_architecture.jpg)

The project is still in progress. So, its architecture too.