import React from 'react'
import ReactDOM from 'react-dom'

const books =[
    { id:1,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51Yngd0TjFS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
title:'think and grow rich',
author:'Napoleon Hill',
},

{ id:2,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51r4E42VAkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
title:'as a man thinketh',
author:'James Allen',
},

]

function Booklist(){
    return(
        <section className='booklist'>
            {books.map((book,index) =>{
                return <Book key={book.id} {...book}></Book>;
                
            })}
        </section>
    );
}

const Book =({img,title,author}) =>{

     const clickHandler= (e)=>{
         console.log(e);
         alert('book added to cart');
     }

    return(
        <article className='book' onMouseHover ={()=>{
            console.log(author);
        }} >
            <img src={img} alt=''/>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>Buy</button>
        </article>

        
    );
};


ReactDOM.render(<Booklist /> ,document.getElementById("root"));