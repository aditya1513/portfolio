import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
// import Image from '../components/image'
import Container from '../components/Container/Container'
import ZostelProject from '../images/zostel.png'
import CrofarmProject from '../images/crofarm.png'
import RevvProject from '../images/revv.jpg'
import Portrait from '../images/me.jpeg'

const IndexPage = () => (
  <Layout>


  <div className='hero-landing'
  
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    height: '32.5rem',
  }}>
    <Container>
      <div className="hero-content"
      style={{
        display: 'flex',
        gridColumn: '1/6',
        flexDirection: 'column',
        alignSelf : 'center',
        height : '50%',
        
      }}> 
      <h1>Hi</h1>
      <p>I am product designer based in gurgaon.
        I create delightful experience with empathy for user.</p>
      {/* <button
      style={{
        backgroundColor : '#2D26EB',
        border : 'none',
        color : 'white',
        textDecoration : 'none',
        padding: '1rem 0 2.4rem 1rem',
        textAlign: 'left',

      }}
      >
    
      Get in touch</button> */}
      <p>Recent Projects</p>
      </div>

      <div className="hero-img"
       style={{
        gridColumn:'8/13'
      }}
      >
      <img src={Portrait}/>
      
      </div>
    </Container>
  
  </div>

  
  <section className="section-work-1"
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    background : '#F7F8FA'
    }}
  >
    <Container>
      <div className="section-work-1-content"
       style={{
        alignSelf : 'center',

       }}
      >

      <h1>Zostel - Backpacker's App</h1>
      <p>We help innovative companies build great 
           apps, digital products & services.</p>
      <Link to='/' >Explore Now</Link>
      </div>
      <div className="section-wokr-1-media"
         style={{
           gridColumn:'4/13'
         }}
      >
        <img src={ZostelProject}/>
      </div>

    </Container>
  </section>

  <section className="section-work-1"
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    background : '#20B437'
    }}
  >
    <Container>
    <div className="section-wokr-1-media"
         style={{
           gridColumn:'1/8',
           padding : '4rem 0 3rem 0',
         }}
      >
        <img src={CrofarmProject}/>
      </div>
      <div className="section-work-1-content"
       style={{
        alignSelf : 'center',
        gridColumn : '9/13',

       }}
      >

      <h1>Crofarm - Website</h1>
      <p>We help innovative companies build great 
           apps, digital products & services.</p>
      <Link to='/' >Explore Now</Link>
      </div>
     

    </Container>
  </section>
  <section className="section-work-1"
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    background : '#FFFFFF'
    }}
  >
    <Container>
      <div className="section-work-1-content"
       style={{
        alignSelf : 'center',
        gridColumn : '1/4',

       }}
      >

      <h1>Revv - Identity Design</h1>
      <p>We help innovative companies build great 
           apps, digital products & services.</p>
      <Link to='/' >Explore Now</Link>
      </div>
      <div className="section-wokr-1-media"
         style={{
           gridColumn:'4/13',
           padding: '10rem 0 0 0',

         }}
      >
        <img src={RevvProject}/>
      </div>

    </Container>
  </section>

  <section className='section-about-us'
  
  style={{
    display: 'grid',
    gridColumn: '1/4',
    gridTemplateColumns: 'inherit',
    background : '#2D26EB'
    }}>
    <Container>
      <div className="section-content"
      style={{
         gridColumn : '3/11',
         padding : '5rem 0 3rem 0',
         color : 'white',
         fontSize : '400',
         lineHeight : '2'

      }}

      >
      <h1>About Me</h1>
      <p> Studio Fitkari is a design studio 
         that specializes in brand identity, 
         interactive experiences, and digital 
         products. We maintain a focused team
         of talented people and build strong 
         personal relationships with our clients 
         to develop thoughtful and articulate 
         solutions.</p>
         </div>

        <div className="process-content"
        style={{
          gridColumn : '3/11',
          padding : '3rem 0 4rem 0',
          gridColumn : '2/12',
          display: 'flex',
          fontSize : '14px'
        }}
        > 
        <div className="Process"
           style={{
             backgroundColor : 'white',
             color : 'black',
             padding : '2rem',
             margin : '0 2rem 0 0'

           }}
        >
         <h4>Discover</h4>
         <p>We help innovative companies build great 
           apps, digital products & services. </p>
         </div> 
         <div className="Process"
         style={{
          backgroundColor : 'white',
          color : 'black',
          padding : '2rem',
          margin : '0 2rem 0 0'

        }}
         >
         <h4>Discover</h4>
         <p>We help innovative companies build great 
           apps, digital products & services. </p>
         </div> 
         <div className="Process"
         style={{
          backgroundColor : 'white',
          color : 'black',
          padding : '2rem',
          margin : '0 2rem 0 0'

        }}
         >
         <h4>Discover</h4>
         <p>We help innovative companies build great 
           apps, digital products & services. </p>
         </div> 
         </div>
        
    </Container>
    
  </section>

    
  </Layout>
)

export default IndexPage
