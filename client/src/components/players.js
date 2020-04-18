import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Players extends React.Component {

    constructor() {
    super();
        this.state = {
            players: []
        } 
    } 

    componentDidMount() {
    console.log('mount');
        fetch("http://localhost:5000/api/players")
            .then(response => response.json())
            .then (result => {
                console.log(result);
                this.setState({players: result})
        })
        
    }

  render() {
    
    return(
        <div className='container'>
            {this.state.players.map((player => 
                <Card key={player.id} className='cardRoot' variant="outlined">
                    <CardContent>      
                        <Typography className='typography' color="textSecondary" gutterBottom>
                            {player.country}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {player.name}
                        </Typography>
                        <Typography className='typoPOs' color="textSecondary">
                            <b>Searches:</b> {player.searches}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
  } 

} 

export default Players;