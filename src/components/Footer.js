import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
const Footer =()=> {
  
    return (
        
            <Box >
      <h2 style={{ color: "grey", 
                   textAlign: "center", 
                   marginhrefp: "-50px" }}>
        NewsMonkey: A News Portal 
      </h2>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">General</FooterLink>
            <FooterLink  href="/business">Business</FooterLink>
            <FooterLink  href="/entertainment">Entertainment</FooterLink>
       
            <FooterLink  href="/health">Health</FooterLink>
      
            <FooterLink href="/sports">Sports</FooterLink>
        </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" , }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <div className='text-center text-light'>
        <b>@ 2023 NewsMonkey</b></div>
    </Box>
        
    )
  }


export default Footer
