import React from 'react';
import {Box, Typography} from '@mui/material';
import jxhome from '../images/jxhome.jpeg';



function Home() {
    return (
      <Box sx={{ width: '100%', mt: 5 }}> 
        <Box
          component="img"
          sx={{
            width: { xs: '50%', sm: '40%', md: '30%', lg: '20%', xl: '10%' }, 
            maxWidth: { sm: 300, md: 400, lg: 500, xl: 600 },
            height: 'auto',
            display: { xs: 'block', md: 'flex', xl: 'none' },
            mr: 1,
            mt: 2,
            mx: 'auto'
          }}
          src={jxhome}
          alt="Joyce Xu - Home"
        />
        <Box sx={{ mt: 4, mx: 'auto', width: 'auto', maxWidth: 'lg' }}>
          <Box sx={{ mx: 2, display: { xs: 'block', md: 'flex', xl: 'none' }, flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
              Join me on a journey transitioning to a tech career from a structured civil service background, building up from the basics of coding for beginners and mastering the essential tech skills needed in today's rapidly evolving landscape. I believe that with resources like ChatGPT and YouTube readily available for self-learning, becoming an advocate for technology that's accessible to all has never been more attainable.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
              I’ve come to embrace the vast potential of technology—learning, innovating, and building without limits. My conviction is that coding is not just a skill but a key that unlocks myriad opportunities in the digital age. This site chronicles my progress, learnings, milestones, and the successes that lie ahead, all aimed at inspiring others to embrace change and the continuous pursuit of self-improvement in the infinite game of life, enabled by technology.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
  

export default Home;