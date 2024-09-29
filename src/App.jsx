import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [data, setData] = useState({});

    const givePrice = () => {
        if (data.price && data.discount) {
            let result = data.price - (data.price * data.discount) / 100;
            return ` ${result.toFixed(2)} nis`;
        }
    };
    return (
        <div>
            <h1 className=" text-center">Lazy Ass </h1>
            <div className=" d-flex flex-column">
                <label className="mx-auto">
                    price:
                    <input type="number" className=" form-control" onChange={(e) => setData({...data, price: e.currentTarget.value})} />
                </label>
                <label className="mx-auto form-label">
                    discount(%):
                    <input type="number" className=" form-control" onChange={(e) => setData({...data, discount: e.currentTarget.value})} />
                </label>
            </div>
            <div>
                <h3 className="text-center">Total price: {givePrice()} </h3>
            </div>
        </div>
    );
};

export default App;
