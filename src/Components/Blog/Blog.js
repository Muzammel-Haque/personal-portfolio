import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import image1 from "../../Images/html5-386614_1920.jpg";

const Blog = () => {
  return (
    <div id="blog" style={{marginLeft:'115px', marginRight:'90px', marginTop:'100px'}}>
      <CardDeck>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
          
          
        </Card>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
         
        </Card>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
          
        </Card>
      </CardDeck>
    </div>
  );
};

export default Blog;
