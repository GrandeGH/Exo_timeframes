import './Profil.css'

function Profil({setPeriode}) {
    
    return (
        <>
            <div className='bg-primary rounded-2'  style={{
                width:"200px",
                height:"100%"
            }}>
                <div className='p-3'>
                    <div className='imgJeremy'></div>
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>    
                </div>

                <div className='bg-info p-3'>
                    <div>
                        <button onClick={()=> setPeriode("daily")}>Daily</button>
                    </div>
                    <div>
                        <button onClick={()=> setPeriode("weekly")}>Weekly</button>
                    </div>
                    <div>
                        <button onClick={()=> setPeriode("monthly")}>Monthly</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profil