

import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import "./style.css"
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const MainPage = () => {
    const items = useSelector((state) => state.item.items);

    return (
        <>

            <div className="mainPage">
                <div className="title">
                    <h1>EXPLORE OUR E-BOOKS</h1>
                    <Button variant="contained"  color="success" >See all</Button>
                </div>
                <div className="card">
                {items.map((item) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.image}
                            title={item.title}
                        />
                        <CardContent className="CardContent">
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}

                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <Rating name="no-value" value={null} />
                            </Typography>

                            <Typography gutterBottom component="div">
                                USD {item.price}
                            </Typography>
                        </CardContent>
                        <CardActions className="cartAction">
                            <Button variant="contained"  color="success" >Play</Button>
                           <ShoppingCartIcon />
                        </CardActions>
                    </Card>

                ))}
                </div>

            </div>
        </>
    );
}

export default MainPage;