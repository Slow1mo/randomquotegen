/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr, } from "@fortawesome/free-brands-svg-icons";

class Generator extends React.Component {

    render() {
        const {sQuote, getNewIndex} = this.props;

        return (
            <Card>
                <CardContent>
                    <Typography id="text">
                        {sQuote.quote} - <span id="author">{sQuote.author}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button id='new-quote' size='small' onClick={getNewIndex}>New Quote</Button>
                    <IconButton id='tweet-quote' target="_blank" href={encodeURI(`https://twitter.com/intent/tweet?text=${sQuote.quote}&hashtags=ReactJS`)}>
                    
                        <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
                        
                    </IconButton>
                    <IconButton id='tumblr-quote' target="_blank" href={encodeURI(`https://www.tumblr.com/widgets/share/tool?caption=${sQuote.quote}&hashtags=ReactJS`)}>
                        <FontAwesomeIcon icon={faTumblr} size="sm"></FontAwesomeIcon>
                    </IconButton> 
                </CardActions>
            </Card>
        );
    }
}
export default Generator


