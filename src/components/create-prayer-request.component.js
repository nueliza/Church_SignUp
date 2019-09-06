import React, { Component } from 'react';

import plus from '../plus.png';

class CreatePrayerRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangePrayerRequestIntercessory = this.onChangePrayerRequestIntercessory.bind(this);
        this.onChangePrayerRequestMemorial = this.onChangePrayerRequestMemorial.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            prayerRequest_Intercessory: "",
            prayerRequest_Memorial: "",
        }
    }

    onChangePrayerRequestIntercessory = (e) => {
        this.setState({
            prayerRequest_Intercessory: e.target.value
        });
    }

    onChangePrayerRequestMemorial = (e) => {
        this.setState({
            prayerRequest_Memorial: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            prayerRequest_Intercessory: "",
            prayerRequest_Memorial: "",
        })

        console.log(`Intercessory: ${this.state.prayerRequest_Intercessory}`);
        console.log(`Memorial: ${this.state.prayerRequest_Memorial}`);
    }
    render() {
        return (
            <div>
                <h3>Submit Prayer Request</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Intercessory Prayer:</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter names seperated by commas"
                            value={this.state.prayerRequest_Intercessory}
                            onChange={this.onChangePrayerRequestIntercessory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Memorial Prayer: </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter names seperated by commas"
                            value={this.state.prayerRequest_Memorial}
                            onChange={this.onChangePrayerRequestMemorial}
                        />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default CreatePrayerRequest;