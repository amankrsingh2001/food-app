

const Card = (data) =>{

  

    return (
       <div className='h-[450px] overflow-auto w-60 m-10 p-10 border border-slate-400 bg-[#FFF1D7] rounded-[20px] '>
        <img className='rounded-[30px] border' src= "data:image/jpeg;base64,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" />

    <h3 className='mt-2 font-bold py-2 text-lg'>{data?.data?.info?.name}</h3>
    <h5 className="p-0.5 mt-2" >{data?.data?.info?.cuisines.join(", ")}</h5>
    <p className='p-1 mt-2 font-bold'> {data?.data?.info?.locality}</p>
    <p className='p-1 mt-2 font-bold'>Rating:-{data?.data?.info?.avgRating}</p>

    </div>
    )
}

export default Card;