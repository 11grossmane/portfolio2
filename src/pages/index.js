import React from "react"
import PropTypes from "prop-types"
// import Helmet from "react-helmet"

import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Button from "../components/_ui/Button"
import Layout from "../components/Layout.jsx"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/glob.css"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    color: ${colors.grey500};
    font-family: "Courier New", Courier, monospace;
    margin: 0;
    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`

const RenderBody = ({ projects }) => (
  <>
    {/* <Header siteTitle="asdasd" /> */}
    <Helmet
      title={"page title"}
      titleTemplate={`%s | page title`}
      meta={[
        {
          name: `description`,
          content: "my site",
        },
        {
          property: `og:title`,
          content: "sdfsdf",
        },
        {
          property: `og:description`,
          content: "sdfsdf",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "author",
        },
        {
          name: `twitter:title`,
          content: "sfsdf",
        },
        {
          name: `twitter:description`,
          content: "sfsdffd",
        },
      ]}
    />
    <Hero className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <h1>Hi I'm Eric Grossman</h1> <h1>I develop cool stuff</h1>{" "}
        </div>
        <img
          style={{ height: 100 }}
          src={require("../images/dino.png")}
          alt=""
        />
      </div>

      <a
        // href={home.hero_button_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>this is button text</Button>
      </a>
    </Hero>
    {/* <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
        />
      ))}
      <WorkAction to={"/work"}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </Section> */}

    <WorkTitle>Work</WorkTitle>
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.category}
          title={project.title}
          description={project.description}
          thumbnail={""}
          uid={""}
        />
      ))}
    </div>

    {/* <Section>
      {RichText.render(home.about_title)}
      <About bio={home.about_bio} socialLinks={home.about_links} />
    </Section> */}
  </>
)

const Index = () => {
  //Required check for no data being returned
  return (
    <Layout>
      <RenderBody projects={projects} />
    </Layout>
  )
}

export default Index

RenderBody.propTypes = {
  projects: PropTypes.array.isRequired,
}
