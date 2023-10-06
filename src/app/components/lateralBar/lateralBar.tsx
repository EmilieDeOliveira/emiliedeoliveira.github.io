import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './lateralBar.css';
import Link from 'next/link';

const LateralBar = () => {
  return (
    <div className='lateralBar'>
      <div className='center'>
        <div><Link aria-label='Linkedin lien' target="_blank" href={'https://www.linkedin.com/in/emilie-de-oliveira-82915014b/'}><LinkedInIcon focusable={true} fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
        <div><Link aria-label='Github lien' target="_blank" href={'https://github.com/EmilieDeOliveira'}><GitHubIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
        <div><Link aria-label='Instagram lien' target="_blank" href={'https://www.instagram.com/deoliveira.dev/'}><InstagramIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
        <div><Link aria-label='Mail lien' target="_blank" href={'mailto:emilie.laura.deoliveira@gmail.com'}><EmailIcon fontSize="large" sx={{ color: '#BCBEC0' }} /></Link></div>
      </div>
    </div>
  )
}

export default LateralBar;
