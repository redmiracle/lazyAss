import React, {useState} from "react";

const App = () => {
    const [data, setData] = useState({});

    const givePrice = () => {
        if (data.price && data.discount) {
            let result = data.price - (data.price * data.discount) / 100;
            return result;
        }
    };
    return (
        <div>
            <h1>Lazy Ass </h1>
            <div>
                <label>
                    price:
                    <input type="number" onChange={(e) => setData({...data, price: e.currentTarget.value})} />
                </label>
                <label>
                    discount(%):
                    <input type="number" onChange={(e) => setData({...data, discount: e.currentTarget.value})} />
                </label>
            </div>
            <div>
                <h3>{givePrice()}</h3>
            </div>
        </div>
    );
};

export default App;
