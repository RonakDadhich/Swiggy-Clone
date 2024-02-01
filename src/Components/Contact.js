const Contact = () => {
    return(
        
        <div className="contact-head">
            <h1>Contact Me!!!!!</h1>

            <div className="details">
                <p className="text-black font-bold">Hello I am Ronak Dadhich and I'm Front-End Developer so the Frontend development involves creating the user interface and user experience of a website or web application. HTML (Hypertext Markup Language) is used for structuring content, while CSS (Cascading Style Sheets) is employed for styling and layout. Bootstrap is a front-end framework that simplifies and speeds up the development process with pre-designed components and responsive grid systems. JavaScript adds interactivity to web pages, allowing dynamic updates and user engagement. React.js, a JavaScript library, facilitates the creation of reusable UI components, promoting a modular and efficient development approach. By mastering these technologies, you'll have a strong foundation for building modern, responsive, and interactive web applications.</p>
                <div className="contact-form">
                    <form>
                        <h2>Contact Us</h2>
                        <label for="name">Name:</label><br />
                        <input type="text" required/><br />
                        <label for="email">Email:</label><br />
                        <input type="email:" required/><br />
                        <label for="Message">Message:</label><br />
                        <textarea required></textarea><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;