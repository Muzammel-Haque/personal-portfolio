import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import image1 from "../../Images/html5-386614_1920.jpg";

const Blog = () => {
  return (
    <div id="blog" style={{marginLeft:'115px', marginRight:'90px', marginTop:'100px'}}>
      <h2 style={{color:'wheat', marginBottom:'40px', marginTop:'80px'}}>Blogs</h2>
      <CardDeck>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
          <div style={{padding:'10px'}}>
            <h4 style={{textAlign:'center'}}>HTML</h4>
            <h6 style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, enim. Lorem ipsum dolor, consectetur adipisicing elit. Ut distinctio quos dolores, sint quia fuga doloremque quae doloribus praesentium laborum. Lorem ipsum dolor sit amet.</h6>
          </div>
          
        </Card>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
          <div style={{padding:'10px'}}>
            <h4 style={{textAlign:'center'}}>HTML</h4>
            <h6 style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, enim. Lorem ipsum dolor, consectetur adipisicing elit. Ut distinctio quos dolores, sint quia fuga doloremque quae doloribus praesentium laborum. Lorem ipsum dolor sit amet.</h6>
          </div>
         
        </Card>
        <Card style={{height:'450px', backgroundColor:'black', boxShadow:'6px 6px 6px gray'}}>
          <Card.Img style={{width:'100%'}} variant="top" src={image1} />
          <div style={{padding:'10px'}}>
            <h4 style={{textAlign:'center'}}>HTML</h4>
            <h6 style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, enim. Lorem ipsum dolor, consectetur adipisicing elit. Ut distinctio quos dolores, sint quia fuga doloremque quae doloribus praesentium laborum. Lorem ipsum dolor sit amet.</h6>
          </div>
          
        </Card>
      </CardDeck>
    </div>
  );
};

export default Blog;
