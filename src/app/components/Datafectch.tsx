import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'

const Datafetch = async () => {
    const query = await client.fetch(
     ` *[_type == "products"] {
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{
          title
        },
        description,
        inventory,
        tags
      }`
      
    );
    console.log(query);
  return (
    <div>
      {query.map((products:any)=>{
        return(
            <div key={products}>
                <h1>{products.name}</h1>
                <p> {products.price}</p>
                <Image  src={urlFor(products.imageUrl).url()} alt={products.name} width={100} height={100}/>
            </div>
        )
      })}
    </div>
  )
}

export default Datafetch