
import React, { useEffect, useState } from 'react'
import { Button,  Card,  Carousel, Placeholder } from 'react-bootstrap'
import affiche from '../image/affiche.png'
import Caro1 from '../image/Caro1.png'
import Caro2 from '../image/Caro2.png'
import Caro3 from '../image/Caro3.png'
import Caro4 from '../image/Caro4.png'

function Landing() {
  const  [Nom, setNom] = useState('')
  const  [prenom, setPrenom] = useState('')
  const  [email, setEmail] = useState('')
  const  [phone, setPhone] = useState('')
  useEffect( () => {
    fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch('/tweets');
    const items = await data.json();
    setItems(items);
};


  return (
    <div>
      
  <section className="Carous" >
   <Carousel variant="dark" >
  
   <Carousel.Item>
    <img
      className="d"
      src={Caro4}
      alt="Third slide"
    />
     </Carousel.Item>
  <Carousel.Item>
    <img
   
      className="d"
      src={Caro2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d"
      src={Caro3}
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d"
      src={Caro1}
      alt="First slide"
    />
    
  </Carousel.Item>
     
   
 
</Carousel>
                
             </section>
         <section className="py-5 section-2">
               <div className="container py-5 text-center">
                 <div className="row">
                   <div className="col-lg-8 mx-auto">
                     <h2>Nos services</h2>
                   <div  style={{display:'flex',flexWrap:'wrap'}} >
                     <div >
                     <p className="text-muted lead" >Nous fournissons des solutions informatiques et aidons nos clients à digitaliser leurs communications en tirant le profit des outils collaboratifs. ZEDNEY CREATIVE est fier d’offrir une belle gamme de produitsavec un support technique. Nous pouvons réaliser une analyse des processus d’affaire et les mettre en œuvre, ainsi que des services</p>
                      </div>
                      <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                  <img src={affiche} alt='bags' style={{width:'300px',height:'400px'}}></img>
                  </div>
                     </div>
                  </div>
                 
                   </div>
                   </div>
                
             </section>
           <section >
             <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
               <div>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='https://building-business.net/wp-content/uploads/2020/07/etudesetconseils1.jpg'  />
  <Card.Body>
    <Card.Title>Etudes et Conseils</Card.Title>
    <Card.Text>
    Le secteur études et conseil regroupe les entreprises du conseil en management,
     des études marketing et d’opinion, du conseil en recrutement.
    </Card.Text>
    
    <Button variant="primary"><a href='https://www.orientation-pour-tous.fr/metiers-16/metiers-secteur-d-activite/article/etudes-et-conseil-atlas' style={{color:'white'}} >Source</a></Button>
  </Card.Body>
</Card>
                </div>
               <div>               
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='https://www.elipce.com/wp-content/uploads/2020/10/MAINTENANCE-APPLICATI-img.png'  />
  <Card.Body>
    <Card.Title>TMA-INFOGÉRANCE-TRA</Card.Title>
    <Card.Text>
    La gestion par un tiers, infogérant, de tout ou partie de l’informatique d’une entreprise ou de ses processus.<br/>
     Il existe trois métiers d’infogérance, pouvant être combinés les uns aux autres
    </Card.Text>
    <Button variant="primary"><a href='https://www.tsi.com.tn/services/tma-infogerance-tra/' style={{color:'white'}} >Source</a></Button>
  </Card.Body>
</Card></div>
               <div>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='https://i0.wp.com/www.abime-concept.com/blog/wp-content/uploads/2020/01/Cr%C3%A9ation-de-site-web-5.png?resize=400%2C262&ssl=1'  />
  <Card.Body>
    <Card.Title>DÉVELOPPEMENT</Card.Title>
    <Card.Text>
    Le développement Web est le travail impliqué dans le développement d'un site Web 
    pour Internet ou un intranet.Le développement Web peut aller du développement d'une 
    simple page statique de texte brut à des applications Web complexes, des entreprises
    électroniques et des services de réseaux sociaux.
    </Card.Text>
   
    <Button variant="primary"><a href= 'https://www.net-concept.fr/developpement-web/le-developpement-web-cest-quoi/' style={{color:'white'}} >Source</a></Button>
  </Card.Body>
</Card>
</div>
 </div>
               <br/>


               <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
               <div>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://hsbmanagement.com/wp-content/uploads/2019/08/transformationdigitale-hsbmanagement-770x540.jpg"  />
  <Card.Body>
    <Card.Title>Digital(numérique)</Card.Title>
    <Card.Text>
    On dit numérique une information qui se présente sous forme de nombres associés à une indication de la grandeur
     physique à laquelle ils s'appliquent, permettant les calculs, les statistiques, 
     la vérification des modèles mathématiques. 
    </Card.Text>

    <Button variant="primary"><a href= 'https://fr.wikipedia.org/wiki/Num%C3%A9rique' style={{color:'white'}} >Source</a></Button>

  </Card.Body>
</Card>
      </div>
               <div>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.webmarketing-com.com/wp-content/uploads/2015/03/creation-organisme-formation-1.jpg"  />
  <Card.Body>
    <Card.Title>Formation </Card.Title>
    <Card.Text>
    La formation professionnelle est le processus d'apprentissage qui permet à un salarié ou un demandeur d'emploi 
    d'acquérir le savoir, le savoir-faire et le savoir-être nécessaires à l'exercice d'un métier ou 
    d'une activité professionnelle
    </Card.Text>
  
    <Button variant="primary"><a href= 'https://fr.wikipedia.org/wiki/Formation_professionnelle' style={{color:'white'}} >Source</a></Button>

  </Card.Body>
</Card>
               </div>
             
           <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.cloudways.com/blog/wp-content/uploads/Best-Web-Design-Agency.jpg"  />
  <Card.Body>
    <Card.Title>Web Agency</Card.Title>
    <Card.Text>
    Une agence web est une entreprise spécialisée dans les différentes formes de communication
     et de promotion sur le web.
    </Card.Text>
    <Button variant="primary"><a href= 'https://fr.wikipedia.org/wiki/Agence_web' style={{color:'white'}} >Source</a></Button>

  </Card.Body>
</Card>
           </div>
             </div>
             
         </section>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>

< section>
<article>
                      <h2>Digital transformation means better customer insights</h2><br/>

<h5 style={{fontFamily:'monospace',color:'GrayText'}}>At last month’s Adobe Experience Maker’s Live virtual event, Chris Parkin, Senior Director at Adobe walked <br/>
us through “Redefining the Future with Digital Transformation”. In his presentation, he showed us how Adobe is <br/>
adapting through new digital technologies and approaches, and how other Adobe customers are as well.<br/>

In his first point, he showed how digital transformation allows for a “deeper understanding of the customer,”<br/>
 discussing that in doing so, we can identify “specific customers and audience segments, understand behavior,<br/>
  and anticipate actions.” This, in turn, allows us to “use data to generate actionable insights and improve<br/>
   customer outcomes.”</h5><br/>
</article>
</section>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
             <section id='contacts'  >
      <div className="container"  >
    <div className="row "  >
          <div className="col-lg-7 mx-auto" >
            <div className="card mt-2 mx-auto p-4 bg-light"  >
              <div className="card-body bg-light" >
                <div className="container" >
                  <form id="contact-form" role="form" >
                    <div className="controls" >
                      
                      <div className="row" >
                        <div className="col-md-6" >
                          <div className="form-group" >
                            <label htmlFor="form_name" >Firstname *</label>
                            <input onChange={(e)=>{setNom(e.target.value)}} id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                          </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Last Name *</label>
                            <input onChange={(e)=>{setPrenom(e.target.value)}} id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                          </div>  
                        </div>
                        </div>
                
                      </div>
                     
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                          </div>  
                        </div>
                        </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Phone Number </label>
                            <input onChange={(e)=>{setPhone(e.target.value)}} id="form_email" type="number" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                          </div>  
                        </div>
                        </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <Button>submit</Button>
                            
                          </div> 

                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'end',alignItems:'center',color:'blue'}}>
                      <h2>zedney creative </h2>
                      </div>
                        </div>
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                        
                        
             </section>

    </div>
  )
}

export default Landing