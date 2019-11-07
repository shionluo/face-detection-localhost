import React from "react";

//-- Components --//
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import ImageLinkForm from "../Image-Link-Form/Image-Link-Form";
import FaceDetection from "../Face-Detection/Face-Detection";
import Boxes from "../Boxes/Boxes";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const Home = () => (
  <div>
    <Navigation />
    <Logo />
    <Info />
    <ImageLinkForm />
    <FaceDetection>
      <Boxes />
    </FaceDetection>
  </div>
);

export default Home;
