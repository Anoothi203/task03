import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    
    <div className="navbar">
       <div className="container flex">
        <h1 className="logo">Koko's_Coffee</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>

            </ul>
        </nav>
       </div> 
    </div>
    
    <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Simpler Coffee</h1>
                <p>Coffee made simply - for everyone.</p>
                <a href="about.html" className="btn btn-ouline">Read_More</a>
            </div>

            <div className="showcase-form card">
                <h2>request a tour of the roasting facility </h2>
                <form>
                    <div className ="form control">
                       <input type="text" name="name"
                       placeholder="Name"
                       required/>
                    </div>
                    <div className ="form control">
                       <input type="text" name="city"
                       placeholder="City"
                       required />
                    </div>
                    <div className ="form control">
                       <input type="email" name="email"
                       placeholder="Email"
                       required />
                    </div>
                    <input type="submit" value="send" className="btn btn-primary" />
                </form>
    
            </div>
        </div>
    </section> 
  
    <section className="stats">
        <div className="container">
            <h3 className="stats-heading text-center my-1">
                Welcome to the best platform for coffee
            </h3>

            <div className="grid grid-3 text-center my-4">
                <div>
                    <i className="fas fa-server fa-3x"></i>
                    <h3>10,349,405+</h3>
                    <p className="text-secondary">Coffee beans roasted</p>
                </div>
                <div>
                    <i className="fas fa-upload fa-3x"></i>
                    <h3>2000+</h3>
                    <p className="text-secondary">Customers served</p>
                </div>
                <div>
                    <i className="fas fa-project-diagram fa-3x"></i>
                    <h3>12</h3>
                    <p className="text-secondary">Different branches</p>
                </div>
            </div>
        </div>
    </section>
   
    <section className="cli">
        <div className="container grid">
            <img src="images/cli.png" alt="" />
            <div className="card">
              <h3>Affordable, locally- made, fertilizer-free coffee</h3> 
            </div>
            <div className="card">
                <h3>Coffee that you'll actually like </h3>
            </div>
        </div>
    </section>

<section className="cloud bg-primary my-2 py-2">
    <div className="container grid">
        <div className="text center">
            <h2 className="lg">Extremely Good Coffee</h2>
            <p className="p lead my-1">Indian coffe like never before</p>
            <a href="about.html" className="btn btn-dark">Read More</a>
        </div>
        <img src="images/cloud.png " alt="" />
    </div>

</section>

<section className="cities">
    <h2 className="md text-center my-2">
            cities 
        </h2>
        <div className="container flex">
            <div className="card">
                <h4>Delhi</h4>
            </div>
            <div className="card">
                <h4>Chandigarh</h4>
                
              </div>
              <div className="card">
                <h4>Mumbai</h4>
                
              </div>
              <div className="card">
                <h4>Manipal</h4>
                
              </div>
              <div className="card">
                <h4>Bengaluru</h4>
                
              </div>
                  <div className="card">
                <h4>Ludhiana</h4>
               
              </div>
              <div className="card">
                <h4>Kolkata</h4>
               
              </div>
        </div>
</section>
 
    <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
            <div>
                <h1>Koko_coffee
                </h1>
                <p>Copyright &copy; 2020</p>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#"><i className="fab fa-github fa-2x"></i></a>
                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </footer>
</div>
  );
}

export default App;
