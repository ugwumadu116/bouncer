import React from 'react';
import { navLinks } from '../../data/metadata'

const Product = (props) => {
    // console.log(history);
    // console.log(location );
    // console.log(params );
    console.log(props );

    return (
        <div className="App mockup">
            <ul>
                {navLinks.map(({ name, data: { header, categories } }, i) => (
                    <li key={i}>
                        {name}
                        <div>
                            <ul>
                                {header.map((link, index) => (
                                    <li key={index}>{link}
                                        <ul>

                                            {categories[index].map((category, key) => (
                                                <li key={key}>{category}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Product;
