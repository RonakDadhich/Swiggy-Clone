import UserContext from "../Utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        // console.log("Parent Render")
        return(
            <div className="about">
                <div className="m-5">
                    <h1 className="text-black font-bold">About Swiggy:</h1>
                    <p className="mb-5">At Swiggy, we believe in the joy of food and the power it has to bring people together. Our journey began in 2014 with a simple idea – to connect hungry customers with their favorite restaurants and deliver food to their doorstep. Today, we have grown into one of India's leading online food delivery platforms, transforming the way people experience food.</p>
                </div>
                <div className="m-5">
                    <h2 className="text-black font-bold">Delivery Excellence:</h2>
                    <p className="mb-5">Our fleet of dedicated delivery partners works tirelessly to ensure that your food reaches you hot and fresh. With real-time tracking and a seamless ordering process, we make it easy for you to enjoy your favorite meals without any hassle.</p>
                </div>
                <div className="m-5">
                    <h2 className="text-black font-bold">Community and Sustainability:</h2>
                    <p className="mb-5">At Swiggy, we understand the importance of community and sustainability. We actively engage with our restaurant partners, delivery executives, and customers to build a strong, interconnected ecosystem. Additionally, we are committed to environmentally conscious practices to minimize our ecological footprint.</p>
                </div>
                <div className="m-5">
                    <h2 className="text-black font-bold">Join Us on this Culinary Journey:</h2>
                    <p className="mb-5">As we continue to grow and evolve, we invite you to join us on this exciting culinary journey. Explore new flavors, savor delicious moments, and let Swiggy be your trusted companion in the world of food.
                    Thank you for choosing Swiggy – where great food meets unparalleled convenience!</p>
                </div>
                <img src="https://techstory.in/wp-content/uploads/2020/10/1_z1iXRJo3Lj2uuqjG0z4ChQ.png" alt="" />
                {/* <UserClass name={"First"} location={"Dehradhun"}/> */}
            </div>
        ) 
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react web series</h2>
//             <UserClass name={"Akshay Saini (class)"} location={"Dehradhun"}/>
//         </div>
//     )
// }

export default About;
