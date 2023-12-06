export default function Card({ meme}:CardProps ) {
  return (
    <div className="bg-gray-600 flex justify-center  h-[390px] my-5 rounded-xl shadow-lg border transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div className=" w-[300px] h-[300px] container bg-gray-700 rounded  ">
                <img className="w-full h-full rounded " src={`${meme.url}`} alt="" />
                <div className="flex p-4 justify-between">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-gray-100 font-bold line-clamp-1">عنوان میم: {meme.name}</h2>
                  </div>
                </div>
                <div className='text-center '>
                  <a href={`${meme.url}`} className='bg-slate-50 p-1 text-slate-800 rounded shadow'>باز کردن عکس</a>
                </div>
              </div>
           </div>
  );
}
