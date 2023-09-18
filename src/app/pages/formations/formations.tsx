import React from 'react'
import './formations.css';
import Title from '@/app/components/title/Title';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const Formations = () => {
  return (
    <section id='formations'>
      <div>
        <Title text={"Formations"}></Title>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              fontSize={34}
              fontWeight={600}
            >
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '50px', color: '#E83151' }} />
              <TimelineDot sx={{ width: "50px", height: '50px' }} />
              <TimelineConnector sx={{ height: '50px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
              <Typography variant="h6" component="span" fontSize={24}
                fontWeight={800}>
                License professionnelle DReAM
                (Design et Réalisation d’Applications Mobiles )
              </Typography>
              <Typography>Formation B+3 du développement axé web et mobile. </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              fontSize={34}
              fontWeight={600}
            >
              2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '50px' }} />
              <TimelineDot sx={{ width: "50px", height: '50px' }} />
              <TimelineConnector sx={{ height: '50px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
              <Typography variant="h6" component="span" fontSize={24}
                fontWeight={800}>
                DUT informatique Paul Sabatier
              </Typography>
              <Typography>Formation théorique et pratique des métiers de l’informatique.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}

export default Formations;
