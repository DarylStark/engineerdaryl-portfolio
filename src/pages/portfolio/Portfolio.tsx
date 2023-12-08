import { PortfolioItem } from "../../model";
import PortfolioItemWidget from "./Item";

const items: Array<PortfolioItem> = [
    {
        title: 'Advent 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam nibh. Sed in ex id quam bibendum iaculis vel et orci. Nulla et risus at justo vestibulum suscipit ac volutpat libero. Vivamus tincidunt elementum neque, viverra dapibus justo fringilla nec. Fusce fermentum, enim at ullamcorper sodales, nulla nunc laoreet eros, non pellentesque enim massa nec lorem. Maecenas luctus, ipsum sed faucibus finibus, orci mi imperdiet dolor, eget luctus ligula risus ut ipsum. Mauris semper nisl nec augue venenatis gravida. Vivamus viverra a nulla at finibus. Donec ultricies enim ligula, a auctor massa congue sit amet. Nunc viverra facilisis mauris a scelerisque. Sed iaculis lorem et purus mattis, at condimentum tellus accumsan. In scelerisque elit sem, nec pretium lectus molestie sit amet.',
        used_languages: [
            'Python', 'C++'
        ]
    },
    {
        title: 'Advent 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a quam nibh. Sed in ex id quam bibendum iaculis vel et orci. Nulla et risus at justo vestibulum suscipit ac volutpat libero. Vivamus tincidunt elementum neque, viverra dapibus justo fringilla nec. Fusce fermentum, enim at ullamcorper sodales, nulla nunc laoreet eros, non pellentesque enim massa nec lorem. Maecenas luctus, ipsum sed faucibus finibus, orci mi imperdiet dolor, eget luctus ligula risus ut ipsum. Mauris semper nisl nec augue venenatis gravida. Vivamus viverra a nulla at finibus. Donec ultricies enim ligula, a auctor massa congue sit amet. Nunc viverra facilisis mauris a scelerisque. Sed iaculis lorem et purus mattis, at condimentum tellus accumsan. In scelerisque elit sem, nec pretium lectus molestie sit amet.',
        used_languages: [
            'Python', 'C++'
        ]
    }
];

function Portfolio() {
    let portfolio_items: Array<JSX.Element> = [];
    items.forEach((item) => {
        portfolio_items.push(<PortfolioItemWidget item={item} />);
    });

    return (
        <div id='portfolio'>
            {portfolio_items}
        </div>
    )
}

export default Portfolio;