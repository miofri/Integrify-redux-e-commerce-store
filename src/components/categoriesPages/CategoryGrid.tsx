import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { Products } from "../../interface/ProductsInterface";
import { cartSlice } from "../../store/cartSlice";
import { store } from "../../store/store";

interface Product {
  currentItems: Products[];
}

export const CategoryGrid = ({ currentItems }: Product) => {
  const handleAddToCart = (data: Products) => {
    store.dispatch(cartSlice.actions.addProduct(data));
  };
  return (
    <>
      {currentItems.map((data: Products) => (
        <Grid key={data.id} item xs={4}>
          <Card sx={{ maxWidth: "sm" }}>
            <CardMedia
              component="img"
              height="200"
              image={data.images[0]}
              alt={data.title}
            />
            <CardContent>
              <Typography variant="subtitle2" component="div">
                {data.price}€
              </Typography>
              <Typography variant="h4" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2">{data.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddToCart(data)}>
                Add to cart
              </Button>
              <Link to={`/product/${data.id}`}>
                <Button size="small">More details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};
