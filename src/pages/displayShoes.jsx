import { memo } from 'react'
import { Link } from 'react-router-dom'
import Api from '../components/api'
import './displayShoes.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Grid } from '@material-ui/core';
import cx from 'classnames'

const useStyles = makeStyles(theme => ({
    main__page: {
        padding: '2em 0',
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        background: '#e6e6f7'
    },
    products: {
        padding: '1em 2em',
    },

    homeProduct: {
        '&:hover': {
            transform: 'scale(1.02, 1.02)'
        }
    },

    media: {
        height: 240,
        maxWidth: '100%'
    },
    title: {
        fontWeight: theme.typography.fontWeightRegular
    },
    price: {
        color: '#3b4d6d',
        fontWeight: theme.typography.fontWeightMedium
    }
}));


const DisplayShoes = () => {
    const classes = useStyles();

    return (
        <main className={classes.main__page}>
            <div className={cx(classes.products, 'container')}>
                <Grid container spacing={3} >
                    {
                        Api.map(shoe =>
                            <Grid item xs={12} sm={6} md={4} key={shoe._id} >
                                <Link to={shoe._id}>
                                    {/* 
                                    <div id={shoe._id} className='home--product'>
                                       <img className='home--images' src={shoe.src} alt='shoe' />
                                       <h3 className='home--title'>{shoe.title}</h3>
                                       <button className='shopNow--button'>Shop Now</button>
                                    </div> 
                                */}
                                    <Card className={classes.homeProduct}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={cx(classes.media)}
                                                image={shoe.src}
                                                title="Shoe"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div" className={classes.title}>
                                                    {shoe.title}
                                                </Typography>
                                                <Typography variant="h5" className={classes.price}>
                                                    ${shoe.price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </main >
    )
}
export default memo(DisplayShoes)