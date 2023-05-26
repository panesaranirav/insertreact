import React from 'react'
import './Insurt.css'
import { useState } from 'react';
const Insurt = () => {
    const [name,setName]=useState("");
    const [lastname,setLastName]=useState("");
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState("");
    
    const [users,Setusers]=useState([]);
        const userSubmit=(e)=>{
        e.preventDefault()
        const user={
            name,
            lastname,
            email,
            password,
        }
        Setusers(...users,user);
        setName(e.name);
        setLastName(e.lastname);
        Setemail(e.email);
        Setpassword(e.password);
       ; 
    }
    

  return (
    <>
    <div className='benner'>
        <div className='login'>
        <form onSubmit={userSubmit}>
            <div className='Firstname'>
                <h1>First Name</h1>
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='Lastname'>
                <h1>Last Name</h1>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='E-mail'>
                <h1>E-Mail</h1>
                <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
            </div>
            <div className='Password'>
                <h1>Password</h1>
                <input type="password" value={password} onChange={(e) => Setpassword(e.target.value)}  />
            </div> 
            <div className='Button'>
                <button>Submite</button>
            </div>
            </form>
        </div>
    </div>
    <div className='table1'>
    <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>password</th>
        <th>Add</th>
        <th>Delet</th>
      </tr>
    </thead>
    <tbody>
    <tr>
    {users.map=(user)=>{
        return(
        <div>
        <td>{user.name}</td>
        <td>{user.Lastname}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td><button>edit</button></td>
        <td><button>delete</button></td>
        </div> 
        );
    }
    }
    </tr>     
    </tbody>
  </table>
  </div>
      </>      
  )
}

export default Insurt;
