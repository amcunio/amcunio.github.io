import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import './App.css';

import Project from './components/Project';

import MyProjects from './data/MyProjects';
import Resume from './data/Resume_Alexander_Cunio.pdf'
import Transcript from './data/Transcript_Alexander_Cunio.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alexander Mark Cunio</h1>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Button href={Resume} style={{ backgroundColor: '#6375bb', borderRadius: '100px' }} variant="contained" fullWidth>
              <p className='button-text'>Resume</p>
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href='https://www.linkedin.com/in/alexander-cunio-691956166/' style={{ backgroundColor: '#6375bb', borderRadius: '100px' }} variant="contained" fullWidth>
              <p className='button-text'>LinkedIn</p>
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href={Transcript} style={{ backgroundColor: '#6375bb', borderRadius: '100px' }} variant="contained" fullWidth>
              <p className='button-text'>Academic Transcript</p>
            </Button>
          </Grid>
        </Grid>

        <br />
        
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {MyProjects.map(project=>(
            <Grid item xs={12} sm={6} md={4}>
              <Project project={project}/>
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
