import Button from '@material-ui/core/Button';
import { type } from 'os';
import { CartItemType } from '../App';
import { Wrapper } from './Item.styled';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt= {item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p className='text'> {item.description}</p>
            <h3>&#8358; {item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}> Add To Cart</Button>
    </Wrapper>
);

export default Item;