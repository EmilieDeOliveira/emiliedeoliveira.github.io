import React from 'react'
import './formations.css';
import Title from '@/app/components/title/title';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const Formations = () => {

  return (
    <section id='formations'>
      <div>
        <Title text={"Formations"}></Title>
        <Timeline sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '50px', color: '#E83151' }} />
              <TimelineDot sx={{ width: "50px", height: '50px' }} />
              <TimelineConnector sx={{ height: '50px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
              <Typography fontSize={24}>2019</Typography>
              <Typography variant="h6" component="span" fontSize={24}
                fontWeight={800}>
                Licence professionnelle DReAM
                (Design et Réalisation d’Applications Mobiles )
              </Typography>
              <Typography>Formation Bac +3 en développement web et mobile. </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '50px' }} />
              <TimelineDot sx={{ width: "50px", height: '50px' }} />
              <TimelineConnector sx={{ height: '50px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '50px', px: 2 }}>
              <Typography fontSize={24}>2018</Typography>

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
