import React from 'react';
import {Card, Container, Image} from 'semantic-ui-react'

import ric from './../images/ric.jpg';
// className="Theme-Carousel"
const About = () => (
    <div className='BackgroundBlack' >
        <div className="BackgroundImage">
            <h1></h1><h1></h1>
            <div className="Theme-White" className="Theme-About">
                <Image src={ric} centered/>
                <Card color='orange' centered fluid style={{marginTop: '0rem'}} raised>
                    <Card.Content textAlign='center'>
                        <Card.Header><h2>Hello!</h2></Card.Header>
                            <Card.Description><h4>
                                Photography is not a product. It is a collaboration and relationship between 
                                the photographer and my clients. Before I start working with a prospective client, 
                                I sit down and meet with them to discover a connection, share ideas and get to know them. 
                                It is in these meets, where we plan the photos that will capture the essence of the moment. 
                                Weddings, Senior pictures, performances, athletic events, family pictures, or a child's first 
                                photo are only a few of the places I've found myself. Sharing personal spaces with my clients 
                                is why I take the time to get to know them Their photos become a reflection of their personality, 
                                memories and the moment.
                                <br /><br />
                                I started taking photos on my eleventh birthday when my family gave me a camera. I became the official 
                                family photographer and begun teaching myself. My family was poor and they could not afford to develop 
                                my film, so I got a paper route in Junior High School and even worked on my high school newspaper.
                                I never stopped taking photos and attended business school at Arizona Western College and Northern 
                                Arizona University. 
                                <br /><br />
                                After college I started teaching in Yuma at Crane and soon after Cibola High School, 
                                all the while getting better equipment and taking little jobs here and there.
                                I attended seminars and was a fan boy getting to learn from some of the nation's best camera slingers. 
                                For the last four years I have taught photography at Cibola High School and getting to give back has been 
                                one of the most rewarding experiences in my life.  Today photography is a passion of this home grown Yuma 
                                photographer. 
                            </h4></Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </div>
    </div>
)

export default About;