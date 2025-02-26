import './Profil.css'

function Profil({setPeriode}) {
    
    return (
        <>
            <div className='bg-primary rounded-4'  style={{
              maxHeight:"500px"
            }}>
                <div className='p-3'>
                    <div className='imgJeremy my-3'></div>
                    <div>
                        <p>Report for</p>
                        <h2 className='mb-5'>Jeremy Robson</h2>    
                    </div>
                </div>

                <div className='bg-dark p-3 rounded-4' style={{
              maxHeight:"127px"
            }}>
                    <div className='mb-1'>
                        <button onClick={()=> setPeriode("daily")}>Daily</button>
                    </div>
                    <div className='mb-1'>
                        <button onClick={()=> setPeriode("weekly")}>Weekly</button>
                    </div>
                    <div className=''>
                        <button onClick={()=> setPeriode("monthly")}>Monthly</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profil