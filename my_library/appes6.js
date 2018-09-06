class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

class UI{
    addBookToList(book){
         const list = document.getElementById('book-list');

            //creating tr element
            const row = document.createElement('tr');

            row.innerHTML = ` <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.isbn}</td>
                            <td><a href="#" class="delete">X</a></td>`;
            
                    list.appendChild(row);
                    }


    showAlert(message,className){
                const div = document.createElement('div');

                //adding classes
                div.className = `alert ${className}`;
                //addtextnode
                div.appendChild(document.createTextNode(message));
                //get parent
                const container = document.querySelector('.container');
                //get form 
                const form = document.querySelector('#book-form');
                //insert alert
                container.insertBefore(div,form);
            
                //creating timeout
            
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                },3000)
    }


deleteBook(target)
{if(target.className==='delete'){
    target.parentElement.parentElement.remove();
}

}


clearFields(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';

}
}
document.getElementById('book-form').addEventListener('submit',function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    //instantiating book
    const book = new Book(title,author,isbn);
    
    
    //instantiating ui object
    
    const ui = new UI();
    
    //validate
    if(title===''|| author===''|| isbn===''){
    
        ui.showAlert(' Please fill in all fields' ,'error');
    
    }else{
    //add book to list
    
    ui.addBookToList(book);
    
    //ui success alert
    ui.showAlert('Book added successfully ','success');
    
    //clear book field
    
    ui.clearFields(book);
    
    
    }
    e.preventDefault();
    });
    
    //event listener for delete 
    
    document.getElementById('book-list').addEventListener('click',function(e){
    
        const ui = new UI();
    ui.deleteBook(e.target);
    
    //showing alert 
    ui.showAlert('Book removed successfully','success');
    
    e.preventDefault();
    });
    