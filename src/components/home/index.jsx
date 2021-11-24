import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import './style.css'
export default function Home() {
    return (
        <Container>
            <div style={{textAlign: 'center',marginTop:'100px'}} >
            <h1>Wellcome My Practices Projects</h1>
            </div>
             <nav>

            <ul className="d-flex" style={{listStyle:'none',justifyContent:'center',marginTop:'20px'}}>
              <li className="nav_item">
                <Link style={{textDecoration:'none'}} to="/">Home</Link>
              </li>
              <li className="nav_item">
                <Link style={{textDecoration:'none'}} to="/tictac">TicTac</Link>
              </li>
              <li className="nav_item">
                <Link style={{textDecoration:'none'}}  to="/timecouter">Time Counter</Link>
              </li>
              <li className="nav_item">
                <Link style={{textDecoration:'none'}} to="/todoapp">Todo App</Link>
              </li>
              <li className="nav_item">
                <Link style={{textDecoration:'none'}} to="/smartpoll">Smart Poll</Link>
              </li>
            </ul>
          </nav>
        </Container>
    )
}
