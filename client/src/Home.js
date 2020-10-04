import React from "react";
import Navbar from "./Navbar";
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Child Cares</h1>
            <Navbar/>
            <div class ="container">
                <img className ="hand-img" alt = "" src ="https://www.wm.edu/news/images/2020/thumbnails/heartfund720.jpg"></img>
                <div class="centered">Have a disabled child? Need free assistance? Sign up today!</div>
            </div>
            <section className ="banner">
                <div class ="container">
                    <div class = "row">
                        <div class ="col-md-6">
                            <p class ="promo">We are here to support you and you child ! </p>
                            <h4>Join our community today and get matched with our volunteers.</h4>
                        </div>
                        <div class ="col-md-6">
                            <img alt = "disabled child " className="child-pic" src ="https://www.sheknows.com/wp-content/uploads/2018/08/child-with-disability_blzop2.jpeg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className ="about">
                <h1>Our Team</h1>
                <div class = "row">
                    <div class ="col-md-6">
                        <img alt = "team" className="team-pic" src ="https://www.opencolleges.edu.au/blog/wp-content/uploads/2017/11/iStock-585800040-1.jpg"></img>
                    </div>
                    <div class ="col-md-6">
                        <h1 class ="how-help"><em>How do we help?</em></h1>
                        <p> Go on our discussion board and let us know what you're looking for. </p>
                        <p>Thats it! Within 24 hours, we will curate a team of volunteers to support you! </p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};
export default Home;