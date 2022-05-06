import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  text-align: center;
  margin: 150px;
  margin: 150px 0;

  h1 {
    margin-bottom: 64px;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 32px;

  .image-item:nth-child(5) {
    grid-column-end: span 2;
  }
  .image-item:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }

  img:hover {
    transform: scale(1.1);
    transition: 2s all ease !important;
    cursor: pointer;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/"}
          name: { nin: ["background", "background2", "gatsby-icon"]}
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ImageContainer>
      <h1>View our Destinations</h1>
      <ImageGrid>
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </ImageGrid>
    </ImageContainer>
  )
}

export default Image;