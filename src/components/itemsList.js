import React from "react";
import ItemCard from "./itemCard";
import Header from "./header";
import Footer from "./footer";

function ItemsList(props) {
  return (
    <div>
      <Header />
      <div style={{ paddingLeft: "7vh", paddingTop: "2vh", backgroundColor:"#e8d6cc" }}>
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor"
        />
        <ItemCard
          Heading="Rice"
          subHeading="Free"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ItemsList;
