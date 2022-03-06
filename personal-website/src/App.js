import Grid from '@mui/material/Grid';
import './App.css';

import Project from './components/Project';

import MyProjects from './data/MyProjects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alexander Cunio</h1>
        
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {MyProjects.map(project=>(
            <Grid item xs={4}>
              <Project project={project}/>
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
