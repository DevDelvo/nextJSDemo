import { useState, useEffect } from 'react';

const Prices = ({ bpi }) => {
    const [currency, setCurrency] = useState('USD')

    const handleChange = (e) => {
        e.preventDefault();
        setCurrency(e.target.value);
    }

    const renderList = (currency) => {
        let list = '';
        if (currency === 'USD') {
            list = (
                <li className="list-group-item">
                    Bitcoin rate for {bpi.USD.description}:
                    <span className="badge badge-primary">{bpi.USD.code}</span>
                    <strong>{bpi.USD.rate}</strong>
                </li>
            )
        } else if (currency === 'GBP') {
            list = (
                <li className="list-group-item">
                    Bitcoin rate for {bpi.GBP.description}:
                    <span className="badge badge-primary">{bpi.GBP.code}</span>
                    <strong>{bpi.GBP.rate}</strong>
                </li>
            )
        } else if (currency === "EUR") {
            list = (
                <li className="list-group-item">
                    Bitcoin rate for {bpi.EUR.description}:
                    <span className="badge badge-primary">{bpi.EUR.code}</span>
                    <strong>{bpi.EUR.rate}</strong>
                </li>
            )
        }
        return list;
    }

    return (
        <div>
            <ul className="list-group">
                {renderList(currency)}
            </ul>
            <br />
            <select className="form-control" onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}
export default Prices;