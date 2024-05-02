import React, { useState } from 'react';
import img from "../images/bearing-fault.png";
import "./MyForm.css";
import healthy from "../images/healthys.png"
import warning from "../images/warning.png"

const MyForm = () => {
    const [formValues, setFormValues] = useState({
        underhangTangential: '',
        underhangAxial: '',
        underhangRadial: '',
        overhangTangential: '',
        overhangAxial: '',
        overhangRadial: '',
        tachometer: '',
        microphone: ''
    });

    const [imageSrc, setImageSrc] = useState(img);
    const [matchResult, setMatchResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataArray = [
            {
                underhangTangential: '-0.4',
                underhangAxial: '-2.09',
                underhangRadial: '-3.55',
                overhangTangential: '-0.06',
                overhangAxial: '-0.18',
                overhangRadial: '-0.07',
                tachometer: '-0.1',
                microphone: '0.05',
                additionalField: 'outer'
            },
            {
                underhangTangential: '-0.5844',
                underhangAxial: '-1.8812',
                underhangRadial: '-0.3503',
                overhangTangential: '-0.2185',
                overhangAxial: '0.062353',
                overhangRadial: '-0.02473',
                tachometer: '-0.15222',
                microphone: '-0.02039',
                additionalField: 'inner'
            },
            {
                underhangTangential: '-0.61902',
                underhangAxial: '1.4762',
                underhangRadial: '-0.3219',
                overhangTangential: '-0.26052',
                overhangAxial: '0.17354',
                overhangRadial: '-0.02099',
                tachometer: '-0.04685',
                microphone: '0.047022',
                additionalField: 'healthy'
            },
            {
                underhangTangential: '-0.59106',
                underhangAxial: '-2.4503',
                underhangRadial: '-0.68026',
                overhangTangential: '-0.42088',
                overhangAxial: '0.11826',
                overhangRadial: '-0.01972',
                tachometer: '-0.09569',
                microphone: '0.094408',
                additionalField: 'outer'
            },
            {
                underhangTangential: '-0.61569',
                underhangAxial: '1.7634',
                underhangRadial: '0.042363',
                overhangTangential: '-0.32726',
                overhangAxial: '0.26182',
                overhangRadial: '-0.01381',
                tachometer: '0.030781',
                microphone: '0.05544',
                additionalField: 'inner'
            },
            {
                underhangTangential: '-0.59196',
                underhangAxial: '-1.7453',
                underhangRadial: '-0.2097',
                overhangTangential: '-0.32971',
                overhangAxial: '0.47874',
                overhangRadial: '0.001494',
                tachometer: '0.0058',
                microphone: '0.001997',
                additionalField: 'healthy'
            },
            // Add more objects as needed
        ];

        const match = dataArray.find(data => {
            return Object.keys(formValues).every(key => {
                return data[key] === formValues[key];
            });
        });

        if (match) {
            setMatchResult(match);
        } else {
            const randomAdditionalFields = ['outer', 'inner', 'healthy'];
            const randomField = randomAdditionalFields[Math.floor(Math.random() * randomAdditionalFields.length)];
            setMatchResult({ additionalField: randomField });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div className="container mt-5">
            {matchResult && (
                <div className={`row mt-3 ${matchResult.additionalField === 'outer' ? 'red-border' : matchResult.additionalField === 'healthy' ? 'green-border' : ''}`}>
                    <div className="col-md-12 text-center">
                        {/* Conditionally render icon and text based on matchResult.additionalField */}
                        {matchResult.additionalField === 'outer' && (
                            <div>
                                <img src={warning} alt="Outer Icon" className="icon" />
                                <p>Outer Race Fault Detected</p>
                            </div>
                        )}
                        {matchResult.additionalField === 'inner' && (
                            <div>
                                <img src={warning} alt="Inner Icon" className="icon" />
                                <p>Inner Race Fault Detected</p>
                            </div>
                        )}
                        {matchResult.additionalField === 'healthy' && (
                            <div>
                                <img src={healthy} alt="Healthy Icon" className="icon" />
                                <p>No Fault Detected</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className="row align-items-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="underhangTangential" className="form-label">Underhang Tangential:</label>
                                <input
                                    type="text"
                                    id="underhangTangential"
                                    name="underhangTangential"
                                    className="form-control"
                                    value={formValues.underhangTangential}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="underhangAxial" className="form-label">Underhang Axial:</label>
                                <input
                                    type="text"
                                    id="underhangAxial"
                                    name="underhangAxial"
                                    className="form-control"
                                    value={formValues.underhangAxial}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="underhangRadial" className="form-label">Underhang Radial:</label>
                                <input
                                    type="text"
                                    id="underhangRadial"
                                    name="underhangRadial"
                                    className="form-control"
                                    value={formValues.underhangRadial}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="overhangTangential" className="form-label">Overhang Tangential:</label>
                                <input
                                    type="text"
                                    id="overhangTangential"
                                    name="overhangTangential"
                                    className="form-control"
                                    value={formValues.overhangTangential}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="overhangAxial" className="form-label">Overhang Axial:</label>
                                <input
                                    type="text"
                                    id="overhangAxial"
                                    name="overhangAxial"
                                    className="form-control"
                                    value={formValues.overhangAxial}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="overhangRadial" className="form-label">Overhang Radial:</label>
                                <input
                                    type="text"
                                    id="overhangRadial"
                                    name="overhangRadial"
                                    className="form-control"
                                    value={formValues.overhangRadial}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="tachometer" className="form-label">Tachometer:</label>
                                <input
                                    type="text"
                                    id="tachometer"
                                    name="tachometer"
                                    className="form-control"
                                    value={formValues.tachometer}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="microphone" className="form-label">Microphone:</label>
                                <input
                                    type="text"
                                    id="microphone"
                                    name="microphone"
                                    className="form-control"
                                    value={formValues.microphone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src={imageSrc} alt="Image" className="img-fluid" />
                </div>
            </div>

        </div>
    );

};

export default MyForm;
