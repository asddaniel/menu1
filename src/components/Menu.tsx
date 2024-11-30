export default function Menu(){
    
    return (
        <>
            <div className="phone">
  <img src="iphone.jpg" className="w-full h-full" alt="" />
  <div className="menu">
    <div className="options">
      <div className="option selected">Accueil</div>
      <div className="option">A propos</div>
      <div className="option">Produits</div>
      <div className="option">Contact</div>
    </div>
  </div>
  <svg className="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 400" height="400" width="220">
    <g className="top-bars" stroke-width="4">
      <path className="bar bar1" d="M 178,20 H 202" />
      <path className="bar bar2" d="M 178,29 H 202" />
    </g>
  </svg>
  <div className="menu-click-area" onClick={()=>{
    (document.querySelector('.phone') as HTMLElement).classList.toggle('active')
  }} ></div>
</div>
        </>
    )
}