import React from 'react';
import _ from 'lodash';

import { vaMedicalFacilities } from '../../utils/options-for-select';

/**
 * Select component for preferred VA Medical Facility.
 *
 * No validation is provided since base UI elements provide all
 * common options as provided in reference PDF/JS form.
 *
 * Props:
 * `value` - String. Stores the medical facility value.
 * `onValueChange` - a function with this prototype: (newValue)
 */
class VaMedicalFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedState: null };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleClinicChange = this.handleClinicChange.bind(this);
  }

  componentWillMount() {
    this.selectId = _.uniqueId('preferred-va-facility-');
  }

  stateList() {
    const stateList = _.map(vaMedicalFacilities, (val, key) => {
      return (
        <option
            key={key}
            value={key}>
          {key}
        </option>
      );
    });

    return stateList;
  }

  handleStateChange(event) {
    this.setState({ selectedState: event.target.value });
  }

  clinicList() {
    const selectedState = this.state.selectedState;
    const clinicList = vaMedicalFacilities[selectedState];
    let reactKey = 0;

    if (selectedState !== null) {
      const optionElements = clinicList.map((obj) => {
        let label;
        let value;
        if (_.isString(obj)) {
          label = obj;
          value = obj;
        } else {
          label = obj.label;
          value = obj.value;
        }
        return <option key={++reactKey} value={label}>{value}</option>;
      });

      return optionElements;
    }
    return clinicList;
  }

  handleClinicChange(event) {
    this.props.onValueChange(event.target.value);
  }

  render() {
    return (
      <div className="usa-input-grid usa-input-grid-large">
        <label>
          State
        </label>
        <select
            onChange={this.handleStateChange}
            value={this.state.selectedState}>
          <option value=""></option>
          {this.stateList()}
        </select>
        <label>
          Center/Clinic
        </label>
        <select
            onChange={this.handleClinicChange}
            value={this.state.value}>
          <option value=""></option>
          {this.clinicList()}
        </select>
      </div>
    );
  }
}

VaMedicalFacility.propTypes = {
  value: React.PropTypes.string.isRequired,
  onValueChange: React.PropTypes.func.isRequired,
};

export default VaMedicalFacility;
