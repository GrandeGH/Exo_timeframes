import './Profil.css'

function Profil({setPeriode}) {
    
    return (
        <>
            <div className='bg-primary rounded-4'  style={{
              maxHeight:"500px"
            }}>
                <div className='row p-3'>
                    <div className='col-sm-6 col-lg-12'>
                        <div className='imgJeremy my-3 '></div>
                    </div>
                    <div className='col-sm-6 col-lg-12'>
                        <p>Report for</p>
                        <h2 className='mb-5'>Jeremy Robson</h2>    
                    </div>
                </div>
              <div className='container'>                
                <div className='row bg-dark py-3 rounded-4' style={{
                  maxHeight:"127px"
                    }}>       
                  <div className='col-sm-4 col-md-12'>
                      <button onClick={()=> setPeriode("daily")}>Daily</button>
                  </div>  
                  <div className='col-sm-4 col-md-12'>
                      <button onClick={()=> setPeriode("weekly")}>Weekly</button>
                  </div> 
                  <div className='col-sm-4 col-md-12'>
                      <button onClick={()=> setPeriode("monthly")}>Monthly</button>
                  </div> 
                </div>
              </div>
            </div>

        </>
    )
}

export default Profil