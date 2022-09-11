import React from 'react'
import posts from '../data.json'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NotesIcon from '@mui/icons-material/Notes'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Feed = () => {
  return (
    <div>
      <ul className='posts d-flex flex-column align-items-center'>
        {posts.map((post) => {
          return (
            <Card className='mt-5 mb-3' key={post.id}>
              <Card.Header className='bg-white p-3 d-flex justify-content-between'>
                <Card.Subtitle className='d-flex align-items-center'><ViewStreamIcon /> <span>{post.title}</span></Card.Subtitle>
                <Card.Subtitle className='link d-flex align-items-center'>
                  <Link to={`/${post.made_by}`} className="link">
                    <AccountCircle /><span>{post.made_by}</span>
                  </Link>
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className='p-0'>
                <Card.Img className='card-img' src={post.img} />
              </Card.Body>
              <Card.Footer className='bg-white p-3 d-flex justify-content-between align-items-center'>
                <Card.Subtitle><NotesIcon /> {post.comment}</Card.Subtitle>
                <Card.Subtitle><FavoriteIcon className='link text-danger' /> {post.like_count}</Card.Subtitle>
              </Card.Footer>
            </Card>
          );
        })}
      </ul>
    </div>
  )
}

export default Feed