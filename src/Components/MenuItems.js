import React from 'react'

function MenuItems({menuItems}) {
    return (
        <div className="portfolis">
            {
                menuItems.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}>{item.icon1}</a>

                                    </li>
                                </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            PlaceHolder Paraph
                        </p>
                                        
                    </div>
                })
            }
            
        </div>
    )
}

export default MenuItems
