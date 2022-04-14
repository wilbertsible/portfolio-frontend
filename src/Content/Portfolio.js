
function Portfolio() {
    return(
        <div>
            <p>&emsp;&emsp;Creating this portfolio page has been an experience for me. I wanted to learn full stack web development since I started my software development journey. I am fascinated with other people’s websites, and I wanted to learn how to make one. I took this as an opportunity to teach myself as much as I can about web development and what it takes to create one.</p>
            <h2>General Architecture: Three-tiered architecture</h2>
            <img src='https://i.imgur.com/ceO3EOL.jpg' alt='Three-tiered architecture' style={{width:'100%',maxWidth:'480px'}}/>
            <p>&emsp;&emsp;For the overall design, I opted for a three-tiered architecture. The three tiers are the frontend as the presentation layer, backend as the business layer, and database. I opted for this design for two main reasons. The first reason is that I want my website to be flexible. Initially, my website only consists of the frontend as a standalone presentation layer. This is good enough for blog posts. However, I want my website to eventually be able to process data to showcase my technical projects. This requires adding a backend and a database to compute and store the data respectively. The second reason is that I want to learn full stack development and understand the different layers individually and how it interacts.</p>
            <h2>Frontend: React </h2>
            <img src='https://i.imgur.com/wwtJIlu.png' alt='React' style={{width:'100%',maxWidth:'480px'}}/>
            <p>&emsp;&emsp;For the frontend, I used React. React is the most in-demand frontend library right now. From my experience, it was easy to setup React and easy to understand. However, it took me over a year to learn React. Initially, I was just following Youtube videos. The problem with this is that most React videos do not teach the reasoning behind why they do things their way. I used this to build my first website, which only contains a standalone frontend. During this time, I learned how to use JSX and create stateful and stateless components.</p>
            <p>&emsp;&emsp;My friend lent me his book which I highly recommend. The title is The React Workshop. This book taught me the basics of React, which I already had a basic understanding. However, it also goes deeper into React. From this book, I learned about React Hooks, dynamically changing the view, and using states from parent to child components and vice versa.</p>
            <p>&emsp;&emsp;My biggest struggle with the frontend is understanding best practices. There were a handful of times where I was reorganizing my folder structure, moving components in and out. This was because I want to experience upsides and downsides to doing certain things different ways. For example, having a blog that contains images inside text is a big architectural challenge. I had to make a choice about putting the blog inside the database or storing it as JSX inside React. Both have its advantages and disadvantages. In the end, I opted to do the latter.</p>
            <h2>Backend: Python</h2>
            <img src='https://i.imgur.com/MlcQGvL.png' alt='React' style={{width:'100%',maxWidth:'480px'}}/>
            <p>&emsp;&emsp;In the backend, I used Python Flask. Currently, the only function of my backend is to provide API for a couple of components in the frontend, namely, the header and the socials. What opted me to use Flask was due to an interview homework that I got from a company. The task was to create an API. I did not know anything about making APIs, so I studied Python Flask. I want to continue and make more complicated computations in Python in the future.</p>
            <h2>Database: MongoDB</h2>
            <img src='https://i.imgur.com/gMfeYLs.png' alt='React' style={{width:'100%',maxWidth:'480px'}}/>
            <p>&emsp;&emsp; want to use a NoSQL  database to store my data. This is because I want the database to be free from structure. Thus, I chose MongoDB. I have some experience with MongoDB in the past. I have worked with MongoDB which was why this was a great fit for my tech stack.</p>
            <h2>Conclusion</h2>
            <p>&emsp;&emsp;Overall, I learned a lot from creating this website. I have learned the intricacies of architecture and web development. There were times that I was overthinking how I would implement the website, even overengineering it. My advice when creating your website is to just go for it, because regardless whether you do it right or wrong, the lessons you learn from the experience will be worth it.</p>

        </div>
    )
}

export default Portfolio;