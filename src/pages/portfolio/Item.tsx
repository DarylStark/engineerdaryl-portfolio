import { PortfolioItem } from '../../model';
import './Item.scss';

function PortfolioItemWidget({ item }: { item: PortfolioItem }) {
    return (
        <div className='item'>
            <p id='title'>{item.title}</p>
            <p id='description'>{item.description}</p>
            <p>{item.used_languages}</p>
        </div>
    )
}

export default PortfolioItemWidget;