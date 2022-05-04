import React from 'react'
import { Button } from '../Button';

import { HeroButtons, HeroContainer } from './styles'

const HeroSection = () => {
  return (
    <HeroContainer>
      <h1>Travel More</h1>
      <p>Plan your next trip today</p>
      <HeroButtons>
        <Button big primary>Get Started</Button>
      </HeroButtons>
    </HeroContainer>
  )
}

export default HeroSection;