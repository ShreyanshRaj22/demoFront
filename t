<form onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-md-6">
            <label htmlFor="underhangTangential" className="form-label">Underhang Tangential:</label>
            <input type="text" id="underhangTangential" name="underhangTangential" className="form-control"
                value={formValues.underhangTangential} onChange={handleChange} />
        </div>
        <div className="col-md-6">
            <label htmlFor="underhangAxial" className="form-label">Underhang Axial:</label>
            <input type="text" id="underhangAxial" name="underhangAxial" className="form-control"
                value={formValues.underhangAxial} onChange={handleChange} />
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <label htmlFor="underhangRadial" className="form-label">Underhang Radial:</label>
            <input type="text" id="underhangRadial" name="underhangRadial" className="form-control"
                value={formValues.underhangRadial} onChange={handleChange} />
        </div>
        <div className="col-md-6">
            <label htmlFor="overhangTangential" className="form-label">Overhang Tangential:</label>
            <input type="text" id="overhangTangential" name="overhangTangential" className="form-control"
                value={formValues.overhangTangential} onChange={handleChange} />
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <label htmlFor="overhangAxial" className="form-label">Overhang Axial:</label>
            <input type="text" id="overhangAxial" name="overhangAxial" className="form-control"
                value={formValues.overhangAxial} onChange={handleChange} />
        </div>
        <div className="col-md-6">
            <label htmlFor="overhangRadial" className="form-label">Overhang Radial:</label>
            <input type="text" id="overhangRadial" name="overhangRadial" className="form-control"
                value={formValues.overhangRadial} onChange={handleChange} />
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <label htmlFor="tachometer" className="form-label">Tachometer:</label>
            <input type="text" id="tachometer" name="tachometer" className="form-control" value={formValues.tachometer}
                onChange={handleChange} />
        </div>
        <div className="col-md-6">
            <label htmlFor="microphone" className="form-label">Microphone:</label>
            <input type="text" id="microphone" name="microphone" className="form-control" value={formValues.microphone}
                onChange={handleChange} />
        </div>
    </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>


let icon, text;
if (match.additionalField === 'outer') {
icon = outerIcon;
text = "Outer Fault Detected";
} else if (match.additionalField === 'inner') {
icon = innerIcon;
text = "Inner Fault Detected";
} else if (match.additionalField === 'healthy') {
icon = healthyIcon;
text = "No Fault Detected";
}