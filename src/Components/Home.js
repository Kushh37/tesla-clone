import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title = "Model S"
        desc = "Order Online For Touchless Delivery"
        bgImg = "model-s.jpg"
        lftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Model Y"
        desc = "Order Online For Touchless Delivery"
        bgImg = "model-y.jpg"
        lftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Model 3"
        desc = "Order Online For Touchless Delivery"
        bgImg = "model-3.jpg"
        lftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Model X"
        desc = "Order Online For Touchless Delivery"
        bgImg = "model-x.jpg"
        lftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Lowest Cost Solar Panel in America"
        desc = "Money-back Guarantee"
        bgImg = "solar-panel.jpg"
        lftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section 
        title = "Solor For New Roofs"
        desc = "Solor Roof Costs Less than a New Roof Plus Solar Panels"
        bgImg = "solar-roof.jpg"
        lftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section 
        title = "Accessories"
        desc = ""
        bgImg = "accessories.jpg"
        lftBtnText = "Shop Now"
        rightBtnText = ""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`