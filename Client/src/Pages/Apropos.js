import React from "react";
import logos from '../image/logos.png'
function Apropos() {
  return (
    
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}} className='parag'>
      <div  id='ww'>
        <img src={logos} alt='logo'/>
      </div>
      <div className='para' style={{width:'70%',height:'65%'}}>
      <h1 style={{fontFamily:'serif'}}>A PROPOS</h1>
      <h5 style={{fontFamily:'sans-serif'}}>
        Une société de services d’ingénierie informatique (SSII) fondée en 2011
        et présente en Tunisie,
        <br />
        France et le Moyen Orient ( L'Arabie Saudite).Depuis notre création,
        nous avons de cesse de développer <br />
        nos compétences dans le but de proposer des services innovants à mêmes
        d’anticiper l’évolution de vos <br />
        besoins. L’identité de Zedney Creative repose sur des valeurs fortes
        portées par chacun de nos  <h4>collaborateurs :</h4> 
        </h5> <br />
       
      </div>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center',margin:'10px',padding:'20px'}}>
      <div  >
      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="para2" style={{width:'40%',height:'90%'}} >
      
        <h5  style={{fontFamily:'serif'}}>RESPECT DE NOS ENGAGEMENTS ET EXCELLENCE DE NOS PRESTATIONS :</h5>
        <h6 style={{fontFamily:'sans-serif'}}><br/>
         Zedney Creative s’engage à atteindre les objectifs définis au préalable par le suivi <br/>
         et l’application rigoureuse des évolutions du domaine et de l’implication de ses clients dans <br/>
        les phases décisionnelles de leur projet.</h6>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center', alignItems:'self-end'}}>
      <div className="para2" style={{width:'40%',height:'90%'}} >
      
        <h5  style={{fontFamily:'serif'}}>RÉACTIVITÉ, FLEXIBILITÉ ET PROXIMITÉ DE NOS ÉQUIPES :</h5>
        <h6 style={{fontFamily:'sans-serif'}}><br/>
        Nous menons notre approche envers nos clients et dans les solutions offertes par nos agents dans <br/>
        le souci permanant de sécurité et de réactivité. Notre stratégie de travail et nos moyens mis   <br/>
        en œuvre font preuve de polyvalence et d’une grande flexibilité au besoin de notre client.</h6>
      </div>
      </div>
      </div>
      <div >
      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="para2" style={{width:'40%',height:'90%'}} >
      
        <h5  style={{fontFamily:'serif'}}>SÉCURITÉ DE NOS SOLUTIONS :</h5>
        <h6 style={{fontFamily:'sans-serif'}}><br/>
        Les données sont aujourd’hui un véritable patrimoine qu’il convient de protéger.<br/>
        Zedney Creative intègre ces contraintes liées à la sécurité dans chaque solution déployée chez ses clients. <br/>
        La sécurité de vos données est notre priorité.</h6>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="para2" style={{width:'40%',height:'90%'}} >
      
        <h5  style={{fontFamily:'serif'}}>RÉVERSIBILITÉ</h5>
        <h6 style={{fontFamily:'sans-serif'}}><br/>
        Toutes les solutions Zedney Creative sont dûment étudiées, réalisées et intégrées sur votre SI avec<br/>
        la formation requise pour vos employés,, la documentation, les manuels d’utilisation  <br/>
        et la garantie de réversibilité.</h6>
      </div>
      </div>
      </div>
      </div>
    </div>
   
  );
}

export default Apropos;
