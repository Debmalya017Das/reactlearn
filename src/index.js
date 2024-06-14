import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//1)Directly returning the function
    // function Greet(){
    //   return <h4>This is D and this is my first component.</h4>
    // }


//2) using arrow function
    // const Greet =()=>{
    //   return React.createElement('h2',{},"hello");
    // }

// //3) nested arrow
    // const Greet =()=>{
    //   return React.createElement('div',{},React.createElement('h2',{},"Hello"))
    // }


// --------nested compoments and tools.------------//
      // function Greet(){
      //   return (
      //     <div>
      //       <Person />
      //       <Message />
      //     </div>    
      //   );
      // }
      // const Person =()=> <h2>John Doe</h2>
      // const Message =()=>{
      //   return(
      //   <div>
      //     <h3>Hi this is my message</h3>
      //   </div>
      //   )
      // }


//--------Book project---------------//

    // function Booklist(){
    //   return(
    //     <section>
    //       <Book />
    //       <Book />
    //     </section>    
    //   );
    // }
    // function Book(){
    //   return <article>
    //     <Image></Image>
    //     <Title></Title>
    //     <Author></Author>
    //   </article>
    // }
    // const Image = () =>(
    // <img src='https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg' height= '200px' width= '150px' alt="" />
    // );
    // const Title=()=> <h4 style={{ color:'red'}}>Tintin</h4>;
    // const Author=()=> <h4>Herge</h4>;


//-----------------STARTING PROPS--------------// 

// What are props ?
// Props is a special keyword in React that stands for properties and is used for passing data from 
// one component to another. Data with props are passed in a unidirectional flow from parent to child.

//----------------- testing props--------------//



    // const author ="Herge";
    // const title ="Tintin"
   
    //  function Booklist(){
    //   return(
    //     <section className='booklist'>
    //       <Book name="proptest1" />
    //       <Book name="proptest2"/>
    //     </section>    
    //   );
    // }
    
    // function Book(props){
    //   console.log(props)
    //   return <article className='book'>
    //      <img src='https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg' height= '200px' width= '150px' alt="" />
    //     <h1 style={{ color:'red'}}>{title}</h1>
    //     <h4>{author}</h4>
    //     <p>{props.name}</p>
    //   </article>
    // }

//----------------PROPS AND CHILDREN-----------------//

          //     const firstbook= {
          //       author:"Herge",
          //       title: 'Tintin',
          //       img: 'https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg'
          //     }

          //     const secbook={
          //       author:"Tsukasa",
          //       title: 'XYZ',
          //       img: 'https://m.media-amazon.com/images/I/51KyuqcQWhL._AC_UF1000,1000_QL80_.jpg'
          //     }

          //     function Booklist(){
          //       return(
          //         <section className='booklist'>
          //           {/* Look at the brackets.The props are declared within the component tags*/}
          //           <Book
          //             img={firstbook.img}
          //             title={firstbook.title}
          //             author={firstbook.author} >
          //           {/* Now this will not appear unless we declare children */}
          //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laboriosam ratione voluptas nemo officiis similique! Fugit, quis.</p>
          //           </Book>
          //           <Book 
          //             img={secbook.img}sec
          //             title={secbook.title}
          //             author={secbook.author}
          //           />

          //         </section>
          //       )
          //     }
          //     function Book ({title, author,img,children}){           // Destructuring props
          //     // function Book(props){
          //       // const {img,title,author} = props
          //       // console.log(props)
          //         return (
          //           <article className='book'>
          //             <img src={img} height= '200px' width= '150px'alt="" />
          //             <h1>{title}</h1>
          //             <h4>{author}</h4>
          //             {children}
          //           </article>
          //         )
          //     }

          // ReactDom.render(<Booklist />,document.getElementById('root'));




//---------------------LIST----------------//

// created a list of book details
        // const books =[{
        //     id:1,
        //     img:'https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg',
        //         author:'Herge',
        //         title:' TinTin'
        // },{ id:2,
        //     author:"Tsukasa",
        //     title: 'XYZ',
        //     img: 'https://m.media-amazon.com/images/I/51KyuqcQWhL._AC_UF1000,1000_QL80_.jpg'
        // }

        // ] 

        // // maps the present value of the book and uses the local props to return the values.
        // function Booklist(){
        //     return(
        //         <section className='booklist'>
        //             {books.map((book) => {
        //                 // const {title,author,img} =book; // props // not required for type 3
        //                 return (
        //                 //type1 
        //                     // <Book img={img}
        //                     //     title={title}
        //                     //     author={author}
        //                     // />

        //                 //type2
        //                     // <Book />
        //                 //type3
        //                     <Book key={book.id} {...book}></Book> // for type 3 we cannot use destructed format.
        //                 );
        //             })}
        //         </section>
        //     );
        // }


        // function Book(props){
        //     const{title,author,img} = props; // if ww use spread operator ... then just props other wise props.book.
        //     return(
        //         <article className='book'>
        //         <img src={img} height= '200px' width= '150px' alt="" />
        //         <h1>{title}</h1>
        //         <h4>{author}</h4>

        //     </article>
        //     )    
        // }

        // ReactDom.render(<Booklist />, document.getElementById('root')
        // )


//-----------------EVENTS----------------//

// read from docs all events.
const books =[{
    id:1,
     img:'https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg',
        author:'Herge',
        title:' TinTin'
    },{ 
        id:2,
        author:"Tsukasa",
        title: 'XYZ',
        img: 'https://m.media-amazon.com/images/I/51KyuqcQWhL._AC_UF1000,1000_QL80_.jpg'
    }

] 
function Booklist(){
    return(
        <section className='booklist'>
            {books.map((book) => {
                return <Book key={book.id} {...book}></Book> 
            })}
        </section>
    );
}


function Book(props){
    const{title,author,img} = props; 
    return(
        <article className='book'>
        <img src={img} height= '200px' width= '150px' alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>

    </article>
    )    
}

ReactDom.render(<Booklist />, document.getElementById('root')
)


// rules are in this folder itself as png