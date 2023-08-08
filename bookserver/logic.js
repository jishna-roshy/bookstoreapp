const db =require('./db')

const getAllBooks=()=>{
return db.Book.find().then(result=>{
    if(result){
        return{
            
                statusCode:200,
                books:result
                 
            
        }
    }
    else{
        return{
        statusCode:400,
        message:"no products found"
        }
    }
})
}

const addBook = (id,uname,author,description,price,available,image,website)=>{
    return db.Book.findOne({id}).then(books=>{
        if(books){
        return{
            statusCode:401,
            message:"unable to add"
        }}
        else{
            //create object of bbo model for new book
            const newBok = new db.Book({
              id,
              uname,
              author,
              description,
              price,
              available,
              image,
              website
            })
            //save the object in db
            newBok.save()
            return{
                statusCode:200,
                message:"book is added"
            }
        }
    })
}

 const getAnBook = (id)=>{
    return db.Book.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                book:result
            }
        }
        else{
            return{
                statusCode:400,
                message:"no book found"
            }
        }
    })
}

const removeBook=(eid)=>{
  return db.Book.deleteOne({id:eid}).then(result=>{
    if(result){
        return{
            statusCode:200,
            message:"Book removed"
        }
    }
    else{
        return{
            statusCode:400,
            message:"Book is not present"
        }
    }
  })
}

const editBook=(id,uname,author,description,price,available,image,website)=>{
    return db.Book.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.author=author
            result.description=description
            result.price=price
            result.available=available
            result.image=image
            result.website=website
            
            
            result.save()
            return{
                statusCode:200,
                message:"Book data updated"
            }

}
else{
    return{
        statusCode:400,
        message:"Book is not present"
    }
}
    })
}

const Login=(uname,email,password)=>{
  return db.Login.findOne({uname,email,password}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Login success"
            }
        }
        else{
            return{
                statusCode:400,
                message:"incorrect email or password"
            } 
        }
    })
}

module.exports={
    getAllBooks,addBook,getAnBook,removeBook,editBook,Login
}
