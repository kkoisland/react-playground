import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
          <h1>Home Page</h1>
          <Link to="/about">Go to About Page</Link>
        </div>
      );
  }
  
  