import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    return( 
        <div>
            <Link className='Link' to='/acero'>
					Acero
			</Link>
			<Link className='Link' to='/oro'>
					Oro
			</Link>
        </div>
    )
}

export default Categories;