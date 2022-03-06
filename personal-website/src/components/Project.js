import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import '../App.css';

export default function Project(props) {
  const image_location = "/projects/" + props.project.image;
  console.log(image_location);

  return (
    <Card sx={{ minWidth: 200 }} className="Card-style">
      <h2>{props.project.title}</h2>
      <h3>{props.project.position}</h3>
      <Divider />
      <img src={image_location}/>
      <Divider />
      <p>{props.project.description}</p>
      <Divider />
      <Grid container spacing={2}>
        {props.project.tags.map(tag=>(
          <Grid item>
            <Chip label={tag} variant="filled" />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
