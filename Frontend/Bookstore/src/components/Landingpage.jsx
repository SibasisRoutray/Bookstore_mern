import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Landingpage() {
  return (
    <div className="container-fluid" style={{ paddingTop: "150px", width: '100%', marginBottom: "10px" }}>
      <div className="row d-flex " >
        <div className="col-md-6"  >

          <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h5 style={{ color: '#00308F', fontSize: '24px', marginBottom: '10px' }}>
              <b>A room without books is like a body without a soul.</b>
            </h5>
            <p style={{ color: '#2C3E50', fontSize: '18px' }}>
              In an ever-changing world, books remain a timeless source of wisdom and personal growth, shaping minds and connecting people across generations.
            </p>
          </div>

          <h1><br></br>Lets Get Started...</h1><br></br>
          <Link to="/Books">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          

          <Button variant="success" style={{ backgroundColor: '#28a745', borderColor: '#28a745', padding: '5px 20px', fontSize: '25px', transition: 'background-color 0.3s',  }}>Click to Read</Button>

          </Link>
        </div>
        <br></br>
        <div className="col-md-6  " >
          <img
            style={{ width: "100%", border: "solid white", borderRadius: "100px" }}
            src="https://media.istockphoto.com/id/2060984408/photo/stack-of-colorful-books-education-background-back-to-school-book-hardback-colorful-books-on.webp?b=1&s=170667a&w=0&k=20&c=6oYTSyhymBm-ZylOI1TdfYuIRaJYXfg7CojADALuqFE="
            alt="Open Books"
          />
        </div>
      </div>
    </div>
  );
}
