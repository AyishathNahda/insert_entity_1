import { useState } from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import "./AddBook.css";

function AddBook(){
    const navigate=useNavigate();
    const[newBook,setNewBook]=useState({
        title:"",
        author:"",
        description:"",
        coverImage:""
    });
    const handleChange=(e)=>{
        setNewBook({...newBook,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Book added");
        navigate("/")

    };

    return(
        <div>
            <Navbar />
            <h2> Add new Book</h2>
            <form onSubmit={handleSubmit} className="book-form">
            <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={newBook.description} onChange={handleChange} required></textarea>
            <input type="url" name="coverImage" placeholder="Cover Image URL" value={newBook.coverImage} onChange={handleChange} required />
            <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;