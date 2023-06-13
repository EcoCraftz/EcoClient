import bird from "./assets/bird.png";

function App() {

  return (
    <>

      <h1 className="text-4xl font-bold underline bg-red-300 text-teal-500 text-center mb-5">
        <span className="ms-auto">Hello world!</span>
      </h1>
      halalalalalalal
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={bird} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
