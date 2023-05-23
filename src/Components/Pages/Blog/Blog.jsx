import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-6 p-12 '>
            <div>
                <p> What is an access token and refresh token? How do they work and where should we store them on the client-side? </p>
                <br />
                <p>Access Token: A short-lived token issued by an authentication server to grant access rights to a client. It is typically included in API requests to authenticate the client.
                    Refresh Token: A long-lived token used to obtain a new access token without requiring the user to reauthenticate. It is securely stored on the client-side and sent to the server to request a new access token.</p>
            </div>
            <div>
                <p>Compare SQL and NoSQL databases?</p>
                <br />
                <p>SQL databases: Relational databases that use structured query language (SQL) for defining and manipulating the data. They have predefined schemas, support ACID transactions, and are suitable for complex queries and relationships.
                    NoSQL databases: Non-relational databases that offer flexible schemas and store data in various formats like key-value, document, columnar, or graph. They are highly scalable, handle large amounts of data, and provide fast read/write performance..</p>
            </div>
            <div>
                <p>What is express js? What is Nest JS?</p>
                <br />
                <p>Express.js is a popular, minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs, providing features like routing, middleware, and HTTP utility methods.

                    NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. It uses TypeScript and follows a modular, component-based architecture inspired by Angular, enabling developers to create well-structured and testable code..</p>
            </div>
            <div>
                <p>What is MongoDB aggregate and how does it work?</p>
                <br />
                <p>MongoDB Aggregate is a powerful data aggregation framework that allows you to process and transform data stored in MongoDB. It provides a set of operators and stages to perform complex data manipulations, transformations, and computations, including grouping, sorting, filtering, joining, and more.</p>
            </div>


        </div>
    );
};

export default Blog;