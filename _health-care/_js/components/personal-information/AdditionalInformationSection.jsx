import React from 'react';
import _ from 'lodash';

import ErrorableCheckbox from '../form-elements/ErrorableCheckbox';
// import State from '../questions/State';
import VaMedicalFacility from './VaMedicalFacility';
import { vaMedicalFacilities } from '../../utils/options-for-select';


class AdditionalInformationSection extends React.Component {

  stateList() {
    return Object.keys(vaMedicalFacilities);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-12 columns">
            <h4>Additional Information</h4>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <ErrorableCheckbox
                label="I am enrolling to obtain minimal essential coverage under the affordable care act"
                checked={this.props.data.isEssentialAcaCoverage}
                onValueChange={(update) => {this.props.onStateChange('isEssentialAcaCoverage', update);}}/>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <h4>Select the VA Medical Facility which will be your preferred facility</h4>
            <VaMedicalFacility value={this.props.data.vaMedicalFacility}
                onValueChange={(update) => {this.props.onStateChange('vaMedicalFacility', update);}}/>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <ErrorableCheckbox
                label="Do you want VA to contact you to schedule your first appointment?"
                checked={this.props.data.wantsInitialVaContact}
                onValueChange={(update) => {this.props.onStateChange('wantsInitialVaContact', update);}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionalInformationSection;
