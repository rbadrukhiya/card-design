import './App.css';
import Card from './Card';
import Carddata from './Carddata';
import 'bootstrap/dist/css/bootstrap.min.css';
let j = 0
const arr = [
  'red',
  'aqua',
  'pink',
  'black',
  'green',
  // 'red',
  'skyblue'

]
function App() {
  
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center row-cols-xl-3 row-cols-md-2 row-cols-lg-3 row-cols-sm-1" xs={1}>
          {
            Carddata.map((item) => {
              if (j == arr.length) {
                j = 1
              }
              else {
                j++
              }
              return (
                <>
                  {/* <Card img={item.img} title={item.title} desc={item.desc} items={j} > </Card> */}

                  <div className="col-auto">

                    <div className="card-flex" style={{backgroundColor:arr[j-1]}}>
                      <div className="card-design desc "  >
                        <img src={item.img} />
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>

      </div>
    </>
  );
}

export default App;
