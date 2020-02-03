import React, {useState, useEffect} from 'react';
import './Products.scss';
import Product from '../Product/Product';
import Preloader from '../Preloader/Preloader';

const Products = ({status, category})=>{
    let linkToFetch;
    const [fetchedProducts, setProducts] = useState([]);
    const [productsToRender, addToRender] = useState([]);
    const [loadingMoreProducts, loadingStatus] = useState(false);

    // Choose which link to fetch from upon category change in filter
    switch (category) {
        case 'asc':
            linkToFetch = 'http://localhost:3000/products';
            break;

        case 'id':
            linkToFetch = 'http://localhost:3000/products?_sort=id';
            break;

        case 'size':
            linkToFetch = 'http://localhost:3000/products?_sort=size';
            break;
        
        case 'price':
            linkToFetch = 'http://localhost:3000/products?_sort=price';
            break;
    
        default:
            linkToFetch = 'http://localhost:3000/products';
            break;
    }

    // Clear fetched products on category change and set new ones upon fetch
    useEffect(()=>{
        setProducts([]);
        fetch(linkToFetch)
        .then(
            res => res.json()
        ).then(
            data => (category === 'asc') ? setProducts(sortInAscendingOrder(data)) : setProducts(data)
        );
    }, [category]);

    // Sort fetch products in ascending order by ASCII face
    const sortInAscendingOrder = (products)=>{
        let faces = [], sortedFaces = [], sortedProducts = [];
        products.forEach((v, i)=> {
            faces.push(v.face);
        });
        sortedFaces = faces.sort();
        sortedFaces.forEach((v,i) => {
            products.forEach((u,i)=>{
                if(v === u.face){
                    sortedProducts.push(u);
                }
            });
        });
        return sortedProducts;
    }

   // Products to render
   useEffect(()=>{
        let productsCollected = [];
        fetchedProducts.forEach((v, i)=>{
            if(i >= productsToRender.length && i < productsToRender.length + 12){
                productsCollected.push(v);
            }
        });
        addToRender(productsCollected);
   }, [fetchedProducts]);

   // Insert ads after every 20 products fetched for each category
    useEffect(()=>{
        Array.from(document.querySelectorAll('.ad')).forEach((v, i)=>{
            v.parentNode.removeChild(v);
        });
        Array.from(document.querySelectorAll('.product')).forEach((v, i)=>{
            if(i !== 0 && i % 20 === 0){
                v.insertAdjacentHTML('beforebegin', `<img class="ad" src="http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}"/>`);
            }
        });
    }, [productsToRender]);
   

   // Detect when user has reached end of products 
   const handleScroll = (e)=>{
        if(e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight){
            if(productsToRender.length !== fetchedProducts.length){
                loadingStatus(true);
                setTimeout(()=>{
                     // console.log('At the bottom');
                    loadingStatus(false);
                    (productsToRender.length === fetchedProducts.length) ? console.log('Nothing to add') : addToProducts(productsToRender.length);
                }, 2000);
            }else{
                // console.log('End of catalogue');
                document.querySelector('.products').insertAdjacentHTML('beforeend', '<div class="notification"><p class="notification__message">end of catalogue</p></div>');
                setTimeout(()=>{
                    document.querySelector('.notification').parentNode.removeChild(document.querySelector('.notification'));
                }, 2000);
            }
        }
   }
   
   // Add to the products to be rendered
   const addToProducts = (start)=>{
        let productsCollected = [];
        fetchedProducts.forEach((v, i)=>{
            if(i >= start && i < start + 12){
                productsCollected.push(v);
            }
        });
        addToRender([...productsToRender, ...productsCollected]);
   } 
   
   // Render preloader upon page load (no products) or fetched Product list when available
    return (
        <div className="products" onScroll={handleScroll}>
            <div className={`row${(status) ? ' active' : ''}`}>
                {
                    (fetchedProducts.length === 0) ? <Preloader/> :
                    productsToRender.map((v, i) => <Product key={v.id} status={status} face={v.face} size={v.size} date={v.date} price={v.price}/> )
                }
            </div>
            {loadingMoreProducts ? <div className="products__spinner"></div> : <span></span>}
        </div>
    );
}

export default Products;