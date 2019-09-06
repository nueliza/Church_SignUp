import React, {Component} from 'react';
import moment from 'moment';

class PrayerRequestList extends Component{
    render(){
        var date = moment().format("MM-DD-YYYY").isSameOrBefore("06-29-2019") ? 
        moment("06-29-2019").format("MM-DD-YYYY")
        :moment("06-29-2019").add(14, 'days').format("MM-DD-YYYY")
        return(
            <div>
                <p>Prayer request for {date} </p>
            </div>
        );
    }
}

export default PrayerRequestList;