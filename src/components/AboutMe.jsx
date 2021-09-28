import React, { useState, useEffect } from 'react';

const AboutMe = (props) => {

    return (
        <div className="d-flex main">
                <div className="left">
                    <div className="border border-dark boxSizing">
                        <h1>About Me:</h1>
                        <p>Hi! I'm Alex</p>
                        <p>I was a career Chef that focused on banquets, big events and weddings.</p>
                        <p>With over 10 years of experience I cooked for a wide range of people from the average citizen to Presidents.</p>
                        <p>I've been through and seen a lot during that time, all the while learning along the way.</p>
                        <p>Now as I switch it up, I wish to bring all my knowledge and experience to help you achieve your goals.</p>
                    </div>
                    <div className="boxSizing walnutBg">
                        <p>Img pending</p>
                    </div>
                    <div className="boxSizing border border-dark"></div>
                </div>
                <div className="right">
                    <div className="boxSizing goldBg">
                        <p>Img pending</p>
                    </div>
                    <div className="border border-dark boxSizing">
                        <h1>Interests:</h1>
                        <p>When i'm not coding I enjoy playing games on my Pc and catching up on Netflix.</p>
                        <p>I also do love the renaissance fair and local cons.</p>
                        <p>If i'm feeling particularly active I go for a round of paintball or go canoeing instead. </p>
                    </div>
                    <div className="boxSizing charGreyBg">
                        <p>Img pending</p>
                    </div>
                </div>
            </div>
    );
}

export default AboutMe;